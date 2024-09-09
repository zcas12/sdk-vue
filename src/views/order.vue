<template>
  <div class="wrapper">
    <h2 class="title">결제수단</h2>
    <ul>
      <li>
        <input type="radio" id="card" name="pay_method" value="100000000000" checked />
        <label for="card">신용카드</label>
      </li>

      <li>
        <input type="radio" id="deposit" name="pay_method" value="010000000000" />
        <label for="deposit">계좌이체</label>
      </li>

      <li>
        <input type="radio" id="virtual-account" name="pay_method" value="001000000000" />
        <label for="virtual-account">가상계좌</label>
      </li>
      <li>
        <input type="radio" id="point" name="pay_method" value="000100000000" />
        <label for="point">포인트</label>
      </li>
      <li>
        <input type="radio" id="phone" name="pay_method" value="000010000000" />
        <label for="phone">휴대폰</label>
      </li>
      <li>
        <input type="radio" id="card-account" name="pay_method" value="111000000000" />
        <label for="card-account">신용카드/계좌이체/가상계좌</label>
      </li>
    </ul>
    <button id="payment-button" @click="requestPayment()">결제하기</button>
  </div>
</template>
<script>

export default {
  data(){
    return{}
  },
  methods:{
    /*결제창 호출*/
    requestPayment(){
      const param = {
        site_cd: "T0000",
        site_name: "TEST SITE",
        pay_method: document.querySelector('input[name="pay_method"]:checked').value,
        ordr_idxx: "TEST1234567890",
        good_name: "옷",
        good_mny: "1004",
        buyr_name: "이재혁",
        successUrl: "http://localhost:3000/success",
        failUrl: "http://localhost:3000/fail",
        res_cd: "",
        res_msg: "",
        enc_info: "",
        enc_data: "",
        ret_pay_method: "",
        tran_cd: "",
        use_pay_method: "",
        ordr_chk: "",
        cash_yn: "",
        cash_tr_code: "",
        cash_id_info: ""
      }
      BRPay.open(param);
    },

  }
}
</script>