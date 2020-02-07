<template>
  <div>
    <b-container>
      <h1 class="mt-5 text-primary">ホモ・ルーデンス[NL094]</h1>
      <p>
        まず、プレイ人数を設定してください。各ラウンドのはじめに「カードを引く」ボタンを押してください。
      </p>
      <b-form @submit.prevent="pickCard">
        <b-row align-v="center">
          <b-col cols="12" md="7">
            <b-form-group label-cols-sm="2" label="人数:" label-align-sm="left" label-for="form_player_number">
              <b-form-select id="form_player_number" v-model="playerNumber" :options="playerNumbers" required @change="resetCard" />
            </b-form-group>
          </b-col>
          <b-col cols="12" md="5">
            <b-form-group>
              <b-button variant="info" type="submit" :disabled="! playerNumber"><b-icon-box-arrow-up/>カードを引く</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <div class="image" v-if="currentCard">
        <img :src="currentCard.src" :alt="currentCard.name">
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'HomoLudens',
  data: function() {
    return {
      playerNumber: null,
      playerNumbers: [
        { value: null, text: '[未選択]' },
        { value: 4, text: '4人プレイ' },
        { value: 5, text: '5人プレイ' }
      ],
      pickedCardID: null,
      cards: {
        4: [
          { id: 0, name: '木材4(↓)', src: require('@/assets/img/4_0.jpg') },
          { id: 1, name: 'レンガ3(↓)', src: require('@/assets/img/4_1.jpg') },
          { id: 2, name: '葦1(↓)+石材1木材1', src: require('@/assets/img/4_2.jpg') },
          { id: 3, name: '職業1', src: require('@/assets/img/4_3.jpg') },
          { id: 4, name: '羊1食料1/猪1/牛1食料-1', src: require('@/assets/img/4_4.jpg') },
          { id: 5, name: '小劇場(↓)/増築1', src: require('@/assets/img/4_5.jpg') }
        ],
        5: [
          { id: 0, name: '木材2(↓)', src: require('@/assets/img/5_0.jpg') },
          { id: 1, name: '木材1(↓)', src: require('@/assets/img/5_1.jpg') },
          { id: 2, name: 'レンガ2(↓)', src: require('@/assets/img/5_2.jpg') },
          { id: 3, name: '葦1石材1食料1', src: require('@/assets/img/5_3.jpg') },
          { id: 4, name: '職業1', src: require('@/assets/img/5_4.jpg') },
          { id: 5, name: '小劇場(↓)', src: require('@/assets/img/5_5.jpg') }
        ]
      }
    }
  },
  computed: {
    currentCard: function() {
      if (this.pickedCardID === null) return null
      return this.cards[this.playerNumber][this.pickedCardID]
    }
  },
  methods: {
    pickCard: function() {
      let pickedCard = this.getRandomElement(this.cards[this.playerNumber])
      this.pickedCardID = pickedCard.id
      this.$bvToast.toast(`「${pickedCard.name}」が選ばれました`, {
        variant: 'success',
        autoHideDelay: 1500
      })
    },
    resetCard: function() {
      this.pickedCardID = null
    }
  }

}
</script>
<style scoped>
.image img {
  margin: auto;
  width: 100%;
  max-width: 600px;
}
</style>
