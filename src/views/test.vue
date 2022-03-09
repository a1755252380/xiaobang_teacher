<template>
  <div class="container">
    <div class="djs">{{ time }}</div>
    <div class="music_container">
      <img src="../assets/images/qp.jpg" alt="" />
      <div id="trunk"></div>
    </div>
    <el-button @click="moveY()" v-loading.fullscreen.lock="fullscreenLoading">start</el-button>
    <el-button @click="go()">tttt</el-button>
  </div>
</template>


<style scoped>
.container {
  padding-top: 2%;
}
.djs {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  font-size: 20vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  color: aliceblue;
  line-height: 80vh;
}
.music_container {
  position: relative;
  overflow: hidden;
  height: 90vh;
  width: 34vw;
  margin: auto;
}
.music_container img {
  height: 100%;
}
/* @keyframes imgMove {
        0% {background-position: 0 11%;}
        25% {background-position: 0 32%;}
        50% {background-position: 0 56%;}
        75% {background-position: 0 78%;}
        100% {background-position: 0 100%;}
    } */
#trunk {
  display: none;
  position: absolute;
  left: 11%;
  top: 16%;
  height: 11%;
  width: 7%;
  background-color: rgb(100, 196, 132);
  opacity: 0.5;
  


  animation: trunkMove1 .5s infinite linear;
  transform: 0.5s;
}

@keyframes trunkMove1 {
  0% {
    left: 11%;
  }
  100% {
    left: 84%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      y: 16,
      time: 3,
      fullscreenLoading: false
    };
  },
  methods: {
    go(){
      this.$router.push({
                  name:'test2',
                  params: {name:'zhangshang1'}
                })
    },
    async play() {
      setInterval(async () => {
        const { data1: res } = await this.$axios.get("http://10.10.226.11:3000");
        console.log(res);
      }, 1000); 
    },
    subTime() {
      setInterval(() => {
        if (this.time > 0) {
          this.time -= 1;
        } else {
          return;
        }
      }, 1000);
    },
    async moveY() {
      console.log('我去调用后端！')
       this.$axios.get("http://10.10.226.11:3000/go")
      var trunk = document.querySelector("#trunk");
      var djs = document.querySelector(".djs");
      trunk.style.left = "11%";
      djs.style.display = "block";
      await this.subTime();
      setTimeout(() => {
        trunk.style.display = "block";
        djs.style.display = "none";
        var move2 = setInterval(() => {
          if (this.y >= 100) {
             this.fullscreenLoading = true;
            var getData =  setInterval(async () => {
            
              const { data: res } = await this.$axios.get(
                "http://10.10.226.11:3000"
              );
              if(res.isOk){
                 this.fullscreenLoading = false;
                this.$router.push({
                  name:'test2',
                  params: res
                })
                clearInterval(move2)
               clearInterval(getData)
              }
             
            }, 1000);
           
          } else {
            this.y += 14.5;
            trunk.style.top = this.y + "%";
          }
         


        }, 500);
      }, 3000);
    },
  },
};
</script>
