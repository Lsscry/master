<template>
  <div id="home">
    <!-- 导航 -->
    <header3></header3>
    <!-- 主体 -->
    <div id="main">
      <div id="mainimg">
        <div class="span">知识改变命运</div>
      </div>
      <div id="minmainimg">
        <div class="minimg">
          <img src="../assets/nuv.jpg" alt />
        </div>
        <div class="span">知识改变命运</div>
      </div>
      <div class="maintop">
        <h2 class="topp">公司简介</h2>
        <el-row>
          <el-col :md="10" class="comImgBox">
            <img src="../assets/nuv.jpg" alt class="comImg" />
          </el-col>
          <el-col :md="14" class="comPBox">
            <p
              class="comP"
            >辽宁金誉科技工程有限公司成立于2006年3月，是一 家以系统集成、弱电工程、IT运维服务、信息安全服务、 软件开发为核心，以IT设备销售与维修、办公用品及耗材 的销售为辅，集技术、开发、贸易、服务于一体的综合性 高新技术企业。</p>
          </el-col>
        </el-row>
        <el-row>
        <el-col :md="8" :xs="8" class="introduceBox">
          <img src="../assets/nuv.jpg" alt class="introduceImg" />
          <p class="introduceH">注册资本</p>
          <p class="introduceP">注册资本人民币300万元</p>
        </el-col>
        <el-col :md="8" :xs="8" class="introduceBox">
          <img src="../assets/nuv.jpg" alt class="introduceImg" />
          <p class="introduceH">地理位置</p>
          <p class="introduceP">坐落于沈阳市浑南新区天成街嘉龙中心三层</p>
        </el-col>
        <el-col :md="8" :xs="8" class="introduceBox">
          <img src="../assets/nuv.jpg" alt class="introduceImg" />
          <p class="introduceH">办公面积</p>
          <p class="introduceP">办公面积约650平方米</p>
        </el-col>
      </el-row>
        <h2 class="topp">公司发展历程</h2>
        <div class="top">
          <div class="top1 col-md-4">
            <span class="top1sp">成立</span>
            <img src="../assets/chengLi.jpg" class="img-responsive center-block top1img" alt />
            <div class="center-block top1tex">2006年3月公司成立。</div>
            <span>了解更多→</span>
          </div>
          <div class="top1 col-md-4">
            <span class="top1sp">坚持</span>
            <img src="../assets/jianCi.jpg" class="img-responsive center-block top1img" alt />
            <div
              class="center-block top1tex"
            >2008年公司通过ISO9001质量管理体系、ISO14001环境管理体系、职业健康关系体系三体系认证，公司取得系统集成三级资质，向系统集成领域迈进容</div>
            <span>了解更多→</span>
          </div>
          <div class="top1 col-md-4">
            <span class="top1sp">发展.提速</span>
            <img src="../assets/fazhan.jpg" class="img-responsive center-block top1img" alt />
            <div
              class="center-block top1tex"
            >2010年，公司首次取得辽宁省安防设计施工资质，2011年4月公司首次被评为辽宁省“守合同重信用”企业，2011年5月公司股东会决议，增加注册资本为1020万元，公司取得第一个软件著作权，同年获得软件企业认证</div>
            <span>了解更多→</span>
          </div>
          <div class="top1 col-md-4">
            <span class="top1sp">飞跃.优化</span>
            <img src="../assets/feiyue.jpg" class="img-responsive center-block top1img" alt />
            <div
              class="center-block top1tex"
            >2012年，公司首次取得建筑智能化工程专业承包资质，2015年公司当选辽宁省软件行业协会理事单位</div>
            <span>了解更多→</span>
          </div>
          <div class="top1 col-md-4">
            <span class="top1sp">转型</span>
            <img src="../assets/zhuanxing.jpg" class="img-responsive center-block top1img" alt />
            <div
              class="center-block top1tex"
            >2016年公司取得电子与智能化工程工程专业承包二级资质，公司获得涉密系统集成乙级资质</div>
            <span>了解更多→</span>
          </div>
          <div class="top1 col-md-4">
            <span class="top1sp">创新</span>
            <img src="../assets/chuangxin.jpg" class="img-responsive center-block top1img" alt />
            <div class="center-block top1tex">2019年公司取得信息技术服务运行维护标准符合性资质，公司取得音视频集成工程企业资质</div>
            <span>了解更多→</span>
          </div>
        </div>
      </div>
      <div class="mainbottom">
        <h2 class="topp">基本情况</h2>
        <div class="top">
          <div class="top1 col-md-3">
            <span class="top1sp">办公场所</span>
            <img src="../assets/nuv.jpg" class="img-responsive center-block top1img" alt />
            <div class="center-block top1tex">办公场所面积650平方米</div>
            <span>了解更多→</span>
          </div>
        </div>
        <div class="top1 col-md-3">
          <span class="top1sp">涉密业务研发场所</span>
          <img src="../assets/nuv.jpg" class="img-responsive center-block top1img" alt />
          <div class="center-block top1tex">涉密业务研发场所使用面积60平方米</div>
          <span>了解更多→</span>
        </div>

        <div class="top1 col-md-3">
          <span class="top1sp">人员基本情况</span>
          <img src="../assets/nuv.jpg" class="img-responsive center-block top1img" alt />
          <div
            class="center-block top1tex"
          >人员基本情况:公司现有工程师及技术人员51人，系统集成方向22人，安防设计施工方向6人，建筑智能化方向13人，硬件设备安装维护方向32人</div>
          <span>了解更多→</span>
        </div>
        <div class="top1 col-md-3">
          <span class="top1sp">组织机构</span>
          <img src="../assets/nuv.jpg" class="img-responsive center-block top1img" alt />
          <div
            class="center-block top1tex"
          >公司目前领导班子成员4人，公司下设人力行政部、商务部、技术支持部、财务管理部、市场营销部、系统集成部、售后服务部7个部门</div>
          <span>了解更多→</span>
        </div>
      </div>
      <div class="tab">
        <h3 class="topp">了解金誉科技</h3>
      </div>
      <bottom1></bottom1>
    </div>
  </div>
</template>
<script>
import bottom1 from "@/components/bottom1";
import header2 from "@/components/header2";
import header3 from "@/components/header3";
export default {
  name: "home",
  data() {
    return {
      input: "",
      activeIndex: "1",
      activeIndex2: "1",
      input: "",
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    bottom1,
    header2,
    header3
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
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
  text-align: left;
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
@media (min-device-width: 769px) {
  .headermd {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ececec;
    height: 62px;
    z-index: 2;
  }
  .headerxs {
    display: none;
  }
  .hetxt {
    height: 62px;
    font-size: 18px;
    text-align: left;
    padding: 0 0 0 100px;
    line-height: 62px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  #mainimg {
    margin: 0 auto;
    min-height: 250px;
    padding: 30px 0 90px;
    z-index: 10;
    background: url(../assets/nuv.jpg) no-repeat;
    background-size: 100%;
  }

  .span {
    color: aliceblue;
    font-size: 30px;
    text-align: left;
    text-indent: 20px;
    margin: 60px 0 0 0;
    font-weight: bold;
  }
  #minmainimg {
    display: none;
  }
  .maintop {
    width: 100%;
    float: left;
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
  .top1 {
    margin: 20px 0 20px 0;
    padding-bottom: 10px;
    height: 450px;
  }
  .top1sp {
    display: block;
    margin: 10px 0 20px 0;
    font-size: 18px;
  }
  .top1img {
    width: 90%;
    height: 50%;
  }
  .top1tex {
    width: 90%;
    height: 20%;
    word-wrap: break-word;
    word-break: break-all;
    margin-top: 20px;
    overflow: hidden;
    text-align: left;
  }
  .mainmid {
    margin-top: 10px;
    float: left;
    width: 100%;
    background: rgb(246, 245, 245);
  }
  .midp {
    margin: 0 auto;
    width: 100%;
    padding: 0 10px 10px;
    padding-top: 60px !important;
    padding-bottom: 20px !important;
    text-align: left;
    font-weight: bold;
  }
  .inp {
    width: 30%;
    float: left;
    margin: 10px 0 20px 10px;
  }
  .select {
    width: 100%;
    float: left;
  }
  .midbtn {
    float: left;
    margin: 10px 0 20px 0px;
  }
  .left {
    /* float: left; */
    padding-bottom: 20px;
  }
  .leftmin {
    display: none;
  }
  .lefttit {
    height: 30px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0 10px 0;
  }
  .leftdiv ul {
    list-style: none;
    text-align: left;
    padding: 0 0 0 0;
  }
  .leftdiv ul li {
    padding: 10px 0 10px 0;
  }
  .right {
    /* float: left; */
    padding-bottom: 20px;
  }
  .risp {
    font-size: 14px;
    text-align: left;
    margin: 20px 0 10px 0;
  }
  .ri1img {
    width: 90%;
    height: 30%;
    padding: 10px 0 10px 0;
  }
  .rip {
    width: 90%;
    height: 40%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    margin: 20px 0 10px 0;
  }
  .mainbottom {
    width: 100%;
    float: left;
    background: gainsboro;
  }
  .tab {
    float: left;
    width: 100%;
  }
}
@media (max-device-width: 769px) {
  .headerxs {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ececec;
    height: 52px;
    z-index: 2;
  }
  .headermd {
    display: none;
  }
  .hetxt {
    height: 52px;
    font-size: 24px;
    font-weight: bold;
    line-height: 52px;
  }
  #mainimg {
    display: none;
  }
  .span {
    color: aliceblue;
    font-size: 30px;
    text-align: left;
    text-indent: 20px;
    margin: 60px 0 0 0;
    font-weight: bold;
  }
  #minmainimg {
    height: 300px;
    background: black;
  }

  .minimg {
    height: 100px;
  }
  .minimg img {
    height: 100px;
    width: 100%;
    padding: 20px;
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
  .top1 {
    /* border: 1px solid black; */
    height: 450px;
    margin: 20px 0 0 0;
    padding-bottom: 10px;
  }
  .top1sp {
    display: block;
    margin: 10px 0 20px 0;
    font-size: 18px;
  }
  .top1img {
    width: 90%;
    height: 50%;
  }
  .top1tex {
    width: 90%;
    height: 20%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    margin-top: 20px;
    text-align: left;
  }
  .mainmid {
    float: left;
    width: 100%;
    background: rgb(246, 245, 245);
    margin-top: 10px;
  }
  .midp {
    margin: 0 auto;
    width: 100%;
    padding: 0 10px 10px;
    padding-top: 60px !important;
    padding-bottom: 20px !important;
    text-align: left;
    font-weight: bold;
  }
  .inp {
    width: 30%;
    float: left;
    margin: 10px 0 20px 10px;
  }
  .select {
    width: 100%;
    float: left;
  }
  .midbtn {
    float: left;
    margin: 10px 0 20px 0px;
  }
  .left {
    float: left;
    padding-bottom: 20px;
    width: 100%;
  }
  .leftmax {
    display: none;
  }
  .leftnr {
    float: left;
  }
  .lefttit {
    height: 30px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0 10px 0;
  }
  .leftdiv ul {
    list-style: none;
    text-align: left;
    padding: 0 0 0 0;
  }
  .leftdiv ul li {
    padding: 10px 0 10px 0;
  }
  .right {
    float: left;
    padding-bottom: 20px;
  }
  .risp {
    font-size: 14px;
    text-align: left;
    margin: 20px 0 10px 0;
  }
  .ri1img {
    width: 90%;
    height: 30%;
    padding: 10px 0 10px 0;
  }
  .rip {
    width: 90%;
    height: 40%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    margin: 20px 0 10px 0;
  }
  .mainbottom {
    width: 100%;
    float: left;
    background: gainsboro;
  }
  .tab {
    float: left;
    width: 100%;
  }
}
</style>