<template>
  <div class="information_container">
    <el-row
      :gutter="10"
      style="width:100%"
    >
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
      >
        <el-card class="ability_ranking">
          <h1>教师信息</h1>
          <el-table
           ref="stulist_table"
          
            class="stulist_table"
            :data="stuList"
            @row-click="openDetails"
          >
            <el-table-column
              type="index"
              :index="1"
            > </el-table-column>
            <el-table-column
              prop="imgSrc"
            >
              <template slot-scope="scope">
                <el-avatar
                  :size="35"
                  :src="scope.row.imgSrc"
                ></el-avatar>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
            >
            </el-table-column>
            <el-table-column
              prop="score"
              label="总教学进度"
            >
              <template slot-scope="scope">
                <!-- <el-rate
              v-model="scope.row.score"
              disabled
              show-score
              text-color="#F44336"
              :score-template="scope.row.score"
             :colors="['#F44336', '#F44336', '#F44336']"
            >
            </el-rate> -->
                <el-progress
                  type="line"
                  color="#2196F3"
                  :percentage="scope.row.score"
                ></el-progress>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
      >
        <div class="right_container">
          <el-card class="today_class">
            <h1>今日课堂</h1>
          <div class="today_class_scoll">
  <el-card class="today_class_card" v-for="(item, index) in classlist" :key="index">
              <el-row :gutter="10">
                <el-col :span="10"> <div class="teacher_name">
                <i class="el-icon-user"></i><span>授课老师：</span><span>{{item.teacher}}</span>
              </div> </el-col>
                 <el-col :span="14">  <div class="class_name">
                <i class="el-icon-notebook-2"></i><span>课程名称：</span><span>{{item.class}}</span>
              </div></el-col>
              </el-row>
            
            <el-row :gutter="10">
              <el-col :span="10"><div class="classroom_name">
                <i class="el-icon-house"></i><span>地点：</span><span>{{item.place}}</span>
              </div> </el-col>
                 <el-col :span="14"> <div class="class_time">
                <i class="el-icon-time"></i><span>时间：</span><span>{{item.time}}</span>
              </div></el-col>
            </el-row>
              <el-row :gutter="10">
              <el-col :span="24"> <div class="teacher_name">
                <i class="el-icon-user"></i><span>学生：</span><span>{{item.student}}</span>
              </div></el-col>
                
            </el-row>
             
            </el-card>
            </div>
           
           
          
        
          </el-card>
          <el-card class="practicing_card">
            <h1>练琴中</h1>
            <el-card
              class="stu_card"
              body-style="display:flex; justify-content: flex-start;"
            >
              <template v-for="item in stuList">
                <div
                  class="stu_container"
                  :key="item.id"
                  v-if="item.isPlay"
                >
                  <el-avatar
                    :size="120"
                    :src="item.imgSrc"
                  ></el-avatar>
                  <p>{{ item.name }}</p>
                </div>
              </template>
            </el-card>
          
          </el-card>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<style scoped>
h1 {
  font-size: 20px;
  text-align: flex-start;
}

/*学生表格*/ 
.stulist_table{
  width: 100%;
  
  
}
div/deep/.el-table__body-wrapper{
  overflow-y: scroll;
  height: 74vh;
}
div /deep/.el-table__cell{
  text-align: center;
}


/*今日课堂*/
.today_class_scoll{
  height: 40vh;
  overflow-y: scroll;
  padding: 5px;
} 
.information_container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.ability_ranking {
  width: 100%;
  height: 88vh;
  margin-bottom: 1vh;
}
.right_container {
  flex: 3;
  height: 90vh;
}
.today_class_card {
  width: 100%;
  margin-top: 7px;
  text-align: left;
}
.today_class {
  width: 100%;
  height: 50vh;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 3%;
}
.today_class i {
  font-size: 20px;
  margin-right: 10px;
}

.class_time,
.class_name,
.teacher_name,
.classroom_name {
  font-size: 15px;
}
.class_time span:nth-child(3),
.class_name span:nth-child(3),
.teacher_name span:nth-child(3),
.classroom_name span:nth-child(3) {
  margin-left: 5px;
  font-size: 15px;
  color: #7a2323;
}
.el-pagination {
  margin-top: 10px;
}
/* .point {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #D32F2F;
    margin-right: 25px;
    margin-left: 15px;
} */
.practicing_card {
  width: 100%;
  height: 35vh;
}
.stu_card {
  width: 98%;
  height: 100%;
  margin-top: 15px;
  text-align: center;
  overflow-x: scroll;
}
.stu_container {
  text-align: center;
  cursor: pointer;
  width: 20%;
  padding: 0 8px;
}
</style>
<script>
export default {
  data () {
    return {
      stuList: [
        
      ],
      classlist:[],
      tableheight:600
    };
  },
  methods: {
    openDetails (row) {
      const { id } = row
      let add=this.stuList[id]
      console.log(add)
      this.$router.push({path:"/manager/teacherDetails/" + id, query:add
                      })
    }
  },
    created() {
      this.$store.commit("radom_teacher_information_data",6);
      this.stuList=this.$store.state.teacher_information_data;
        this.$store.commit("random_teacher_class");
      this.classlist=this.$store.state.teacher_class;
     
    },
 
};
</script>
