<template>
  <el-container style="width:100%">
    <div class="student_container">
      <el-avatar :size="105"
                 :src="stuInfo.studentImgSrc"></el-avatar>
      <p>{{ stuInfo.studentName }}</p>
    </div>
    <el-row :gutter="10" style="width:100vw">
      <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="5"
              :xl="5">
        <div class="result_container">
          <el-card>
            <h1>能力评估</h1>
            <div id="myChart"></div>
            <ul class="result_ul">
              <li v-for="item in stuInfo.abilityList"
                  :key="item.id">
                <span>{{ item.name }}</span>
                <el-progress :percentage="item.score"
                             :color="customColorMethod"
                             :format="format"></el-progress>
              </li>
            </ul>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="14"
              :xl="14">
        <div class="middle_container">
          <el-card class="teacher_card">
            <h1>任课教师</h1>
            <div style="display:flex; justify-content: space-evenly;">
              <div class="teacher_container"
                   v-for="item in stuInfo.teacherList"
                   :key="item.id">
                <el-avatar :size="90"
                           :src="item.teacherImgSrc"></el-avatar>
                <p>{{ item.teacherName }}</p>
              </div>
            </div>
          </el-card>

          <el-card class="course_container">
            <h1>课程</h1>
            <div class="classname">
              <el-card v-for="item in stuInfo.courseList"
                       :key="item.id">
                <div class="class_time">
                  <i class="el-icon-time"></i><span>时间：</span><span>{{item.time}}</span>
                </div>
                <div class="class_name">
                  <i class="el-icon-notebook-2"></i><span>课程名称：</span><span>{{item.class}}</span>
                </div>
                <div class="teacher_name">
                  <i class="el-icon-user"></i><span>授课老师：</span><span>{{item.teacher}}</span>
                </div>
                <div class="classroom_name">
                  <i class="el-icon-house"></i><span>地点：</span><span>{{item.place}}</span>
                </div>
              </el-card>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="5"
              :xl="5">
        <div class="right_container">
          <el-card class="level_card">
            <p>钢琴级别：<span>{{stuInfo.level}}级</span></p>
          </el-card>
          <el-card class="task_card">
            <h1>任务列表</h1>
            <div class="task_table">
                  <el-card v-for="item in stuInfo.task"
                     :key="item">
              <div class="class_time">
                <i class="el-icon-time"></i><span>时间：</span><span>{{item.time}}</span>
              </div>
              <div class="class_name">
                <i class="el-icon-notebook-2"></i><span>课程名称：</span><span>{{item.musicName}}</span>
              </div>
              <div class="teacher_name">
                <i class="el-icon-user"></i><span>授课老师：</span><span>谭浩</span>
              </div>
            </el-card>
            </div>
        
          </el-card>
        </div>
      </el-col>
    </el-row>

  </el-container>
</template>

<style scoped>
.el-container {
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 3vh;
  height: 88vh;
}
.student_container {
  width: 100%;
  padding-bottom: 2vh;
}
.result_container {
  height: 69vh;
  letter-spacing: 0.1vw;
}
.result_container #myChart {
  width: 100%;
  height: 23vh;
  margin-top: 3%;
  margin-bottom: 8%;
}
.result_ul {
  font-size: 2vh;
}
.result_ul li {
  padding: 1vh 0;
  display: flex;
}
.result_ul li span:nth-child(1) {
  text-align: center;
  display: inline-block;
  font-size: 1.6vh;
  width: 20%;
  color: #999999;
  margin-right: 1vw;
}
.result_ul .el-progress {
  width: 70%;
}
.middle_container {
  height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.teacher_card {
  width: 100%;
  height: 40%;
  text-align: center;
}

.teacher_card .teacher_container {
  text-align: center;
  width: 20%;
  font-size: 2vh;
  letter-spacing: 0.1vw;
}
.teacher_container .el-avatar {
  cursor: pointer;
  margin-bottom: 1vh;
}
.course_container {
  width: 100%;
  height: 57%;
  text-align: center;
}
.classname {
  overflow-y: scroll;
  height: 29vh;
    text-align: left !important;
}
.course_container .el-card {
  text-align: flex-start;
  margin: 1vh 5px;
}

.course_container .el-card:nth-child(1) {
  margin-top: 0;
}

.class_time,
.class_name,
.teacher_name,
.classroom_name {
  font-size: 16px;
}
.class_time span:nth-child(3),
.class_name span:nth-child(3),
.teacher_name span:nth-child(3),
.classroom_name span:nth-child(3) {
  margin-left: 5px;
  font-size: 18px;
  color: #7a2323;
}
.right_container {
  height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width:1200px) {
.right_container {
  margin-top: 20px;
}
}
.level_card {
  height: 20%;
}
.level_card span {
  font-size: 4.5vh;
  color: #7a2323;
}
.task_card {
  height: 75%;
  text-align: flex-start;
}
.task_table{
  overflow-y: scroll;
   height: 38vh;
  text-align: left;

}
.task_card h1 {
  text-align: center;
}
.task_card .el-card {
  text-align: flex-start;
  margin-bottom: 5%;
}
h1 {
  margin-bottom: 2vh;
}
</style>
    
<script>
export default {
  data () {
    return {
      studentId: "",
      stuInfo: {},
      stuInfoList: [
        {
          id: 1, studentName: "魏佳君", studentImgSrc: require("../../assets/images/student/1.jpg"),
          teacherList: [{ id: 1, teacherName: "谭浩", teacherImgSrc: require("../../assets/images/teacher/1.jpg") }, { id: '2', teacherName: "龙晓琳", teacherImgSrc: require("../../assets/images/teacher/2.jpg") }],
        },

      ],
    };
  },
  methods: {
    customColorMethod (percentage) {
      console.log(percentage);
      return "#F44336";
    },
    format (percentage) {
      return percentage + "分"
    },
    drawReadr () {
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      var abilityList = this.stuInfo.abilityList;
      console.log(abilityList);
      var scoreList = [];
      for (var item of abilityList) {
        scoreList.push(item.score);
      }
      myChart.setOption({
        // title: {
        //   text: "评测报告图",
        // },
        // legend: {
        //   data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
        // },
        radar: {

          // 图表颜色
          splitArea: {
            areaStyle: {
              color: ["#FEFEFE", "#FFEBEE"],
            },
          },
          // shape: 'circle',
          indicator: [
            { name: "音准", max: 100 },
            { name: "指法", max: 100 },
            { name: "手型", max: 100 },
            { name: "速度", max: 100 },
            { name: "平稳度", max: 100 },
            { name: "完整度", max: 100 },
            { name: "节奏", max: 100 },
          ],
        },
        grid: {
          x: 25,
          y: 150,

        },
        textStyle: {
          color: "#333333", // 文字颜色
        },
        series: [
          {
            name: "钢琴能力曲线图",
            type: "radar",
            data: [
              {
                value: scoreList,
                name: "能力曲线",
              },
            ],

            itemStyle: {
              normal: {
                color: "#F44336",
                lineStyle: {
                  color: "#DB7093",
                },
              },
            },
          },
        ],
      });
    },
  },
  mounted: function () {
    this.$store.commit('rs_random_class')
    let level = ["一", "二", "三", "四"];
    let sum = parseInt(1 + Math.random() * 4);
    let num = 0
    let teacherList = []
    for (let i = 1; i <= sum; i++) {
      let a = parseInt(1 + Math.random() * 5);
      if (num == a) {
        continue
      } else {
        num = a
        teacherList.push({
          id: i, teacherName: this.$store.state.teacher_name[parseInt(Math.random() * this.$store.state.teacher_name.length
          )], teacherImgSrc: require("../../assets/images/teacher/" + a + ".jpg")
        })
      }
    }
    let data = {
      id: this.$route.query.id, studentName: this.$route.query.name, studentImgSrc: this.$route.query.imgSrc,
      teacherList: teacherList, abilityList: [
        {
          "id": 1,
          "name": "音准",
          "score": 65 + parseInt(Math.random() * 35)
        },
        {
          "id": 2,
          "name": "指法",
          "score": 65 + parseInt(Math.random() * 35)
        },
        {
          "id": 3,
          "name": "手型",
          "score": 65 + parseInt(Math.random() * 35)
        },
        {
          "id": 4,
          "name": "速度",
          "score": 65 + parseInt(Math.random() * 35)
        },
        {
          "id": 5,
          "name": "平稳度",
          "score": 65 + parseInt(Math.random() * 35)
        },
        {
          "id": 6,
          "name": "完整度",
          "score": 65 + parseInt(Math.random() * 35)
        },
        {
          "id": 7,
          "name": "节奏",
          "score": 65 + parseInt(Math.random() * 35)
        }
      ],
      task: [{ id: 1, teacherName: '谭浩', musicName: '火车', time: '2021/4/17' }, { id: 2, teacherName: '谭浩', musicName: '海军工兵', time: '2021/4/17' }]
      , level: level[parseInt(Math.random() * 4)],
      courseList: this.$store.state.s_random_class
    }

    //统一课程的安排同授课学生一致
    let zz = []
    for (let i = 0; i < teacherList.length; i++) {
      zz.push(teacherList[i].teacherName)
    }
    console.log(zz)
    for (let i = 0; i < data.courseList.length; i++) {
      data.courseList[i].teacher = zz[parseInt(Math.random() * zz.length)]
    }



    this.stuInfo = data;
    // console.log(this.stuInfo);
    console.log(this.$route.query)
    this.drawReadr();
  },
};
</script>
