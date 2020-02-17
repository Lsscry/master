<template>
  <div id="hed">
    <el-row :md="24" :xs="24">
      <el-col :md="6" :xs="18">
        <div class="logo">卓誉科技</div>
      </el-col>
      <el-col :md="18" class="hidden-xs-only">
        <el-col :md="16" class="hetxt nav">
          <router-link
            v-for="item in nav"
            :key="item.id"
            class="navList"
            :to="item.path"
            tag="div"
          >{{item.title}}</router-link>
        </el-col>
        <el-col :md="8"></el-col>
      </el-col>
      <el-col :xs="6" class="hidden-sm-and-up">
        <el-button icon="el-icon-s-operation" @click="drawer = true"></el-button>
        <!--    :before-close="handleClose" 关之前做的事件 -->
        <el-drawer title="导航" :visible.sync="drawer" :direction="direction" size="100%">
          <el-menu>
            <el-submenu index="1">
              <template slot="title">
                <router-link :to="{name:'home'}">
                  <i class="el-icon-message"></i>主页
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <router-link :to="{name:'business'}">
                  <i class="el-icon-menu"></i>业务范围
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <router-link :to="{name:'companyQual'}">
                  <i class="el-icon-setting"></i>公司资质
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <router-link :to="{name:'companyPe'}">
                  <i class="el-icon-setting"></i>公司业绩
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <router-link :to="{name:'officeEn'}">
                  <i class="el-icon-setting"></i>办公环境
                </router-link>
              </template>
            </el-submenu>
          </el-menu>
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "hed",
  data() {
    return {
      nav: [
        { id: "0", title: "主页", path: { name: "home" } },
        { id: "1", title: "业务范围 ", path: { name: "business" } },
        { id: "2", title: "公司资质", path: { name: "companyQual" } },
        { id: "3", title: "公司业绩", path: { name: "companyPe" } },
        { id: "4", title: "办公环境", path: { name: "officeEn" } }
      ],
      drawer: false,
      direction: "rtl"
    };
  }
};
</script>
<style scoped>
#hed{
  float: left;
  width: 100%;
}
a {
  text-decoration: none;
}
.el-row {
  height: 62px;
}
.el-col {
  height: 62px;
}
.logo {
  height: 62px;
  font-size: 18px;
  text-align: center;
  line-height: 62px;
}
.hetxt {
  height: 62px;
  font-size: 18px;
  text-align: left;
  padding: 0 0 0 100px;
  line-height: 62px;
}
.nav {
  font-size: 14px;
}
.navList {
  text-align: center;
  width: 20%;
  float: left;
}
.navList:hover {
  border-bottom: 4px solid rgb(94, 94, 172);
}
.el-button{
text-align: center;
margin: 11px 0 0 0;

}
</style>