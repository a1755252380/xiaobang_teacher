<template>
  <div class="message_container">
    <el-card class="container_card">
      <h1>待批改</h1>
      <!-- <el-table :data="toApprovalList" stripe style="width: 100%">
        <el-table-column
          prop="stu_name"
          label="姓名"
          align="center"
          width="250"
        >
        </el-table-column>
        <el-table-column
          prop="music_name"
          label="曲名"
          align="center"
          width="250"
        >
        </el-table-column>
        <el-table-column prop="id" align="center">
          <template slot-scope="prop">
            <el-button type="primary" icon="el-icon-edit" circle @click="toDetails(prop.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table> -->
      <el-card v-for="item in toApprovalList" :key="item.id" class="stu_card">
              <div class="avatar">
                <el-avatar :size="50" :src="item.circleUrl" ></el-avatar>
              </div>
              <p class="stu_card_music">{{ item.music_name }}</p>
              <p class="stu_card_name">{{ item.stu_name }}</p>
              <p class="stu_card_time">{{ item.time }}</p>
              <el-button class="stu_card_button" type="primary" icon="el-icon-edit" circle @click="toDetails(item.id)"></el-button>
            </el-card>
          
    
    </el-card>
    <el-card class="container_card">
         <h1>待布置</h1>
      <!-- <el-table :show-header="false" :data="toArrangementList">
        <el-table-column prop="music_name" align="center" width="250">
          <template slot-scope="scope">
            <div class="stu_container">
              <el-avatar :size="45" :src="scope.row.circleUrl"></el-avatar>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="stu_name"></el-table-column>
         <el-table-column prop="address" align="center">
          <template slot-scope="prop">
            <el-button type="primary" icon="el-icon-edit" circle @click="toArrangement(prop.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table> -->
    
 
            <el-card v-for="item in toArrangementList" :key="item.id" class="stu_card">
              <div class="avatar">
                <el-avatar :size="50" :src="item.circleUrl" ></el-avatar>
              </div>
              <p class="stu_card_name">{{ item.stu_name }}</p>
              <p class="stu_card_time">{{ item.time }}</p>
              <el-button class="stu_card_button" type="primary" icon="el-icon-edit" circle @click="toArrangement(item.id)"></el-button>
            </el-card>
          
       </el-card>
  </div>
</template>
<style scoped>
.message_container {
  display: flex;
  justify-content: space-evenly;
}
.container_card {
  width: 48%;
}
.container_card:nth-child(2) {
  width: 42%;
}
.container_card h1 {
  text-align: flex-start;
  margin-bottom: 30px;
}
.container_card h1 {
  text-align: flex-start;
  margin-bottom: 30px;
}
.stu_card {
  position: relative;
  height: 7.5vh;
  width: 100%;
  margin-bottom: 1vh;
}
.avatar,.stu_card_name,.stu_card_button,.stu_card_music,.stu_card_time {
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
  data() {
    return {
      toApprovalList: [
        { id: 1, stu_name: "魏佳君", music_name: "《卡农》" ,circleUrl:
            require("../../../assets/images/student/1.jpg"),time:"2028/4/12 20:46"},
        { id: 2, stu_name: "黄柏枝", music_name: "《梦中的婚礼》" ,circleUrl:
            require("../../../assets/images/student/2.jpg"),time:"2028/4/12 20:46"},
        { id: 3, stu_name: "柯娜娜", music_name: "《天空之城》",circleUrl:
            require("../../../assets/images/student/3.jpg"),time:"2028/4/12 20:46" }

      ],
      toArrangementList: [
        {
          id: 1,
          stu_name: "吴正达",
          circleUrl:
            require("../../../assets/images/student/6.jpg"),time:"2028/4/12 20:46"
        },
        {
          id: 2,
          stu_name: "龙威生",
          circleUrl:
            require("../../../assets/images/student/4.jpg"),time:"2028/4/12 20:46"
        },
        {
          id: 3,
          stu_name: "蔡小洪",
          circleUrl:
             require("../../../assets/images/student/5.jpg"),time:"2028/4/12 20:46"
        },
      ],
      circleUrl1:
        "https://ae01.alicdn.com/kf/U9b54ce3e01d7472b956a485896a23fd35.jpg",
      circleUrl:
        "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180914/ab6dfcb9c4d045c6983d970d3ff74c0c.jpeg",
    };
  },
  methods: {
    toDetails(id){
      this.$router.push('/teacher/correctionDetails/'+id)
    },
    toArrangement(id){
      this.$router.push('/teacher/arrangement/'+id)
    }
  }
};
</script>
