<template>
  <div>
    <b-container>
      <h1 class="mt-5 text-primary">畑の使者[NL074]</h1>
      <p>
        使用済みのスペースをタップして赤い状態にしてから、「実行する」ボタンを押してください。<card-link id="FR059" name="魔女の踊り場" />などで農場が拡張された場合には、もとある家のスペースを未使用にして代用してください。
      </p>
      <p>
        ※ソリティアでの<card-link id="NL024" name="公園のベンチ" />、<card-link id="NL037" name="ケシの花畑" />でもお使いいただけます。
      </p>
      <div class="text-center">
        <b-button variant="info" @click="pickField" :disabled="! isPickable"><b-icon-bootstrap-reboot/>実行する</b-button>
      </div>
      <div class="fields mt-3">
        <img src="@/assets/img/board.jpg" class="fields_bg">
        <label v-for="(field, key) in fields" :key="key" :class="{ field: true, 'field-checked': fields[key], 'field-picked': pickedField === key }">
          <input type="checkbox" class="field_checkbox" v-model="fields[key]">
        </label>
      </div>
    </b-container>
  </div>
</template>
<script>
import CardLink from '@/components/CardLink.vue'

export default {
  name: 'FieldMessenger',
  components: {
    CardLink
  },
  data: function() {
    return {
      pickedField: null,
      fields: [ false, true, true, false, false, false, false, false, false, false, false, false, false, false, false ]
    }
  },
  computed: {
    pickableFields: function() {
      return this.fields.map((value, key) => key).filter(key => ! this.fields[key], this)
    },
    isPickable: function() {
      return this.pickableFields.length > 0
    }
  },
  methods: {
    pickField: function() {
      this.pickedField = this.pickableFields[Math.floor(Math.random() * this.pickableFields.length)]
      this.$bvToast.toast('未使用1スペースを選択しました', {
        variant: 'success',
        autoHideDelay: 1500
      })
    }
  }
}
</script>
<style scoped>
.fields {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
}
.fields_bg {
  width: 100%;
}
.field {
  display: block;
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
}
.field-checked {
  background-color: rgba(255, 0, 0, 0.5);
}
.field-picked {
  background-image: url('../assets/img/marker.png');
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
}
.fields label:nth-of-type(1) {
  top: 8.06%;
  bottom: 68.54%;
  left: 4.75%;
  right: 80.25%;
}
.fields label:nth-of-type(2) {
  top: 36.89%;
  bottom: 38.3%;
  left: 4.75%;
  right: 80.25%;
}
.fields label:nth-of-type(3) {
  top: 67.53%;
  bottom: 7.66%;
  left: 4.75%;
  right: 80.25%;
}
.fields label:nth-of-type(4) {
  top: 8.06%;
  bottom: 68.54%;
  left: 23.75%;
  right: 61.25%;
}
.fields label:nth-of-type(5) {
  top: 36.89%;
  bottom: 38.3%;
  left: 23.75%;
  right: 61.25%;
}
.fields label:nth-of-type(6) {
  top: 67.53%;
  bottom: 7.66%;
  left: 23.75%;
  right: 61.25%;
}
.fields label:nth-of-type(7) {
  top: 8.06%;
  bottom: 68.54%;
  left: 42.75%;
  right: 42.25%;
}
.fields label:nth-of-type(8) {
  top: 36.89%;
  bottom: 38.3%;
  left: 42.75%;
  right: 42.25%;
}
.fields label:nth-of-type(9) {
  top: 67.53%;
  bottom: 7.66%;
  left: 42.75%;
  right: 42.25%;
}
.fields label:nth-of-type(10) {
  top: 8.06%;
  bottom: 68.54%;
  left: 61.25%;
  right: 23.75%;
}
.fields label:nth-of-type(11) {
  top: 36.89%;
  bottom: 38.3%;
  left: 61.25%;
  right: 23.75%;
}
.fields label:nth-of-type(12) {
  top: 67.53%;
  bottom: 7.66%;
  left: 61.25%;
  right: 23.75%;
}
.fields label:nth-of-type(13) {
  top: 8.06%;
  bottom: 68.54%;
  left: 80.25%;
  right: 4.75%;
}
.fields label:nth-of-type(14) {
  top: 36.89%;
  bottom: 38.3%;
  left: 80.25%;
  right: 4.75%;
}
.fields label:nth-of-type(15) {
  top: 67.53%;
  bottom: 7.66%;
  left: 80.25%;
  right: 4.75%;
}
.field_checkbox {
  display: none;
}
</style>
