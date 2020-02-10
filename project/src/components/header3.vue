<template>
  <div id="header3">
    <div id="headr" class="col-md-12">
      <div class="col-md-3 hetxt">金誉科技</div>
      <div class="col-md-6 hetxt nav">
        <router-link
          v-for="item in nav"
          :key="item.id"
          class="col-md-2 navList"
          :to="item.path"
          tag="div"
        >{{item.title}}</router-link>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="headerxs">
      <div class="col-xs-9 hetxt">金誉科技</div>
      <div class="col-xs-3 hetxt">
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
                  <i class="el-icon-menu"></i>主营业务
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <router-link :to="{name:'service'}">
                  <i class="el-icon-setting"></i>服务体系
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <router-link :to="{name:'companyQual'}">
                  <i class="el-icon-setting"></i>企业资质
                </router-link>
              </template>
            </el-submenu>
             <el-submenu index="5">
              <template slot="title">
                <router-link :to="{name:'industryCus'}">
                  <i class="el-icon-setting"></i>行业伙伴
                </router-link>
              </template>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <router-link :to="{name:'componyCulture'}">
                  <i class="el-icon-setting"></i>企业文化
                </router-link>
              </template>
            </el-submenu>
          </el-menu>
        </el-drawer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header3",
  data() {
    return {
      nav: [
        { id: "0", title: "主页", path: { name: "home" } },
        { id: "1", title: "主营业务", path: { name: "business" } },
        { id: "2", title: "服务体系", path: { name: "service" } },
        { id: "3", title: "企业资质", path: { name: "companyQual" } },
        { id: "4", title: "行业客户", path: { name: "industryCus" } },
        { id: "5", title: "企业文化", path: { name: "companyCulture" } }
        
      ],
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {}
};
</script>
<style scoped>
a {
  text-decoration: none;
}
@media (min-device-width: 768px) {
  #header3 {
    height: 62px;
    margin-bottom: 4px;
  }
  #headr {
    display: block;
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

  .nav {
    font-size: 14px;
  }
  .navList {
    text-align: center;
  }
  .navList:hover {
    border-bottom: 4px solid rgb(94, 94, 172);
  }
}
@media (max-device-width: 768px) {
  #headr {
    display: none;
  }
  .headerxs {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ececec;
    height: 52px;
    z-index: 2;
  }
  .hetxt {
    height: 52px;
    font-size: 24px;
    font-weight: bold;

    line-height: 52px;
  }
}
</style>