<template>
  <div
    class="message_container"
    click:
    true
  >
  <el-row :gutter="10" style="width:100%">
    <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="12"
              :xl="12"> <el-card class="container_card">
      <h1>学生消息</h1>
      <div class="message_table">
          <el-timeline>
        <el-timeline-item
          v-for="item in stuMsgList"
          :key="item.id"
          :timestamp="item.submissionTime"
        >
          <el-badge
            @click.native="toRead(item)"
            :key="item.id"
            value="New"
            :hidden="item.isRead"
          >
            <el-card>
              <div class="avatar">
                <el-avatar
                  :size="50"
                  :src="item.imgSrc"
                ></el-avatar>
              </div>
              <h4>{{ item.context }}</h4>
              <p>{{ item.name }} 提交于 {{ item.submissionTime }}</p>
              <i
                class="el-icon-delete-solid del"
                @click.stop="toDel(item,1)"
              ></i>
            </el-card>
          </el-badge>
        </el-timeline-item>
      </el-timeline>
      </div>
    
    </el-card></el-col>
                <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="12"
              :xl="12"> <el-card class="container_card">
      <h1>管理员消息</h1>
      <div class="message_table">
          <el-timeline>
        <el-timeline-item
          v-for="item in manMsgList"
          :key="item.id"
          :timestamp="item.submissionTime"
        >
          <el-badge
            @click.native="toRead(item)"
            :key="item.id"
            :value="item.isRead ? '' : 'New'"
          >
            <el-card>
              <div class="avatar">
                <el-avatar
                  :size="50"
                  :src="item.imgSrc"
                ></el-avatar>
              </div>
              <h4>{{ item.context }}</h4>
              <p>{{ item.name }} 提交于 {{ item.submissionTime }}</p>
              <i
                class="el-icon-delete-solid del"
                @click.stop="toDel(item,2)"
              ></i>
            </el-card>
          </el-badge>
        </el-timeline-item>
      </el-timeline>
      </div>
    
    </el-card></el-col>
  </el-row>
   
   
    <el-dialog
      width="80%"
      :visible.sync="dialogVisible"
      class="dialog"
    >
      <div class="top">
        <img :src="imgSrc">
        <p class="name">{{name}}</p>
      </div>
      <div class="main">
        <span>内容：</span>
        <div class="msgBox">
          {{dialogMsg}}
        </div>
      </div>
      <el-button
        type="danger"
        @click="dialogVisible=!dialogVisible"
      >确认</el-button>
    </el-dialog>
  </div>

</template>
<style scoped>
.message_container {
  display: flex;
  justify-content: space-evenly;
}
.container_card {
 height: 87vh;
}
@media screen and (max-width:1200px) {
  .container_card {
 margin-top: 2vw;
}

}
.container_card h1 {
  text-align: flex-start;
  margin-bottom: 30px;
}
.container_card .el-badge {
  width: 98%;
}
.container_card h4 {
  display: block;
  width: 100%;
  padding: 0 15%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.message_table{
  padding: 10px 0;
  height: 76vh;
  overflow-y: scroll;
}
div/deep/ .el-timeline{
  padding: 10px 3vw ;
}
.el-badge__content.is-fixed {
  top: 0;
  right: 17px;
}
.del {
  position: absolute;
  padding: 10px;
  right: 1%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f7f7f7;
  color: #f56c6c;
  border-radius: 50%;
  font-size: 1.8vh;
  cursor: pointer;
}

.dialog .el-dialog__body {
  display: flex;
  width: 100%;
}
.dialog .top {
  height: 30%;
  width: 100%;
  margin-bottom: 2vh;
}
.dialog .top img {
  width: 100px;
  height: 130px;
}
.dialog .main {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 4vh;
}
.main span {
  display: inline-block;
  width: 15%;
  font-size: 2vh;
  letter-spacing: 0.5vw;
}
.main .msgBox {
  padding: 1%;
  width: 80%;
  height: 18vh;
  background-color: rgb(247, 247, 247);
  font-size: 2vh;
  text-align: flex-start;
  color: rgb(29, 25, 25);
}
.avatar {
  position: absolute;
}
.name {
  font-size: 3vh;
  letter-spacing: 1vw;
  width: 100%;
  text-align: center;
}
.el-button {
  width: 20%;
  height: 7%;
}
</style>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      dialogMsg: "已完成梦想的婚礼考试，分数100分",
      name: "魏佳君",
      imgSrc:
        "https://ae01.alicdn.com/kf/U9b54ce3e01d7472b956a485896a23fd35.jpg",
      stuMsgList: [
        {
          id: "1",
          name: "魏佳君",
          imgSrc:
            require("../../assets/images/student/1.jpg"),
          context: "已完成考试，分数100分",
          submissionTime: "2021/5/14 20:46",
          isRead: false,
        },
        {
          id: "2",
          name: "黄柏枝",
          imgSrc:
            require("../../assets/images/student/2.jpg"),
          context: "已完成梦想的婚礼考试，分数100分",
          submissionTime: "2021/4/12 15:12",
          isRead: true,
        },
        {
          id: "3",
          name: "柯娜娜",
          imgSrc:
            require("../../assets/images/student/3.jpg"),
          context: "已完成梦想的婚礼考试，分数100分",
          submissionTime: "2021/4/28 18:36",
          isRead: true,
        },
        {
          id: "4",
          name: "龙威生",
          imgSrc:
            require("../../assets/images/student/4.jpg"),
          context: "已完成梦想的婚礼考试，分数100分",
          submissionTime: "2021/4/15 12:50",
          isRead: true,
        },
        {
          id: "5",
          name: "蔡小洪",
          imgSrc:
            require("../../assets/images/student/5.jpg"),
          context: "已完成梦想的婚礼考试，分数100分",
          submissionTime: "2021/6/12 21:46",
          isRead: true,
        },
        {
          id: "6",
          name: "吴正达",
          imgSrc:
            require("../../assets/images/student/6.jpg"),
          context: "已完成梦想的婚礼考试，分数100分",
          submissionTime: "2021/6/18 20:46",
          isRead: true,
        },
      ],
      manMsgList: [
        {
          id: "1",
          name: "张总",
          imgSrc:
            "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
          context: "明天晚上全体老师开会",
          submissionTime: "2021/4/12 20:46",
          isRead: false,
        },
        {
          id: "2",
          name: "张总",
          imgSrc:
            "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
          context: "明天晚上全体老师开会",
          submissionTime: "2021/4/12 20:46",
          isRead: false,
        },
        {
          id: "3",
          name: "张总",
          imgSrc:
            "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
          context: "明天晚上全体老师开会",
          submissionTime: "2021/4/12 20:46",
          isRead: false,
        },
        {
          id: "4",
          name: "张总",
          imgSrc:
            "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
          context: "明天晚上全体老师开会",
          submissionTime: "2021/4/12 20:46",
          isRead: false,
        },
        {
          id: "5",
          name: "张总",
          imgSrc:
            "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
          context: "明天晚上全体老师开会",
          submissionTime: "2021/4/12 20:46",
          isRead: false,
        },
        {
          id: "6",
          name: "张总",
          imgSrc:
            "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
          context: "明天晚上全体老师开会",
          submissionTime: "2021/4/12 20:46",
          isRead: false,
        },
      ]
    }
  },
  methods: {
    toRead (item) {
      item.isRead = true;
      this.name = item.name;
      this.imgSrc = item.imgSrc;
      this.dialogVisible = true;
      this.dialogMsg = item.context;
    },
    toDel (item, type) {
      const { id } = item;
      console.log(id);
      if (type == 1) {
        this.stuMsgList = this.stuMsgList.filter((item) => item.id !== id);
        return
      }
      else {
        this.manMsgList = this.manMsgList.filter((item) => item.id !== id);
        return
      }
    },
  },
};
</script>
