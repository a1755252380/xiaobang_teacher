<template>
  <el-container class="details_container">
    <el-row :gutter="10">
      <el-col
        :xs="12"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <div class="left_container">
          <div class="report_container">
            <h1>练琴报告</h1>
            <el-card></el-card>
          </div>
          <div class="video_container">
            <h1>视频回放</h1>
            <el-card class="video_card">
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
          </div>
          <div class="comments_container">
            <h1>教师评语</h1>
            <el-card>
              <el-input
                type="textarea"
                :rows="2"
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
            </el-card>
          </div>
          <el-button type="danger">发送给家长</el-button>
        </div>
      </el-col>
      <el-col
        :xs="12"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <div class="right_container">
          <div class="result_container">
            <el-card>
              <h1>评测结果</h1>
              <p class="score">92.02分</p>
              <p class="ranking">超越全国<span>88.8%</span>的用户</p>
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
          <div class="program_container">
            <el-card>
              <h1>训练方案</h1>
            </el-card>
          </div>
          <div class="suggestions_container">
            <el-card>
              <h1>教学建议</h1>
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
  height: 100vh;
  padding: 2% 6%;
}

.left_container {
  /* float: left; */
  width: 100%;
  height: 98%;
  /* margin-right: 7%; */
}

.report_container,
.video_container,
.comments_container {
  margin-bottom: 6%;
}
.report_container {
  width: 100%;
  height: 50%;
}
.video_container {
  width: 100%;
  height: 56%;
}

.video_box #myVideo {
  margin: 0 auto;
  margin-top: 10px;
}
.video_container .video_card .comments_container {
  width: 100%;
  height: 20%;
  text-align: flex-start;
}
.video-player {
  width: 75%;
  margin: 0 auto;
}
.comments_container span {
  font-size: 1.8vh;
}
.comments {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.el-rate {
  display: inline-block;
  margin-top: 2%;
}

.right_container {
  width: 100%;
  display: block;
}
.report_container .el-card,
.video_container .el-card,
.comments_container .el-card {
  width: 100%;
  height: 100%;
}
.result_container,
.program_container,
.suggestions_container {
  text-align: flex-start;
  margin-bottom: 10%;
}
.result_container {
  width: 100%;
  height: 85vh;
  text-align: flex-start;
  letter-spacing: 0.1vw;
}

.result_container #myChart {
  width: 100%;
  height: 32vh;
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
  text-align: center;
  color: #333333;
  font-size: 3.5vh;
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
  height: 7%;
}
.program_container .el-card {
  margin-bottom: 50px;
}
</style>

<script>
export default {
  data () {
    return {
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
  },
  methods: {
    customColorMethod (percentage) {
      console.log(percentage)
      return "#F44336";

    },
    format (percentage) {
      return percentage + "分";
    },
    drawReadr () {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      console.log(this.abilityList);
      var abilityList = this.abilityList;
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
          },
        ],
      });
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
            { name: "playToggle" },
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
          { time: 8, text: "塌指" },
          // {time: 10,  text: "is"},
          { time: 22, text: "塌指" },
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
