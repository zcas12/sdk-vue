<template>
  <select v-model="actionResult">
    <option value="" selected>선택하십시오.</option>
    <option value="card">신용카드</option>
    <option value="acnt">계좌이체</option>
    <option value="vcnt">가상계좌</option>
    <option value="mobx">휴대폰</option>
    <option value="ocb">OK캐쉬백</option>
    <option value="tpnt">복지포인트</option>
    <option value="scbl">도서상품권</option>
    <option value="sccl">문화상품권</option>
    <option value="schm">해피머니</option>
  </select>
  <button id="reg-button" @click="register()">거래등록</button>
</template>
<script>
export default {
  data(){
    return{
      actionResult:"",
    }
  },
  watch:{
  },
  computed:{
  },
  methods:{
    register(){
      BRPay.register({
        site_cd: 'T0000',
        ordr_idxx: 'TEST1234213412',
        good_mny: '1004',
        good_name: '운동화',
        Ret_URL: "http://localhost:8080/mobile/order",
        successUrl: "http://localhost:3000/mobile/order", //거래 등록후에 이동할 페이지
        escw_used: 'N',
        user_agent: '',
        actionResult : this.actionResult
      })
    }

  }
}
</script>