<template>
  <div id="home">
    <!-- 导航 -->
    <hed></hed>
    <!-- 主体 -->
    <div class="main">
      <!-- 轮播 -->
      <el-row>
        <el-col :md="24" :xs="24">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in list" :key="item.id">
              <img class="elImg" :src="item.src" alt />
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="24" :xs="24" class="company">
          <h2>公司介绍</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="10" class="comImgBox">
          <img src="../assets/com.png" alt class="comImg" />
        </el-col>
        <el-col :md="14" class="comPBox">
          <p class="comP">
            辽宁卓誉工程项目管理有限公司重组于2019年初，是由辽宁省住房和城乡建设厅与辽宁省财政厅批准
            备案的、具有政府采购代理资格和工程招标代理资质的、具有
            独立法人资格的招标代理单位，同时还具有机电产品国际招标代
            理资格。
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8" :xs="8" class="introduceBox">
          <img src="../assets/nuv.jpg" alt class="introduceImg" />
          <p class="introduceH">注册资本</p>
          <p class="introduceP">注册资本人民币壹仟零贰拾万元</p>
        </el-col>
        <el-col :md="8" :xs="8" class="introduceBox">
          <img src="../assets/nuv.jpg" alt class="introduceImg" />
          <p class="introduceH">地理位置</p>
          <p class="introduceP">坐落于沈阳市和平区 三好街华强电子大厦</p>
        </el-col>
        <el-col :md="8" :xs="8" class="introduceBox">
          <img src="../assets/nuv.jpg" alt class="introduceImg" />
          <p class="introduceH">办公面积</p>
          <p class="introduceP">办公面积约500平方米</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="24" :xs="24" class="company">
          <h2>公司理念</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="24" :xs="24" class="comIdea">
          <img src="../assets/linian.png" alt class="comIdeaImg" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="24" :xs="24" class="company">
          <h2>服务团队</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12" :xs="24" class="serviceTeam">
          <el-col :md="10" :xs="12" class="serviceImgBox">
            <img src="../assets/team1.png" alt="" class="serviceImg">
          </el-col>
          <el-col :md="14" :xs="12" class="serviceIntr">
            <p class="serviceH">高效的人员队伍</p>
            <ul class="serviceContent">
              <li>现有员工20人，均为大专以上学历。</li>
              <li>具有高级工程师、高级会计师、工程师、 会计师、经济师等高、中级职称的专业人 员10人。</li>
              <li>具有注册造价师3人，一级注册建造师1人。</li>
            </ul>
          </el-col>
        </el-col>
        <el-col :md="12" :xs="24" class="serviceTeam">
          <el-col :md="10" :xs="12" class="serviceImgBox">
             <img src="../assets/team2.png" alt="" class="serviceImg">
          </el-col>
          <el-col :md="14" :xs="12" class="serviceIntr">
             <p class="serviceH">专业的专家团队</p>
            <ul class="serviceContent">
              <li>汇集上千名具有丰富经验和较高理论水平 的评审专家。</li>
              <li>涉及行业包括城建、环保、教育、工业、 能源、农业、林业、卫生、通讯通信、信 息技术等各领域。</li>
            </ul>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <!-- 页尾 -->
    <bot></bot>
  </div>
</template>
<script>
import hed from "@/components/common/header";
import bot from "@/components/common/bottom";
export default {
  name: "home",
  data() {
    return {
      list: [
        { id: "0", src: require("../assets/nuv.jpg") },
        { id: "1", src: require("../assets/nuv.jpg") },
        { id: "2", src: require("../assets/nuv.jpg") }
      ]
    };
  },
  methods: {},
  components: {
    hed,
    bot
  }
};
</script>
<style lang="" scoped>
#home {
  height: 100%;
  float: left;
}
.main {
  width: 100%;
  padding: 0.1px;
  margin: 4px 0 0 0;
  float: left;
}
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
a {
  text-decoration: none;
}
.company {
  height: 80px;
  background: rgb(240, 240, 240);
}
.company h2 {
  vertical-align: middle;
  text-indent: 20px;
}
.comImgBox {
  height: 300px;
}
.comImg {
  height: 240px;
  width: 80%;
  margin: 30px 10% 30px 10%;
}
.comPBox {
  height: 300px;
}
.comP {
  margin: 40px 10% 0 10%;
  width: 80%;
  line-height: 30px;
}
.introduceBox {
  height: 200px;
}
.introduceImg {
  width: 40%;
  height: 80px;
  margin: 10px 0 10px 30%;
}
.introduceP {
  text-align: center;
}
.introduceH {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
.comIdea {
  height: 400px;
  background: #bbbbbb;
}
.comIdeaImg {
  height: 350px;
  width: 70%;
  margin: 25px 0 0 15%;
}
.serviceTeam{
  height: 300px;
}
.serviceImgBox{
  
}
.serviceImg{
  width: 80%;
  height: 200px;
  margin: 50px 0 50px 10%;
}
.serviceIntr{

}
.serviceH{
  margin: 50px 0 0 0;
  font-size: 18px;
}
.serviceContent{
  list-style: none;
  padding: 0;
  font-size: 12px;
  margin: 20px 0 0 0;
  width: 80%;
}
.serviceContent li{
  line-height: 20px;
}
</style>