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
    </b-container>
  </div>
</template>
<script>
import CardLink from '@/components/CardLink.vue'

export default {
  components: {
    CardLink
  }
}
</script>
