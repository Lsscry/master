<template>
  <div id="business">
    <hed></hed>
    <!-- 主体 -->
    <div class="main">
      <el-row>
        <el-col :md="24" :xs="24" class="navBox">
          <img src="../assets/nuv.jpg" alt class="nav" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="24" :xs="24" class="company">
          <h2>业务范围</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8" :xs="24" class="businessBox">
          <el-col :md="10" :xs="24" class="businessImgBox">
            <img src="../assets/business1.png" alt class="businessImg" />
          </el-col>
          <el-col :md="14" :xs="24" class="businessPBox">
            <p class="businessH">造价咨询</p>
            <p
              class="businessContent"
            >业务内容涵盖建设工程概、预、结算及竣工结（决）算报告的编制和审核；建设工程实施阶段工程招标标底、投标报价的编制和审核；提供工程造价经济纠纷的鉴定服务；提供建设工程项目全过程的造价监控与服务；提供工程造价信息服务等。</p>
          </el-col>
        </el-col>
        <el-col :md="8" :xs="24" class="businessBox">
          <el-col :md="10" :xs="24" class="businessImgBox">
            <img src="../assets/business2.png" alt class="businessImg" />
          </el-col>
          <el-col :md="14" :xs="24" class="businessPBox">
            <p class="businessH">招标代理</p>
            <p
              class="businessContent"
            >公司常年从事勘查、设计、施工、监理以及工程建设相关设备、材料采购、服务的招标代理业务。在执业过程中，卓誉咨询团队为招标方、投标方提供卓越的招标代理服务。</p>
          </el-col>
        </el-col>
        <el-col :md="8" :xs="24" class="businessBox">
          <el-col :md="10" :xs="24" class="businessImgBox">
            <img src="../assets/business3.png" alt class="businessImg" />
          </el-col>
          <el-col :md="14" :xs="24" class="businessPBox">
            <p class="businessH">项目管理</p>
            <p class="businessContent">协助业主与工程项目的总承包企业或勘察、设 计、招标、造价、供货、施工、监理等企业签订合同，并受业主委托监督合同履行。</p>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <bot></bot>
  </div>
</template>
<script>
import hed from "@/components/common/header";
import bot from "@/components/common/bottom";
export default {
  name: "business",
  data() {
    return {};
  },
  components: {
    hed,
    bot
  }
};
</script>
<style scoped>
#business {
  width: 100%;
  float: left;
}
.main {
  width: 100%;
  padding: 0.1px;
  margin: 4px 0 0 0;
  float: left;
}
.navBox {
  height: 300px;
}
.nav {
  width: 100%;
  height: 300px;
}
.company {
  height: 80px;
  background: rgb(240, 240, 240);
}
.company h2 {
  vertical-align: middle;
  text-indent: 20px;
}
.businessBox {
}
.businessImgBox {
  height: 300px;
}
.businessImg {
  width: 70%;
  height: 180px;
  margin: 60px 15%;
}
.businessPBox {
  height: 300px;
}
.businessH {
  font-size: 16px;
  font-weight: bold;
  margin: 60px 0 0 0;
  text-align: center;
}
.businessContent {
  width: 80%;
  font-size: 12px;
  line-height: 20px;
  margin: 10px 0 0 10%;
}
</style>