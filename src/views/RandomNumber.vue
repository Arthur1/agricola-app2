<template>
  <div>
    <b-container>
      <h1 class="mt-5 text-primary">乱数生成</h1>
      <p>
        1から最大値までの自然数がランダムに選出されます。最大値を指定してから「生成する」ボタンを押してください。
      </p>
      <p>
        <card-link id="275" name="ぶらつき学生" />や<card-link id="NL046" name="貧者の家" />などでお使いいただけます。
      </p>
      <b-form @submit.prevent="generateRandomNumber">
        <b-row align-v="center">
          <b-col cols="12" md="7">
            <b-form-group label-cols-sm="2" label="最大値:" label-align-sm="left" label-for="form_max_number">
              <b-form-input type="number" id="form_max_number" v-model="maxNumber" min="1" required />
            </b-form-group>
          </b-col>
          <b-col cols="12" md="5">
            <b-form-group>
              <b-button variant="info" type="submit"><b-icon-bootstrap-reboot/>生成する</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <div class="text-center randomNumber mt-3" v-if="randomNumber !== null">
        {{ randomNumber }}
      </div>
    </b-container>
  </div>
</template>
<script>
import CardLink from '@/components/CardLink.vue'
export default {
  name: 'RandomNumber',
  components: {
    CardLink
  },
  data: function() {
    return {
      maxNumber: 1,
      randomNumber: null
    }
  },
  methods: {
    generateRandomNumber: function() {
      this.randomNumber = Math.floor(Math.random() * this.maxNumber) + 1
      this.$bvToast.toast('乱数を生成しました', {
        variant: 'success',
        autoHideDelay: 1500
      })
    }
  }
}
</script>
<style scoped>
.randomNumber {
  font-size: 4rem;
}
</style>
