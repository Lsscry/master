<template>
  <div id="mainBusiness">
    <!-- header -->
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
      <div class="nav">
        <div class="navmain col-md-3"></div>
        <div class="navmain col-md-3"></div>
        <div class="navmain col-md-3"></div>
        <div class="navmain col-md-3"></div>
      </div>
      <div class="neirong">
        <div class="col-md-4 card">
          <img src="../assets/nuv.jpg" alt class="img-responsive center-block" />
          <div class="jieshao col-md-12">
            <p>系统集成</p>
            <ul>
              <li>虚拟化与云：服务器虚拟化、桌面虚拟化、云计算</li>
              <li>数字化校园网：校园网建设与改造、校园无线网、数字IP广播、多媒体教学（班班通、电子书包）、录播教室、数字校宣系统</li>
              <li>安防系统：视频监控、红外报警、巡更、消防报警</li>
              <li>指挥中心：视频会议系统、液晶拼接屏系统、数据大集中</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 card">
          <img src="../assets/nuv.jpg" alt class="img-responsive center-block" />
          <div class="jieshao col-md-12">
            <p>弱电工程</p>
            <ul>
              <li>机房建设：机房整体建设、机房一体化、动力环境监测系统</li>
              <li>综合布线：办公楼、小区综合布线</li>
              <li>小区智能化：门禁对讲系统、楼宇自控系统、有线电视信号分配系</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 card">
          <img src="../assets/nuv.jpg" alt class="img-responsive center-block" />
          <div class="jieshao col-md-12">
            <p>IT运维服务</p>
            <ul>
              <li>数据中心驻场运维服务，定期巡检</li>
              <li>超保修期设备的延保与维护</li>
              <li>硬件故障处理、部件更换、软件故障排除、性能优化</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="neirong">
        <div class="col-md-4 card">
          <img src="../assets/nuv.jpg" alt class="img-responsive center-block" />
          <div class="jieshao col-md-12">
            <p>信息安全服务</p>
            <ul>
              <li>等级保护方案咨询、设计、施工</li>
              <li>分级保护（涉密项目）方案咨询、设计、施工</li>
              <li>整体网络安全加固咨询与设计</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 card">
          <img src="../assets/nuv.jpg" alt class="img-responsive center-block" />
          <div class="jieshao col-md-12">
            <p>软件开发与销售</p>
            <ul>
              <li>软件定制开发：网站开发、微课堂、办公OA、档案管理系统……</li>
              <li>软件代理销售：素质教育管理平台、机房管理系统、数字语音系统……</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 card">
          <img src="../assets/nuv.jpg" alt class="img-responsive center-block" />
          <div class="jieshao col-md-12">
            <p>IT产品营销、耗材及办公用品</p>
            <ul>
              <li>IT产品：服务器、交换机、安全设备、台式机、笔记本、投影机、UPS…..</li>
              <li>耗材及办公用品：原装耗材（硒鼓、墨盒、碳粉）、办公用品、通用耗材</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <bottom1></bottom1>
  </div>
</template>
<script>
// import header2 from "@/components/header2"
import bottom1 from "@/components/bottom1";
import header3 from '@/components/header3'
import "element-ui/lib/theme-chalk/display.css";
export default {
  name: "mainBusiness",
  data() {
    return {
      activeIndex: "2",
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
    // header2,
    bottom1,
    header3
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.nav {
  width: 100%;
  background: #264a60;
}
.navmain {
  height: 40px;
}
.card {
  height: 400px;
  margin: 20px 0 10px 0;
}
.card img {
  width: 100%;
  height: 150px;
  margin: 0 0 10px 0;
}
.jieshao {
  height: 250px;
}
.jieshao p {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.jieshao ul {
  list-style: none;
  padding-left: 0;
}
.jieshao li {
  text-align: left;
}
@media (max-device-width: 768px) {
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
}
@media (min-device-width: 768px) {
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
    padding: 30px 0 90px 0;
    z-index: 10;
    background: url(../assets/nuv.jpg) no-repeat;
    background-size: 100%;
    width: 100%;
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
}
</style>
