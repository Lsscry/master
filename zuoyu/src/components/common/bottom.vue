<template>
  <div id="bot">
    <el-row>
      <el-col :md="8" class="colTop">
        <div class="botMdImg">
          <img src="./img/nuv.jpg" />
        </div>
      </el-col>
      <el-col :md="16" class="colTop">
        <div class="botMdP">
          <p>辽宁卓誉工程项目管理有限公司</p>
          <p>地址：辽宁省沈阳市浑南新区天成街 6-2号嘉龙中心B座</p>
          <p>总机/传真：024-88110588</p>
          <p>邮箱：Lnzy31659888@163.com</p>
          <p>邮编：110623</p>
          <p>联系人：刘女士 王先生</p>
          <p>联系方式：13897983101</p>
        </div>
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
    </el-row>
  </div>
</template>
<script>
export default {
  name: "bot",
  data() {
    return {};
  }
};
</script>
<style scoped>
#bot {
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
.el-col img {
  height: 240px;
  width: 80%;
  margin: 0 0 0 10%;
}
.botMdP {
  height: 300px;
  /* height: 240px; */
  font-size: 14px;
  margin: 30px 0 0 0;
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