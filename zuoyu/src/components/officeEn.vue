<template>
  <div id="officeEn">
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
          <h2>办公环境</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8" :xs="24" class="imgBox" v-for="item in list" :key='item.id'>
          <img :src='item.img' alt class="img" />
          <p class="imgP">{{item.title}}</p>
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
  name: "officeEn",
  data() {
    return {
      list: [
        { id: "0", img: require("../assets/img1.png"), title: "1.1办公区" },
        { id: "1", img: require("../assets/img2.png"), title: "1.2办公区" },
        { id: "2", img: require("../assets/img3.png"), title: "1.3开标室" },
        { id: "3", img: require("../assets/img4.png"), title: "1.4开标室" },
        { id: "4", img: require("../assets/img5.png"), title: "1.5评标室" },
        { id: "5", img: require("../assets/img6.png"), title: "1.6档案区" },
        { id: "6", img: require("../assets/img7.png"), title: "1.7电子监控室" },
        { id: "7", img: require("../assets/img8.png"), title: "1.8电子监控室" },
        { id: "8", img: require("../assets/img9.png"), title: "1.9打印、复印、扫描一体机" }
      ]
    };
  },
  components: {
    hed,
    bot
  }
};
</script>
<style scoped>
#officeEn {
  height: 100%;
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
.imgbox {
  height: 220px;
}
.img {
  height: 160px;
  width: 60%;
  margin: 20px 20% 0 20%;
}
.imgP {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0 20px 0;
}
</style>