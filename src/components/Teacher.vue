<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img
          class="img"
          src="../assets/images/logo.png"
          alt=""
        >
        <!-- 导航 -->
        <el-menu
          background-color="#D32F2F"
          mode="horizontal"
          text-color="#213051"
          active-text-color="#ffffff"
          router
          :default-active="'/teacher'+activePath"
        >
          <!-- 二级菜单 -->
          <el-menu-item
            :index="'/teacher'+item.path"
            v-for="item in menuList"
            :key="item.id"
            @click="saveNavState(item.path)"
          >
            <template slot="title">

              <!-- 文本 -->
              <span class="menu_font">{{item.name}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- <el-button  @click="logout">退出</el-button> -->
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>

      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style  scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #d32f2f;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-header div span {
  margin-left: 15px;
  font-size: 30px;
  font-weight: 700;
}
.el-header .img {
  margin-left: 2vw;
  width: 15.4%;
}

.el-aside {
  position: relative;
  background-color: #fafafa;
}

.el-menu {
  margin-left: 25vw;
}
.menu_font {
  font-size: 16px !important;
}
.el-menu-item {
  border: none !important;
}
.el-main {
  background-color: #f5f5f5;
  height: 93.6vh;
  width: 100%;
}

.iconfont {
  margin-right: 10px;
}
</style>

<script>
export default {
  data () {
    return {
      menuList: [
        { id: 1, name: "消息", path: "/message" },
        { id: 2, name: "学生信息", path: "/information" },
        { id: 3, name: "任务管理", path: "/manage" },


      ],
      circleUrl:
        "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
      activePath: "",
    };
  },
  methods: {
    saveNavState (activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
      console.log(activePath);
    },
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  }
};
</script>