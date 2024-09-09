<template>
  <div class="wrapper">
    <div class="result-wrapper">
      <h1>결제 완료</h1>
      <p>res_cd = {{ this.$route.query.res_cd }}</p>
      <p>res_msg = {{ this.$route.query.res_msg }}</p>
      <p>trace_no = {{ this.$route.query.trace_no }}</p>
      <button id="home-btn" @click="goHome()">홈으로</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      result:{}
    }
  },
  mounted() {
  },
  methods:{
    goHome(){
      this.$router.push('/mobile/trans-reg')
    }
  }
}
</script>