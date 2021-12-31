<template>
  <div>
    <Navbar></Navbar>
    <div>
      <div class="columns">
        <div class="column is-6 is-offset-1">
          <div class="content">

            <div class="block">
              <h2>Study 家教平台</h2>
              <p>
                思达迪（STUDY）家教平台是由厦大优秀学生团队在张德富教授指导下建立的家教信息平台，为孩子们提供合适的大学生辅导老师，因材施教，激发孩子们的学习潜能。
                思达迪家教平台的宗旨是“做一个专业的大学家教平台，为孩子学习排忧解难！”
              </p>
              &nbsp;&nbsp;公众号
              <img class="image is-128x128" src="../assets/studyscan.jpg">
              &nbsp;&nbsp;<a v-on:click="openstusy">前往平台</a>
            </div>

            <div class="block">
              <h2>紫金矿业试题生成系统</h2>
              <p>近些年发生不少由于员工缺乏安全意识,导致企业工厂发生灾难的事件,所以对员工进行安全知识教育显得机器重要.该系统分为三个部分:</p>
              <p>1.对平台抓取来的事故案例生成题目后返回<br/>
                2.将打标人员打标的人工题目存入数据库,然后留出获取题目的接口<br/>
                3.对从知识图谱里面获取的知识,返回题目
              </p>
              <a v-on:click="gotoTimuPage">事故案例题目展示</a>
            </div>

            <div class="block">
              <h2>聚合支付系统</h2>
              <p>该系统集合支付宝支付和微信支付包含各种支付接口,通过http请求调用,代码在申请软著后开放</p>
              <a v-on:click="openpaysys">文档</a>
            </div>

            <div class="block">
              <h2>厦大商圈微信小程序</h2>
              <p>聚合厦大周围商家,用户,商家可以店铺信息,个人发布商品信息</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Projects",
  components: {
    Navbar,
  },
  methods:{
    openpaysys(){
      window.open('../../paysys.html')
    },
    openstusy(){
      window.open('http://kidtut.net')
    },
    gotoTimuPage(){
      this.$router.push("/timusys")
    }
  }
};
</script>