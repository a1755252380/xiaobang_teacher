<template>
  <el-container class="details_container">
    <div class="left_container">
      <div class="container">
        <!-- 视频回放 -->
    
          <div class="video_box">
            <video id="myVideo" class="video-js">
              <source :src="videoSrc" type="video/mp4" />
            </video>
          </div>
      
      </div>
    </div>
  </el-container>
</template>

<style scoped>

@import "./../../node_modules/videojs-markers/dist/videojs.markers.min.css";
.details_container {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/images/bg1.png);
    background-size: 100% 100%;
}


.container {
  width: 100%;

}


.video_box {
    position: absolute;
    top: 32%;
    left: 12%;
}
.video_box #myVideo {
  width: 37.9vw;
  height: 55vh;

}

.video-player {
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
</style>

<script>
export default {
  data() {
    return {
      videoSrc:'',
      timeList:[],
      resTime:[]
    };
  },
  mounted() {
    console.log(this.$route.params);
    console.log(typeof this.$router.params);
    const ss = this.$route.params.data.split(", '*',")
    this.videoSrc = ss[0].substring(1)
    this.timeList = ss[1].substring(2,ss[1].length-2).split(',')
    console.log(ss);
     this.time()
     console.log(this.resTime)
    this.initVideo();
  },
  methods: {
    time(){
      for(var i =0;i<this.timeList.length;i++){
        var time = this.timeList[i];
        if(i>0){
          time = time.substring(1)
          console.log(time)
        }
        var text = ''
        this.resTime[i] = {time,text}
      }
    },
    initVideo() {
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
        markers: this.resTime,
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
