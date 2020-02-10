 <template>
  <div id="header2">
    <div class="headermd">
      <div class="col-md-5 hetxt">金誉科技</div>
      <div class="col-md-7 hetxt">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link :to="{name:'home'}">主页</router-link>
            <!-- <a href="https://www.ele.me" target="_blank">主页</a> -->
          </el-menu-item>
          <el-menu-item index="2">
            <router-link
              :to="{name:'business',
                 path:'/business',
                 params: { 
                   name:'activeIndex',
                   dataObj: '2',
                   },
              }"
            >主营业务</router-link>
            <!-- <a href="https://www.ele.me" target="_blank">主营业务</a> -->
          </el-menu-item>
          <el-menu-item index="3">
            <a href="https://www.ele.me" target="_blank">服务体系</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="https://www.ele.me" target="_blank">企业资质</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="https://www.ele.me" target="_blank">企业文化</a>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="headerxs">
      <div class="col-xs-9 hetxt">金誉科技</div>
      <div class="col-xs-3 hetxt">
        <el-button icon="el-icon-s-operation" @click="drawer = true"></el-button>
        <!--    :before-close="handleClose" 关之前做的事件 -->
        <el-drawer title="导航" :visible.sync="drawer" :direction="direction" size="100%">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>主页
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>主营业务
              </template>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>服务体系
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>企业资质
              </template>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-setting"></i>企业文化
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
  name: "header2",
  data() {
    return {
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
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
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

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .hetxt {
    height: 62px;
    font-size: 18px;
    text-align: left;
    padding: 0 0 0 100px;
    line-height: 62px;
  }
}
</style>