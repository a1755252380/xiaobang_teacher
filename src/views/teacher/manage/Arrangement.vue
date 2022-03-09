<template>
  <el-container class="arrangement_container">
     <!-- <el-input placeholder="请输入内容" v-model="search">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input> -->
     <el-row :gutter="10" style="width:100%;  ">
         <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
         <div class="input_search">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
    <el-select v-model="search_type" slot="prepend" placeholder="请选择">
      <el-option label="练习教材" value="练习教材"></el-option>
      <el-option label="考级必备" value="考级必备"></el-option>
      <el-option label="流行曲" value="流行曲"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
      </div>
      </el-col>
     </el-row>
    <el-row :gutter="10">
   
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
         <h1>练习教材</h1>
    <el-card class="top_container">
      <ul class="text_book book_card">
        <li
          v-for="item in textBookList"
          :key="item.id"
          @click="DialogVisible=true;textBook(item.bookName) "
        >
          <img :src="item.imgSrc" alt="" /><p>{{ item.bookName }}</p>
        </li>
      </ul>
       
    </el-card>
      </el-col>
       <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <h1>考级必备</h1>
    <el-card class="bottom_container">
      <ul class="exam_book book_card">
        <li v-for="item in examBookList" :key="item.id"  @click="DialogVisible=true;examBook(item.bookName)" >
             <img :src="item.imgSrc" alt="">
         <p>{{ item.bookName }}</p>
        </li>
      </ul>
    </el-card>
       </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
             
    <h1>流行曲</h1>
    <el-card class="bottom_container">
      <ul class="exam_book book_card">
        <li v-for="item in examBookList" :key="item.id">
             <img :src="item.imgSrc" alt="">
         <p>{{ item.bookName }}</p>
        </li>
      </ul>
    </el-card>
        </el-col>
    </el-row>
    <!-- 教材弹窗 -->
      <el-dialog :title="textBookName" :visible.sync="DialogVisible">
          <ul class="series_book">
        <li
          v-for="item in dialogList"
          :key="item.id"
           @click.stop="subDialogVisible=true;DialogVisible=false;subTextBook(item.bookName,item.imgSrc) "
        >
          <img :src="item.imgSrc" alt="" /><p>{{ item.bookName }}</p>
        </li>
       
        </ul>
    </el-dialog>
        <!-- 系列弹窗 -->
     <el-dialog :visible.sync="subDialogVisible"  class="subDialog">
        
             <div class="left_subDialog">
              <img :src="subImgSrc" alt="">
          <p>{{subTextBookName}}</p>
         </div>
         <div class="right_subDialog">
             <ul>
                 <li v-for="item in subDialogList" :key="item.id" @click.stop="releaseTrack(item.trackName)"><i class="el-icon-notebook-2"></i>{{item.trackName}}</li>
             </ul>
         </div>
        
    </el-dialog>


  </el-container>
</template>

<style scoped >

.arrangement_container {
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  padding-left: 2%;

}

/**搜索栏 */
div/deep/.el-select .el-input {
    width: 130px;
  }
div/deep/ .el-input{
  margin-left: 0;
}
 .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  div /deep/.el-input__inner {
   
    border: 1px solid #DCDFE6;
   
    color: #606266;
   
  }
.input_search{
  width: 100%;
  margin: 0 auto 30px auto;
}
.top_container,
.bottom_container {
  width: 95%;
  height: 50%;
  overflow-y: scroll;
  margin-bottom: 2vh;
}

.series_book {
  width: 100%;
  height: 63vh;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: scroll;
}
.book_card {
 width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.book_card li {
 width: 16.7%;
    margin: .2% 1.6%;
    overflow: hidden;
    font-size: 2vh;
    border-top-left-radius: 8%;
    border-top-right-radius: 8%;
}

.book_card li img {
    width: 100%;
}

/* 教材弹窗 */
.series_book {
    justify-content: flex-start;
}
.series_book li{
    width: 21%;
    margin: 0 2%;
    overflow: hidden;
     border-top-left-radius: 8%;
    border-top-right-radius: 8%;
}
.series_book img {
    width: 100%;
}
.subDialog .el-dialog__body {
  
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    height: 55vh;
}
.subDialog ul {
    height: 100%;
    overflow-y: scroll;
    text-align: flex-start;
}
.subDialog li {
    font-size: 2vh;
    line-height: 3vh;
    padding: .1vh;
    user-select:none;
}
.subDialog li:hover {
    background-color: rgb(234, 235, 203);
}
.left_subDialog {
    width: 40%;
    
}
.left_subDialog img {
    width: 95%;
}
.right_subDialog {
    width: 40%;
}

.arrangement_container h1 {
  font-size: 3vh;
  text-align: flex-start;
  margin-bottom: 1vh;
}
.messageBox {
    height: 50vh;
}
.messageBox h1 {
    margin: 5% 0;
}
.messageBox p {
    font-size: 2vh;
    margin: 1%;
}
.messageBox textarea{
    height: 40%;
    width: 85%;
    margin: 5% 0 0 8%;
    font-size: 2vh;
}
.messageBox button {
    display: block;
    text-align: center;
    margin:0 auto;
}
</style>

<script>
export default {
  data() {
    return {
        DialogVisible:false,
        subDialogVisible:false,
      search: "",
      search_type:"",
      textBookName:'',
      subTextBookName:'',
      subImgSrc:'',
      trackName:"",
      comments:"",
   
      dialogList:[],
      subDialogList:[],
      textBookList: [
        {id: '01',imgSrc: require("../../../assets/images/textbook/textbook_1.png"),bookName: "汤姆森系列"},
        {id: '02',imgSrc: require("../../../assets/images/textbook/textbook_2.png"),bookName: "哈农系列"},
        {id: '03',imgSrc: require("../../../assets/images/textbook/textbook_3.png"),bookName: "拜厄系列"},
        {id: '04',imgSrc: require("../../../assets/images/textbook/textbook_4.png"),bookName: "车尔尼系列"},
        {id: '05',imgSrc: require("../../../assets/images/textbook/textbook_5.png"),bookName: "菲伯尔系列"},
        {id: '06',imgSrc: require("../../../assets/images/textbook/textbook_6.png"),bookName: "巴斯蒂安系列"},
        {id: '07',imgSrc: require("../../../assets/images/textbook/textbook_7.png"),bookName: "钢琴基础教程"},
        {id: '08',imgSrc: require("../../../assets/images/textbook/textbook_8.png"),bookName: "儿童初步钢琴"},
        {id: '09',imgSrc: require("../../../assets/images/textbook/textbook_9.png"),bookName: "新路径系列"},
        {id: '10',imgSrc: require("../../../assets/images/textbook/textbook_10.png"),bookName: "布格穆勒系列"},
        {id: '11',imgSrc: require("../../../assets/images/textbook/textbook_11.png"),bookName: "音阶、和弦、琶音"},
        {id: '12',imgSrc: require("../../../assets/images/textbook/textbook_12.png"),bookName: "快乐钢琴"},
        {id: '13',imgSrc: require("../../../assets/images/textbook/textbook_13.png"),bookName: "巴赫系列"},
        {id: '14',imgSrc: require("../../../assets/images/textbook/textbook_14.png"),bookName: "中国钢琴名曲"},
        {id: '15',imgSrc: require("../../../assets/images/textbook/textbook_15.png"),bookName: "更多教材"}
        
      ],
      examBookList:[
          {id: 'e01',imgSrc:require("../../../assets/images/exambook/exam_1.png"),bookName:"中国音协"},
          {id: 'e02',imgSrc:require("../../../assets/images/exambook/exam_2.png"),bookName:"中央音乐学院"},
          {id: 'e03',imgSrc:require("../../../assets/images/exambook/exam_3.png"),bookName:"中国音乐学院"},
          {id: 'e04',imgSrc:require("../../../assets/images/exambook/exam_4.png"),bookName:"上海音乐学院"},
          {id: 'e05',imgSrc:require("../../../assets/images/exambook/exam_5.png"),bookName:"上海钢琴定级曲目"},
          {id: 'e06',imgSrc:require("../../../assets/images/exambook/exam_6.png"),bookName:"英皇钢琴考级"},
          {id: 'e07',imgSrc:require("../../../assets/images/exambook/exam_7.png"),bookName:"广东省音协考级"},
          {id: 'e08',imgSrc:require("../../../assets/images/exambook/exam_8.png"),bookName:"浙江省音协考级"},
          {id: 'e09',imgSrc:require("../../../assets/images/exambook/exam_9.png"),bookName:"湖北武汉音乐学院"},
          {id: 'e10',imgSrc:require("../../../assets/images/exambook/exam_10.png"),bookName:"四川艺术水平考试"},
          {id: 'e11',imgSrc:require("../../../assets/images/exambook/exam_11.png"),bookName:"江苏省音协考级"},
          {id: 'e12',imgSrc:require("../../../assets/images/exambook/exam_12.png"),bookName:"星海音乐学院"},
          {id: 'e13',imgSrc:require("../../../assets/images/exambook/exam_13.png"),bookName:"南京艺术学院"},
      ],
     
      classSeriesList: [
        {id: '0101',imgSrc: require("../../../assets/images/seriebook/tms_1.png"),bookName: "约翰·汤普森简易钢琴教程1（小汤1）"},
        {id: '0102',imgSrc: require("../../../assets/images/seriebook/tms_2.png"),bookName: "约翰·汤普森简易钢琴教程2（小汤2"},
        {id: '0103',imgSrc: require("../../../assets/images/seriebook/tms_3.png"),bookName: "约翰·汤普森简易钢琴教程3（小汤3）"},
        {id: '0104',imgSrc: require("../../../assets/images/seriebook/tms_4.png"),bookName: "约翰·汤普森简易钢琴教程4（小汤4）"},
        {id: '0105',imgSrc: require("../../../assets/images/seriebook/tms_5.png"),bookName: "约翰·汤普森简易钢琴教程5（小汤5）"},
        {id: '0106',imgSrc: require("../../../assets/images/seriebook/tms_6.png"),bookName: "约翰·汤普森简易钢琴教程6（小汤6）"},
        {id: '0107',imgSrc: require("../../../assets/images/seriebook/tms_7.png"),bookName: "约翰·汤普森简易钢琴教程7（小汤7）"},
        {id: '0108',imgSrc: require("../../../assets/images/seriebook/tms_8.png"),bookName: "约翰·汤普森简易钢琴教程8（小汤8）"},
        {id: '0109',imgSrc: require("../../../assets/images/seriebook/tms_9.png"),bookName: "约翰·汤普森现代钢琴教程1（大汤1）"},
        {id: '0110',imgSrc: require("../../../assets/images/seriebook/tms_10.png"),bookName: "约翰·汤普森现代钢琴教程2（大汤2）"},
        {id: '0111',imgSrc: require("../../../assets/images/seriebook/tms_11.png"),bookName: "约翰·汤普森现代钢琴教程3（大汤3）"},
        {id: '0112',imgSrc: require("../../../assets/images/seriebook/tms_12.png"),bookName: "约翰·汤普森现代钢琴教程4（大汤4）"},
        {id: '0113',imgSrc: require("../../../assets/images/seriebook/tms_13.png"),bookName: "约翰·汤普森现代钢琴教程5（大汤5）"},
        {id: '0114',imgSrc: require("../../../assets/images/seriebook/tms_14.png"),bookName: "约翰·汤普森流行钢琴曲集（一）"},
        {id: '0116',imgSrc: require("../../../assets/images/seriebook/tms_15.png"),bookName: "约翰·汤普森流行钢琴曲集（二）"},
        {id: '0117',imgSrc: require("../../../assets/images/seriebook/tms_16.png"),bookName: "约翰·汤普森流行钢琴曲集（三）"},
        {id: '0118',imgSrc: require("../../../assets/images/seriebook/tms_17.png"),bookName: "约翰·汤普森流行钢琴曲集（四）"},
        {id: '0119',imgSrc: require("../../../assets/images/seriebook/tms_18.png"),bookName: "约翰·汤普森流行钢琴曲集（五）"}
      ],
      examSeriesList:[
           {id: 'e0101',imgSrc: require("../../../assets/images/seriebook/zyyyxy_1.png"),bookName: "中央音乐学院海内外考级教程1级-3级"},
           {id: 'e0102',imgSrc: require("../../../assets/images/seriebook/zyyyxy_2.png"),bookName: "中央音乐学院海内外考级教程4级-5级"},
           {id: 'e0104',imgSrc: require("../../../assets/images/seriebook/zyyyxy_4.png"),bookName: "中央音乐学院海内外考级教程6级"},
           {id: 'e0105',imgSrc: require("../../../assets/images/seriebook/zyyyxy_5.png"),bookName: "中央音乐学院海内外考级教程8级"},
           {id: 'e0106',imgSrc: require("../../../assets/images/seriebook/zyyyxy_6.png"),bookName: "中央音乐学院钢琴考级教程基本练习1级-6级"},
           {id: 'e0107',imgSrc: require("../../../assets/images/seriebook/zyyyxy_7.png"),bookName: "中央音乐学院钢琴考级教程演奏曲目1级-6级"},
           {id: 'e0108',imgSrc: require("../../../assets/images/seriebook/zyyyxy_8.png"),bookName: "中央音乐学院钢琴考级教程基本练习7级-9级"}
      ],
      trackList:[
          {id: '010101',trackName:'请弹吧（用右手）'},
          {id: '010102',trackName:'请弹吧（用左手）'},
          {id: '010103',trackName:'爷爷的大钟'},
          {id: '010104',trackName:'莫卡辛软皮舞鞋'},
          {id: '010105',trackName:'火车'},
          {id: '010106',trackName:'海军工兵'},
          {id: '010107',trackName:'小矮人进行曲'},
          {id: '010108',trackName:'小矮人舞曲'},
          {id: '010109',trackName:'玛丽有只小羔羊'},
          {id: '0101010',trackName:'伞兵'},
          {id: '0101011',trackName:'越过山坡'},
          {id: '0101012',trackName:'雷格泰姆舞'},
          {id: '0101013',trackName:'排钟'},
          {id: '0101014',trackName:'滑稽面孔'},
          {id: '0101015',trackName:'老麦克唐纳'},
          {id: '0101016',trackName:'拔河'},
          {id: '0101017',trackName:'教堂管风琴'},
          {id: '0101018',trackName:'扬基歌'},
          {id: '0101019',trackName:'把我带回弗吉妮故乡'},
          {id: '0101020',trackName:'摘棉花的老人'},
          {id: '0101021',trackName:'“自新大陆”交响曲'},
          {id: '0101022',trackName:'军号响'},
          {id: '0101023',trackName:'划呀划'},
          {id: '0101024',trackName:'有谁知道我的忧愁'},
          {id: '0101025',trackName:'乘黄包车'},
          {id: '0101026',trackName:'班卓琴手'},
          {id: '0101027',trackName:'公主圆舞曲'},
      ]
    };
  },
  methods: {
    textBook(bookName){
        this.textBookName = bookName
        this.dialogList = this.classSeriesList
        // this.textBookDialogVisible  = !textBookDialogVisible
    },
    examBook(bookName){
    this.textBookName = bookName
        this.dialogList = this.examSeriesList
    },
    subTextBook(bookName,imgSrc){
        this.subTextBookName = bookName
        this.subImgSrc = imgSrc
        this.subDialogList = this.trackList
    },
    releaseTrack(trackName){
        this.trackName = trackName
        this.$MessageBox.confirm(`<div class="messageBox">
            <h1>练习曲目</h1>
           <p> <i class="el-icon-notebook-2"></i><span>系列：</span>`+this.textBookName+`</p><p><span>书籍：</span>`+this.subTextBookName+`</p><p><span>曲名：</span>`+this.trackName+`</p>
            <h1>练习要求</h1>
          <textarea></textarea>
        </div>`, '', {
          confirmButtonText: '发送',
          cancelButtonText: '取消',
           dangerouslyUseHTMLString: true,

        }).then(() => {
        this.subDialogVisible = false
          this.$MessageBox.alert('布置成功!')
        }).catch(() => {
                 
        });
    }
  },
};
</script>
