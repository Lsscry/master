<template>
  <div id="bottom1">
    <el-row>
      <el-col :md="8" class="colTop">
        <div class="botMdImg">
          <img src="../assets/nuv.jpg" class="colImg"/>
        </div>
      </el-col>
      <el-col :md="16" class="colTop">
        <div class="botMdP">
          <p>辽宁金誉科技工程有限公司</p>
          <p>地址：辽宁省沈阳市和平区三好街100-4号华强大厦A座</p>
          <p>传真：024-83993778</p>
          <p>邮箱：xxxxxxxxxx</p>
          <p>邮编：xxxxxx</p>
          <p>电话：024-83992348</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
      <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
       <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
       <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
       <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
       <el-col :md="4" :xs="12" class="botCom">
        <img src="../assets/nuv.jpg" alt class="botImg" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="24" class="tabbarMd colTab hidden-xs-only">
        <span class="span">法律声明</span>
        <span class="span">隐私政策</span>
        <span>©2018xxxxxxx有限公司 辽ICP备13012825号</span>
      </el-col>
      <el-col :xs="24" class="tabXs colTab hidden-sm-and-up">
        <el-col :xs="12">
          <span class="span">法律声明</span>
        </el-col>
        <el-col :xs="12">
          <span class="span">隐私政策</span>
        </el-col>
        <el-col :xs="24">
          <span class="span">©2018xxxxxxx有限公司 辽ICP备13012825号</span>
        </el-col>
      </el-col>
      <el-col></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "bottom1",
  data() {
    return {};
  }
};
</script>
<style scoped>
#bottom1 {
  height: 100%;
  float: left;
}
.colTop {
  background: rgb(206, 204, 204);
  height: 300px;
}
.botMdImg {
  height: 240px;
  border-right: 1px solid rgb(146, 145, 145);
  height: 240px;
  margin: 30px 0 0 0;
}
.colImg {
  height: 240px;
  width: 80%;
}
.botMdP {
  height: 300px;
  /* height: 240px; */
  font-size: 14px;
  margin: 30px 0 0 0;
}
.botCom {
  height: 90px;
}
.botImg {
  height: 80px;
  display: block;
  margin: 5px auto;
}
p {
  margin: 0;
  text-align: center;
  padding: 10px 0 0 0;
}
.colTab {
  background: rgb(116, 116, 116);
  height: 80px;
}
.tabbarMd,
.tabbarXs {
  width: 100%;
  color: beige;
  text-align: center;
}
.tabbarMd .span {
  padding: 0 10px 0 10px;
  border-right: 1px dotted beige;
  line-height: 80px;
}

.tabXs .span {
  text-align: center;
  line-height: 40px;
  display: block;
  color: beige;
}
</style>