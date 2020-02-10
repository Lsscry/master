<template>
  <div id="companyQual">
    <header3></header3>
    <!-- 主体 -->
    <div class="main">
      <el-row>
        <el-col :md="24" :xs="24" class="navBox">
          <img src="../assets/nuv.jpg" alt class="nav" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="24" :xs="24" class="company">
          <h2>公司资质</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8" :xs="24" class="imgBox">
          <img src="../assets/book1.png" alt />
          <p>1.1工商营业执照</p>
        </el-col>
        <el-col :md="8" :xs="24" class="imgBox">
          <img src="../assets/book2.png" alt />
          <p>1.2辽宁省政府采购代理机构入库</p>
        </el-col>
        <el-col :md="8" :xs="24" class="imgBox">
          <img src="../assets/book3.png" alt />
          <p>1.3建设工程招标诚信库在库</p>
        </el-col>
        <el-col :md="8" :xs="24" class="imgBox">
          <img src="../assets/book4.png" alt />
          <p>1.4中国政府采购网政府采购代理机构入库</p>
        </el-col>
        <el-col :md="8" :xs="24" class="imgBox">
          <img src="../assets/book5.png" alt />
          <p>1.5中国国际招标网代理机构入库</p>
        </el-col>
        <el-col :md="8" :xs="24" class="imgBox">
          <img src="../assets/book6.png" alt />
          <p>1.6中国招标投标公共服务平台发布</p>
        </el-col>
      </el-row>
    </div>
    <bottom1></bottom1>
  </div>
</template>
<script>
import bottom1 from "@/components/bottom1";
import header3 from "@/components/header3";
export default {
  name: "companyQual",
  data() {
    return {};
  },
  components: {
   bottom1,
   header3,
  }
};
</script>
<style scoped>
#companyQual {
  height: 100%;
  float: left;
}
.main {
  width: 100%;
  padding: 0.1px;
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
  text-align: left;
}
.imgBox {
  height: 260px;
  margin: 20px 0 20px 0;
}
.imgBox img {
  width: 80%;
  height: 200px;
  margin: 0 10% 10px 10%;
}
.imgBox p {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin: 20px;
}
</style>