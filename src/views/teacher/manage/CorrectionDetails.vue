<template>
  <el-container class="details_container">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
      >
        <div class="left_container">

          <div class="container">
            <div class="nav">
              <ul>
                <li>练琴报告</li>
                <li>视频回放</li>
                <li>训练方案</li>
                <li>教师评语</li>
                <li>教学建议</li>
              </ul>
            </div>
            <!-- 练琴报告 -->
            <el-card v-show="navIndex == '0'">
              <img
                src="../../../assets/images/yp.jpg"
                alt=""
              />
            </el-card>
            <!-- 视频回放 -->
            <el-card
              class="video_card"
              v-show="navIndex == '1'"
            >
              <div class="video_box">
                <video
                  id="myVideo"
                  class="video-js"
                >
                  <source
                    src="../../../assets/media/play_piano.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </el-card>
            <!-- 训练方案 -->
            <el-card
              v-show="navIndex == '2'"
              class="program_card"
            >
              <el-card>
                <div class="left_box">
                  <div class="redbox"></div>
                  <h1>张三的评估结果</h1>
                  <p>
                    张三的<span>手型</span>还不能保持标准姿势,
                    且手<span>指伸张性</span>较弱，影响正确指法弹奏
                  </p>
                  <p>推荐练习<span>八度弹奏、和弦练习</span>等</p>
                </div>
                <div class="right_box">
                  <img
                    src="../../../assets/images/fa.png"
                    alt=""
                  >
                </div>
              </el-card>
            </el-card>
            <!-- 教师评语 -->
            <el-card v-show="navIndex == '3'">
              <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                resize="none"
                v-model="comments"
              >
              </el-input>
              <div class="comments">
                <span>评价：</span>
                <el-rate
                  show-text
                  :texts="['极差', '失望', '一般', '满意', '优秀']"
                  v-model="rate"
                >
                </el-rate>
              </div>
              <el-button type="danger">发送给家长</el-button>
            </el-card>

            <!-- 教学建议 -->
            <el-card v-show="navIndex == '4'"> </el-card>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
      >
        <div class="right_container">
          <div class="result_container">
            <el-card>
              <h1>评测结果</h1>
              <p class="score">92.02分</p>
              <!-- <p class="ranking">超越全国<span>88.8%</span>的用户</p> -->
              <div id="myChart"></div>
              <ul class="result_ul">
                <li
                  v-for="item in abilityList"
                  :key="item.id"
                >
                  <span>{{ item.name }}</span>
                  <el-progress
                    :percentage="item.score"
                    :color="customColorMethod"
                    :format="format"
                  ></el-progress>
                </li>
              </ul>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>

  </el-container>
</template>

<style scoped>
@import "./../../../../node_modules/videojs-markers/dist/videojs.markers.min.css";
.details_container {
  height: 89vh;
  width: 100%;
  padding: 2% 6%;
}
.el-card__body {
  height: 100%;
}
.el-row {
  width: 100%;
}
.left_container {
  position: relative;
  display: block;
  width: 100%;
  /* float: left;
  width: 63%; */
  height: 85vh;
  /* margin-right: 7%; */
  /* margin-top: 4%; */
  /* padding: 2%; */
  border-radius: 4px;
  margin-bottom: 2%;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.left_container .nav {
  position: relative;
  /* top: 1%; */
  width: 99.9%;
  text-align: center;
  height: 60px;
  padding-top: 2%;
  background-color: #ffffff;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
}
.nav ul {
  display: flex;
  justify-content: space-evenly;
}
.nav ul li {
  width: 16%;
  font-size: 14px;
  padding: 8px;
  background-color: #ffebee;
  border-radius: 30px;
  user-select: none;
}
/* @media (min-width: 768px) and (max-width: 1024px) {
  .nav {
    height: 60px !important;
  }
  .nav ul li {
    width: 16%;
    font-size: 14px !important;
  }
}
@media (min-width: 1025px) and (max-width: 1440px) {
  .nav {
    height: 60px !important;
  }
  .nav ul li {
    width: 16%;
    font-size: 14px !important;
  } */
/* } */
.nav ul li:hover {
  font-size: 14px;
  color: #f44336;

  background-color: #f44336;
}

.container {
  width: 100%;
  height: 100%;
}
.container .el-card {
  width: 100%;
  height: 100%;
}
.container img {
  width: 80%;
  height: 100%;
}

.video_box #myVideo {
  width: 100%;
  height: 55vh;
  margin: 0 auto;
  margin-top: 5vh;
}

.video-player {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.container .el-textarea {
  margin-top: 6vh;
  margin-bottom: 2vh;
}
.comments {
  display: inline-block;
  width: 100%;
  text-align: flex-start;
}
.el-rate {
  display: inline-block;
  margin-top: 2vh;
  margin-bottom: 6vh;
}
.program_card {
  width: 100%;
  height: 100%;
}
.program_card .el-card {
  padding: 8%;
  margin-top: 3%;
}
.program_card .left_box {
  width: 48%;
  height: 100%;
  text-align: center;
  margin-bottom: 1vh;
  padding: 4% 3% 10% 3%;
}
.program_card .left_box h1 {
  font-size: 3.5vh;
  color: #f44336;
  text-align: center;
}
.program_card .left_box p {
  font-size: 2.8vh;
  line-height: 4vh;
}
.program_card .left_box span {
  color: #f44336;
}
.program_card .right_box {
  position: absolute;
  right: 5%;
  top: 20%;
  width: 47%;
}
.program_card .right_box img {
  width: 100%;
  height: 100%;
}
.right_container {
  /* float: right; */
  /* width: 23%; */
  /* padding: 2%; */
  width: 100%;
  height: 85vh;
  display: block;
}

.result_container,
.program_container,
.suggestions_container {
  text-align: flex-start;
  margin-bottom: 10%;
}
.result_container {
  width: 100%;
  height: 100%;
  text-align: flex-start;
  letter-spacing: 0.1vw;
}

.result_container #myChart {
  width: 100%;
  height: 32vh;
  color: #f44336;
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
.suggestions_container {
  width: 100%;
  height: 25vh;
}
.result_container .score {
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: center;
  color: #333333;
  font-size: 3.5vh;
  border-bottom: 2px #f44336 solid;
  padding: 0 2%;
}
.result_container .ranking {
  font-size: 1vh;
  text-align: center;
  margin-bottom: 3vh;
}
.result_container .ranking span {
  font-size: 2.5vh;
  color: #f44336;
}
.program_container {
  width: 100%;
  height: 30vh;
}
.result_container .el-card,
.program_container .el-card,
.suggestions_container .el-card {
  width: 100%;
  height: 100%;
}

.left_container h1 {
  text-align: flex-start;
  margin-bottom: 2%;
}
.h1 {
  font-size: 2.5vh;
}
.el-button {
  width: 60%;
  height: 9%;
  font-size: 2vh;
}
.program_container .el-card {
  margin-bottom: 50px;
}
</style>

<script>
export default {
  data () {
    return {
      navIndex: "0",
      //老师评语
      comments: "",
      rate: "",
      abilityList: [
        {
          id: 1,
          name: "音准",
          score: 90,
        },
        {
          id: 2,
          name: "指法",
          score: 59,
        },
        {
          id: 3,
          name: "手型",
          score: 83,
        },
        {
          id: 4,
          name: "速度",
          score: 79,
        },
        {
          id: 5,
          name: "平稳度",
          score: 99,
        },
        {
          id: 6,
          name: "完整度",
          score: 92,
        },
        {
          id: 7,
          name: "节奏",
          score: 82,
        },
      ],
      // 视频播放
      // playerOptions: {
      //   playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
      //   autoplay: false, //如果true,浏览器准备好时开始回放。
      //   muted: false, // 默认情况下将会消除任何音频。
      //   loop: false, // 视频一结束就重新开始。
      //   preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      //   language: "zh-CN",
      //   aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      //   fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      //   sources: [
      //     {
      //       type: "video/mp4",
      //       // src : 'http://vjs.zencdn.net/v/oceans.mp4'//url地址
      //       src: require("../../../assets/media/1.mp4"), //url地址
      //     },
      //   ],
      //   poster: "", //你的封面地址
      //   // width: document.documentElement.clientWidth,
      //   notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      //   controlBar: {
      //     timeDivider: true, //当前时间和持续时间的分隔符
      //     durationDisplay: true, //显示持续时间
      //     remainingTimeDisplay: false, //是否显示剩余时间功能
      //     fullscreenToggle: true, //全屏按钮
      //   },
      // },
    };
  },
  mounted () {
    this.drawReadr();
    this.initVideo();
    this.getNav();
  },
  methods: {
    customColorMethod (percentage) {
      console.log(percentage);
      return "#F44336";
    },
    format (percentage) {
      return percentage + "分";
    },
    drawReadr () {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // console.log(this.abilityList);
      var abilityList = this.abilityList;
      // console.log(abilityList);
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
    getNav () {
      var ul = document.querySelector(".nav").querySelector("ul");
      var lis = ul.querySelectorAll("li");
      var that = this;
      //  console.log(lis);
      for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
          that.$data.navIndex = i;
          for (let j = 0; j < lis.length; j++) {
            lis[j].style.color = "black";
            lis[j].style.background = '#FFEBEE'
          }
          lis[i].style.color = "#ffffff";
          lis[i].style.background = '#f44336'
        };
      }
    },
    initVideo () {
      //初始化视频方法
      let myPlayer = this.$video(document.querySelector("#myVideo"), {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px",
        // 建议浏览器是否应在加载元素后立即开始下载视频数据。
        // preload:'none'
        controlBar: {
          children: [
            // { name: "playToggle" },
            { name: "progressControl" }, // 播放进度条
            { name: "durationDisplay" },
          ],
        },
      });
      myPlayer.markers({
        markerStyle: {
          width: "7px",
          "border-radius": "0%",
          "background-color": "orange",
        },
        markers: [
          { time: 8, text: "" },
          { time: 8.6, text: "" },
          { time: 9.2, text: "" },
          { time: 9.8, text: "" },
          { time: 9.8, text: "" },
          // {time: 10,  text: "is"},
          { time: 22, text: "" },
          // {time: 28,  text: "cool"}
        ],
        markerTip: {
          display: true,
          text: function (marker) {
            console.log(marker.text);
            return marker.text;
          },
        },
        onMarkerReached: function (marker) {
          console.log("marker reached: " + marker.text);
        },
      });

      console.log(myPlayer);
    },
  },
};
</script>
