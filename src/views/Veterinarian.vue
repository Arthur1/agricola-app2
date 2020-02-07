<template>
  <div>
    <b-container>
      <h1 class="mt-5 text-primary">獣医[304]</h1>
      <p>
        各ラウンドのはじめに「マーカーを引く」ボタンを押してください。
      </p>
      <div class="text-center">
        <b-button variant="info" class="button-pickup" @click="pickMarkers" :disabled="markersList.length < 2"><b-icon-box-arrow-up/>マーカーを引く</b-button>
        <b-button variant="danger" v-b-modal.resetModal><b-icon-x-circle/>リセット</b-button>
        <b-modal id="resetModal" title="リセット" cancel-title="キャンセル" ok-variant="danger" ok-title="リセットする" @ok="resetMarkers">
          <p class="my-4">この操作は取り消せません。本当によろしいですか。</p>
        </b-modal>
      </div>
      <h2 class="mt-3 text-success">残りのマーカー</h2>
      <table class="table">
        <thead>
          <tr>
            <th v-for="marker in markers" :key="marker.id" scope="col" class="text-center">
              <img :src="marker.src" :alt="marker.name" class="markers_icon">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="marker in markers" :key="marker.id" scope="row" class="text-center">
              {{ marker.number }}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="mt-3 text-success">確率</h2>
      <table class="table">
        <thead>
          <tr>
            <th v-for="marker in markers" :key="marker.id" scope="col" class="text-center">
              <img :src="marker.animalSrc" :alt="marker.animalName" class="markers_icon">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="marker in markers" :key="marker.id" scope="row" class="text-center">
              {{ probabilities[marker.id] | percentage }}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="mt-3 text-success">履歴</h2>
      <b-list-group>
        <history-element v-for="(pair, key) in reversedHistory" :key="key" :pair="pair" :markers="markers" :length="reversedHistory.length" :order="key" />
      </b-list-group>
    </b-container>
  </div>
</template>
<script>
import HistoryElement from '@/components/Veterinarian/HistoryElement.vue'
const localStorageName = 'veterinarian_history'
export default {
  name: 'Veterinarian',
  components: {
    HistoryElement
  },
  data: function() {
    return {
      markers: [
        {
          id: 0,
          name: '葦',
          src: require('@/assets/img/reed.png'),
          animalName: '羊',
          animalSrc: require('@/assets/img/sheep.png'),
          number: 4
        },
        {
          id: 1,
          name: '石材',
          src: require('@/assets/img/stone.png'),
          animalName: '猪',
          animalSrc: require('@/assets/img/boar.png'),
          number: 3
        },
        {
          id: 2,
          name: '木材',
          src: require('@/assets/img/wood.png'),
          animalName: '牛',
          animalSrc: require('@/assets/img/cattle.png'),
          number: 2
        }
      ],
      history: []
    }
  },
  computed: {
    markersList: function() {
      let list = []
      this.markers.forEach(marker => [...Array(marker.number)].map(() => list.push(marker.id)))
      return list
    },
    reversedHistory: function() {
      return this.history.slice().reverse()
    },
    probabilities: function() {
      let markersTotal = this.markersList.length
      return this.markers.map(marker => {
        return marker.number * (marker.number - 1) / markersTotal / (markersTotal - 1)
      })
    }
  },
  created: function() {
    this.history = JSON.parse(localStorage.getItem(localStorageName)) || []
    this.history.forEach(pair => {
      if (pair[0] === pair[1]) this.markers[pair[0]].number--
    })
  },
  methods: {
    pickMarkers: function() {
      let pickedMarker1 = this.markers[this.getRandomElement(this.markersList)]
      pickedMarker1.number--
      let pickedMarker2 = this.markers[this.getRandomElement(this.markersList)]
      this.history.push([pickedMarker1.id, pickedMarker2.id])
      localStorage.setItem(localStorageName, JSON.stringify(this.history))
      if (pickedMarker1.id === pickedMarker2.id) {
        this.$bvToast.toast(`${pickedMarker1.animalName}を得ました`, {
          variant: 'success',
          autoHideDelay: 1500
        })
      } else {
        pickedMarker1.number++
        this.$bvToast.toast('何も得られませんでした', {
          variant: 'warning',
          autoHideDelay: 1500
        })
      }  
    },
    resetMarkers: function() {
      this.markers[0].number = 4
      this.markers[1].number = 3
      this.markers[2].number = 2
      this.history = []
      localStorage.removeItem(localStorageName, this.history)
      this.$bvToast.toast('リセットしました', {
        variant: 'danger',
        autoHideDelay: 1500
      })
    }
  },
  filters: {
    percentage: function(decimal) {
      return Math.round(decimal * 100) + '%'
    }
  }

}
</script>
<style scoped>
.button-pickup {
  margin-right: 1em;
}
.markers_icon {
  height: 1.5rem;
}
</style>
