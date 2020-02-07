<template>
  <div>
    <b-container>
      <h1 class="mt-5 text-primary">東インド会社[NL052]</h1>
      <p>
        各ラウンドのはじめに「品物を引く」ボタンを押してください。
      </p>
      <div class="text-center">
        <b-button variant="info" class="button-pickup" @click="pickItem" :disabled="unpickedItemsList.length === 0"><b-icon-box-arrow-up/>品物を引く</b-button>
        <b-button variant="danger" v-b-modal.resetModal><b-icon-x-circle/>リセット</b-button>
        <b-modal id="resetModal" title="リセット" cancel-title="キャンセル" ok-variant="danger" ok-title="リセットする" @ok="resetItems">
          <p class="my-4">この操作は取り消せません。本当によろしいですか。</p>
        </b-modal>
      </div>
      <h2 class="mt-3 text-success">残りの品物</h2>
      <div class="items">
        <items-element v-for="item in items" :item="item" :pickedItemsList="pickedItemsList" :key="item.id" />
      </div>
      <h2 class="mt-3 text-success">履歴</h2>
      <b-list-group>
        <b-list-group-item v-for="(itemID, key) in pickedItemsList" :key="key">
          {{ key + 1 }}回目:
          <img class="history_icon" :src="items[itemID].src">
          <span>{{ items[itemID].name }}を得ました</span>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>
<script>
import ItemsElement from '@/components/EastIndiaCompany/ItemsElement.vue'

const localStorageName = 'east_india_company_items'

export default {
  name: 'EastIndiaCompany',
  components: {
    ItemsElement
  },
  data: function() {
    return {
      items: [
        {
          id: 0,
          name: '小麦',
          src: require('@/assets/img/grain.png')
        },
        {
          id: 1,
          name: '野菜',
          src: require('@/assets/img/vegetable.png')
        },
        {
          id: 2,
          name: '羊',
          src: require('@/assets/img/sheep.png')
        },
        {
          id: 3,
          name: '猪',
          src: require('@/assets/img/boar.png')
        },
        {
          id: 4,
          name: '牛',
          src: require('@/assets/img/cattle.png')
        },
        {
          id: 5,
          name: '木材',
          src: require('@/assets/img/wood.png')
        },
        {
          id: 6,
          name: 'レンガ',
          src: require('@/assets/img/clay.png')
        },
        {
          id: 7,
          name: '葦',
          src: require('@/assets/img/reed.png')
        },
        {
          id: 8,
          name: '石材',
          src: require('@/assets/img/stone.png')
        }
      ],
      pickedItemsList: []
    }
  },
  computed: {
    unpickedItemsList: function() {
      let allItemsList = this.items.map(item => item.id)
      return allItemsList.filter(id => ! this.pickedItemsList.includes(id), this)
    }
  },
  created: function() {
    this.pickedItemsList = JSON.parse(localStorage.getItem(localStorageName)) || []
  },
  methods: {
    pickItem: function() {
      let pickedItemID = this.unpickedItemsList[Math.floor(Math.random() * this.unpickedItemsList.length)]
      this.pickedItemsList.push(pickedItemID)
      localStorage.setItem(localStorageName, JSON.stringify(this.pickedItemsList))
      this.$bvToast.toast(`${this.items[pickedItemID].name}を得ました`, {
        variant: 'success',
        autoHideDelay: 1500
      })
    },
    resetItems: function() {
      this.pickedItemsList = []
      localStorage.removeItem(localStorageName)
      this.$bvToast.toast('リセットしました', {
        variant: 'danger',
        autoHideDelay: 1500
      })
    }
  }
}
</script>
<style scoped>
.button-pickup {
  margin-right: 1em;
}
.items {
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
}
.history_icon {
  height: 1.5rem;
  margin: 0 0.5rem;
}
</style>
