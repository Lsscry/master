<template>
  <div id="service">
    <header3></header3>
    <div class="main">
      <div class="block">
        <!-- <img src="../assets/nuv.jpg" alt="" /> -->
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="300px">
          <el-carousel-item v-for="item in list" :key="item.id">
            <img class="elImg" :src="item.src" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="serviceSystem">
        <h2 class="topp">服务体系</h2>
        <div class="serviceFirst">
          <div class="serviceDiv">
            <h3>服务理念</h3>
            <p>公司一直坚持“技术至上，服务为先，诚信第一”的服务理念，从项目实际情况出发，为用户提供优质、高效的服务</p>
          </div>
          <img class="serviceImg" src="../assets/fwln.jpg" alt />
        </div>
        <div class="serviceSecond">
          <div class="serviceDiv">
            <h3>服务团队</h3>
            <p>公司秉承“专注所以专业”的服务精神，通过多年努力打造了一支资质齐全、技术专业、响应及时的服务团队</p>
          </div>
          <img class="serviceImg" src="../assets/fwtd.jpg" alt />
        </div>
        <div class="serviceThird">
          <div class="serviceDiv">
            <h3 class="minFwbz">服务标准</h3>
            <p>
              及时性：2小时应答，4小时内到达现场（不含辽宁省外），48小时内解决问题。
              流程化：售后前有确认，售后中有记录，售后完有反馈，实现售后服务全程跟踪可追溯。
              应急机制：关键设备有备机，节假日前例行巡检，周末休息值班制。
            </p>
          </div>
          <img class="serviceImg" src="../assets/fwbz.jpg" alt />
        </div>
        <div class="serviceFourth">
          <div class="serviceDiv">
            <h3>服务热线</h3>
            <p>
              400-604-2006
              024-83993778
            </p>
          </div>
          <img class="serviceImg" src="../assets/fwrx.png" alt />
        </div>
      </div>
    </div>
    <bottom1></bottom1>
  </div>
</template>
<script>
import header3 from "@/components/header3";
import bottom1 from "@/components/bottom1";
export default {
  name: "service",
  data() {
    return {
      list: [
        { id: "0", src: require("../assets/nuv.jpg") },
        { id: "1", src: require("../assets/nuv.jpg") },
        { id: "2", src: require("../assets/nuv.jpg") }
      ]
    };
  },
  components: {
    bottom1,
    header3
  }
};
</script>
<style scoped>
.main {
  width: 100%;
  padding: 0.1px;
}
@media (min-device-width: 769px) {
  .elImg {
    max-height: 300px;
    width: 100%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .topp {
    margin: 0 auto;
    max-width: 1460px;
    padding: 0 10px 10px;
    padding-top: 60px !important;
    padding-bottom: 20px !important;
    text-align: left;
    font-weight: bold;
  }
  .serviceSystem {
    padding: 0.1px;
  }
  .serviceDiv {
    height: 300px;
    width: 250px;
    float: left;
  }
  .serviceFirst {
    height: 300px;
    width: 100%;
    background: rgb(228, 226, 226);
    padding: 0.1px;
  }
  .serviceSecond {
    height: 300px;
    width: 100%;
    background: rgb(219, 218, 218);
    padding: 0.1px;
  }
  .serviceThird {
    height: 300px;
    width: 100%;
    padding: 0.1px;
    background: rgb(209, 207, 207);
  }
  .serviceFourth {
    height: 300px;
    width: 100%;
    background: rgb(199, 197, 197);
    padding: 0.1px;
  }
  h3 {
    text-align: left;
    margin: 100px 0 0 50px;
    width: 200px;
    display: inline-block;
  }
  p {
    text-align: left;
    margin: 10px 0 0 50px;
    display: inline-block;
    width: 250px;
  }
  .serviceImg {
    height: 250px;
    width: 350px;
    float: right;
    margin: 25px 50px 0 0;
  }
}
@media (max-device-width: 769px) {
  .elImg {
    height: 300px;
    width: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .topp {
    margin: 0 auto;
    max-width: 768px;
    padding: 0 10px 10px;
    padding-top: 60px !important;
    padding-bottom: 20px !important;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
    .serviceFirst {
    /* height: 300px; */
    width: 100%;
    background: rgb(228, 226, 226);
    padding: 0.1px;
  }
   .serviceDiv {
    height: 300px;
    width:100%;
  }
    h3 {
    text-align: center;
    margin: 100px 0 0 0;
    width: 200px;
    display: inline-block;
  }
  .minFwbz{
    text-align: center;
    margin: 50px 0 0 0;
    width: 200px;
    display: inline-block;
  }
  p {
    vertical-align: center;
    display: inline-block;
    margin: 10px 0 0 0;
    width: 250px;
    line-height: 30px;
  }
  .serviceImg {
    height: 250px;
    width: 350px;
    margin: 25px 0 0 0;
  }
  .serviceSecond {
    width: 100%;
    background: rgb(219, 218, 218);
    padding: 0.1px;
  }
  .serviceThird {
    width: 100%;
    padding: 0.1px;
    background: rgb(209, 207, 207);
  }
  .serviceFourth {
    width: 100%;
    background: rgb(199, 197, 197);
    padding: 0.1px;
  }
}
</style>