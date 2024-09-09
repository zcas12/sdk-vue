<template>
  <div>
    <form name="orderInfo" :action="resData.PayUrl">
      <input type="text" name="ordr_idxx" :value="reqData.ordr_idxx">
      <input type="text" name="good_name" :value="reqData.good_name"/>
      <input type="text" name="good_mny" :value="reqData.good_mny"/>
      <input type="text" name="buyr_name" value="이재혁"/>
      <!-- 공통정보 -->
      <input type="hidden" name="req_tx"          value="pay" />      <!-- 요청 구분 -->
      <input type="hidden" name="shop_name"       value="TEST SITE" /><!-- 사이트 이름 -->
      <input type="hidden" name="site_cd"         :value="reqData.site_cd" />    <!-- 사이트 코드 -->
      <input type="hidden" name="currency"        value="410"/>  <!-- 통화 코드 -->
      <!-- 인증시 필요한 파라미터(변경불가)-->
      <input type="hidden" name="escw_used"       value="N" />
      <input type="hidden" name="pay_method"      :value="reqData.pay_method" />
      <input type="hidden" name="ActionResult"    :value="reqData.actionResult" />
      <input type="hidden" name="van_code"        :value="reqData.van_code" />
      <!-- 신용카드 설정 -->
      <input type="hidden" name="quotaopt"        value="12"/> <!-- 최대 할부개월수 -->
      <!-- 가상계좌 설정 -->
      <input type="hidden" name="ipgm_date"       value="" />
      <!-- 리턴 URL (kcp와 통신후 결제를 요청할 수 있는 암호화 데이터를 전송 받을 가맹점의 주문페이지 URL) -->
      <input type="hidden" name="Ret_URL"         value="http://localhost:8080/mobile/order" />
      <!-- 화면 크기조정 -->
      <input type="hidden" name="tablet_size"     value="1.0 " />
      <!-- 추가 파라미터 ( 가맹점에서 별도의 값전달시 param_opt 를 사용하여 값 전달 ) -->
      <input type="hidden" name="param_opt_1"     value="" />
      <input type="hidden" name="param_opt_2"     value="" />
      <input type="hidden" name="param_opt_3"     value="" />
      <!-- 거래등록 응답값 -->
      <input type="hidden" name="approval_key" id="approval" :value="resData.approvalKey"/>
      <input type="hidden" name="traceNo"                    :value="resData.traceNo" />
      <input type="hidden" name="PayUrl"                     :value="resData.PayUrl" />
      <!-- 인증창 호출 시 한글깨질 경우 encoding 처리 추가 (**인코딩 네임은 대문자)
      <input type="hidden" name="encoding_trans" value="UTF-8" /> -->
      <!-- 가맹점 APP 호출 URL ( 앱 연동시 필수)  -->
      <input type="hidden" name="AppUrl"         value="">
    </form>
    <button id="payment-button" @click="requestPayment">결제요청</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reqData: {},
      resData: {},
    }
  },
  created() {
    if (this.$route.query.reqData && this.$route.query.resData) {
      this.reqData = JSON.parse(this.$route.query.reqData)
      this.resData = JSON.parse(this.$route.query.resData)
    }else {
      alert("사용자 취소")
      this.$router.push('/mobile/trans-reg')
    }
  },
  methods:{
    requestPayment(){
      const orderInfo = document.orderInfo;
      orderInfo.submit();
    }
  }
}
</script>