<template>
  <div class="message_container">
    <el-row :gutter="10" style="width:100%">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <el-card class="container_card">
      <h1>待批改</h1>
     <div class="stu_card_list">
       <el-card
        v-for="item in toApprovalList"
        :key="item.id"
        class="stu_card"
      >
        <div class="avatar">
          <el-avatar
            :size="50"
            :src="item.circleUrl"
          ></el-avatar>
        </div>
        <p class="stu_card_music">{{ item.music_name }}</p>
        <p class="stu_card_name">{{ item.stu_name }}</p>
        <p class="stu_card_time">{{ item.time }}</p>
        <el-button
          class="stu_card_button"
          type="primary"
          icon="el-icon-edit"
          circle
          @click="toDetails(item.id)"
        ></el-button>
      </el-card>
     </div>

    </el-card>
      </el-col>
       <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
           
    <el-card class="container_card container_card2">
      <h1>待布置</h1>
      
      <div class="stu_card_list">
        <el-card
        v-for="item in toArrangementList"
        :key="item"
        class="stu_card"
      >
        <div class="avatar">
          <el-avatar
            :size="50"
            :src="item.circleUrl"
          ></el-avatar>
        </div>
        <p class="stu_card_name">{{ item.stu_name }}</p>
        <p class="stu_card_time">{{ item.time }}</p>
        <el-button
          class="stu_card_button"
          type="primary"
          icon="el-icon-edit"
          circle
          @click="toArrangement(item.id)"
        ></el-button>
      </el-card>

      </div>
    </el-card>
       </el-col>
    </el-row>

  </div>
</template>
<style scoped lang="scss">
.message_container {
  display: flex;
  justify-content: space-evenly;
  width: 93vw;
}
.container_card {
  width: 48vw;
  height: 88vh;
 
}
.container_card2{
  margin-left: 5px;
}
@media  screen and  (max-width: 1200px) {//当屏幕宽度大于768px小于1440px时使用以下样式代码
		   .container_card{
          width: 93vw;
		   	margin-top: 2vh !important;
		   }
       .container_card2{
  margin-left: 0px;
}
.stu_card {
  width: 60vh !important;
}
		}
.container_card h1 {
  text-align: flex-start;
  margin-bottom: 30px;
}
.container_card h1 {
  text-align: flex-start;
  margin-bottom: 30px;
}

.stu_card_list{
  width: 100%;
  overflow-y: scroll;
   height: 76vh;
   margin: 0;
   padding: 0;
}
.stu_card {
  position: relative;
  height: 8.5vh;
  width: 44vw;
  margin-bottom: 1vh;
}
.avatar,
.stu_card_name,
.stu_card_button,
.stu_card_music,
.stu_card_time {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.stu_card_name {
  line-height: 8vh;
  left: 22%;
}
.stu_card_music {
  line-height: 8vh;
  left: 45%;
}
.stu_card_time {
  line-height: 8vh;
  left: 65%;
}
.stu_card_button {
  right: 5%;
}
.avatar {
  left: 4%;
}
</style>
<script>
export default {
  data () {
    return {
      toApprovalList: [
        {
          id: 1, stu_name: "魏佳君", music_name: "《卡农》", circleUrl:
            require("../../../assets/images/student/1.jpg"), time: "2021/4/12 20:46"
        },
        {
          id: 2, stu_name: "黄柏枝", music_name: "《梦中的婚礼》", circleUrl:
            require("../../../assets/images/student/2.jpg"), time: "2021/4/13 12:49"
        },
       
        {
          id: 3, stu_name: "柯娜娜", music_name: "《天空之城》", circleUrl:
            require("../../../assets/images/student/3.jpg"), time: "2021/4/16 15:35"
        }

      ],
      toArrangementList: [
        {
          id: 1,
          stu_name: "吴正达",
          circleUrl:
            require("../../../assets/images/student/6.jpg"), time: "2021/4/12 20:46"
        },
        {
          id: 2,
          stu_name: "龙威生",
          circleUrl:
            require("../../../assets/images/student/4.jpg"), time: "2021/4/12 20:46"
        },
        {
          id: 3,
          stu_name: "蔡小洪",
          circleUrl:
            require("../../../assets/images/student/5.jpg"), time: "2021/4/12 20:46"
        },
      ],
      circleUrl1:
        "https://ae01.alicdn.com/kf/U9b54ce3e01d7472b956a485896a23fd35.jpg",
      circleUrl:
        "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
    };
  },
  mounted () {
    this.getVideo()
  },
  methods: {
    toDetails (id) {
      this.$router.push('/teacher/correctionDetails/' + id)
    },
    toArrangement (id) {
      this.$router.push('/teacher/arrangement/' + id)
    },
    getVideo () {

      setInterval(() => {

        if (!this.videoInfo) {
          this.$axios({
            methods: 'get',
            url: 'http://10.10.226.71:3000/',
            data: {}
          }).then((result) => {
            console.log(result + "1");
          })
        }
      }, 2000)
    }
  }
};
</script>
