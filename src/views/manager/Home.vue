<template>
  <div>
    <!-- <div class="test_two_box">
      <video id="myVideo" class="video-js">
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      </video>
    </div> -->
    <h1>欢迎进入管理端！</h1>
  </div>
</template>
<style scoped>
/* @import "./../../../node_modules/videojs-markers/dist/videojs.markers.min.css"; */
</style>
<script>
// export default {
//   data() {
//     return {
//       name: "TestTwo",
//     };
//   },
//   mounted() {
//     this.initVideo();
//   },
//   methods: {
//     initVideo() {
//       //初始化视频方法

//       let myPlayer = this.$video(document.querySelector("#myVideo"), {
//         //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
//         controls: true,
//         //自动播放属性,muted:静音播放
//         autoplay: "muted",
//         //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
//         preload: "auto",
//         //设置视频播放器的显示宽度（以像素为单位）
//         width: "800px",
//         //设置视频播放器的显示高度（以像素为单位）
//         height: "400px",
//         // 建议浏览器是否应在加载元素后立即开始下载视频数据。
//         // preload:'none'
//         controlBar: {
//           children: [{ name: "playToggle" },
//           {name: 'progressControl'}, // 播放进度条
//       {name: 'durationDisplay'},],
//         },
//       });
//       myPlayer.markers({
//         markerStyle: {
//           width: "7px",
//           "border-radius": "0%",
//           "background-color": "orange",
//         },
//         markers: [
//           { time: 8, text: "塌指" },
//           // {time: 10,  text: "is"},
//           { time: 22, text: "塌指" },
//           // {time: 28,  text: "cool"}
//         ],
//         markerTip: {
//           display: true,
//           text: function (marker) {
//             console.log(marker.text);
//             return marker.text;
//           },
//         },
//         onMarkerReached: function (marker) {
//           console.log("marker reached: " + marker.text);
//         },
//       });

//       console.log(myPlayer);
//     },
//   },
// };
</script>