import { Math } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //学生姓名
    student_name:['云凌可','郎朝剑','余梦茂','凌瑛昼','吕映冉','涂翰毅','魏争博','周放大','凌松帆','文驹治',
      '柯独杜','李锐汉','严锋滕','李恩妙','元骞振','杨舟察','连解淦','黎舒旺','张豆焕','卢帆新',
      '华章滕','林包显','于泰哲','盛枫瑾','侯善稚','薛敬文','文子隐','俞贡延','韦烽凌','关戚栾',
      '袁修纯', '柯河舍', '郭俊立', '岑希伙', '樊辰博', '古驰', '夏思徽', '陶旭笙', '张准辰', '邢编',
      '冬儿','易梦','惜雪','宛海','之柔','夏青','亦瑶','妙菡','春竹','痴梦','紫蓝','晓巧',
 
      '幻柏','元风','冰枫','访蕊','南春','芷蕊','凡蕾','凡柔','安蕾','天荷','含玉','书兰',
       
      '雅琴','书瑶','春雁','从安','夏槐','念芹','怀萍','代曼','幻珊','谷丝','秋翠','白晴',
       
      '海露','代荷','含玉','书蕾','听白','访琴','灵雁','秋春','雪青','乐瑶','含烟','涵双',],
    //老师姓名
    teacher_name: [
      '王颢锵','简邦余','云羿谆','云悠洋','穆影焱','龙绍焱','胡睿','岳叔华','路留时','尤介辉',
'周谷佟','林文冲','丁倍卫','秦树琪','卢邦楠','张枫震','赵勋吟','姬霏','梁汐季','张广房',
'岑誉胜','雷亚思','梁尉寒','王悟营','韦鲁郎','蔡粮鲜','李具匡','何望','谭满铿','穆漂徽',
'卫荷','夏落兴','甘风力','吴军卓','谭灶声','许欣英','穆中管','武邦致','谢雄民','钱锦宏'
    ],
    //排行榜数据
    student_information_data: [
     
    ],
    //课程源数据
    course_data: [
      {id: '0101',bookName: "约翰·汤普森简易钢琴教程1（小汤1）"},
        {id: '0102',bookName: "约翰·汤普森简易钢琴教程2（小汤2"},
        {id: '0103',bookName: "约翰·汤普森简易钢琴教程3（小汤3）"},
        {id: '0104',bookName: "约翰·汤普森简易钢琴教程4（小汤4）"},
        {id: '0105',bookName: "约翰·汤普森简易钢琴教程5（小汤5）"},
        {id: '0106',bookName: "约翰·汤普森简易钢琴教程6（小汤6）"},
        {id: '0107',bookName: "约翰·汤普森简易钢琴教程7（小汤7）"},
        {id: '0108',bookName: "约翰·汤普森简易钢琴教程8（小汤8）"},
        {id: '0109',bookName: "约翰·汤普森现代钢琴教程1（大汤1）"},
        {id: '0110',bookName: "约翰·汤普森现代钢琴教程2（大汤2）"},
        {id: '0111',bookName: "约翰·汤普森现代钢琴教程3（大汤3）"},
        {id: '0112',bookName: "约翰·汤普森现代钢琴教程4（大汤4）"},
        {id: '0113',bookName: "约翰·汤普森现代钢琴教程5（大汤5）"},
        {id: '0114',bookName: "约翰·汤普森流行钢琴曲集（一）"},
        {id: '0116',bookName: "约翰·汤普森流行钢琴曲集（二）"},
        {id: '0117',bookName: "约翰·汤普森流行钢琴曲集（三）"},
        {id: '0118',bookName: "约翰·汤普森流行钢琴曲集（四）"},
      { id: '0119', bookName: "约翰·汤普森流行钢琴曲集（五）" },
      {id: 'e0101',bookName: "中央音乐学院海内外考级教程1级-3级"},
      {id: 'e0102',bookName: "中央音乐学院海内外考级教程4级-5级"},
      {id: 'e0104',bookName: "中央音乐学院海内外考级教程6级"},
      {id: 'e0105',bookName: "中央音乐学院海内外考级教程8级"},
      {id: 'e0106',bookName: "中央音乐学院钢琴考级教程基本练习1级-6级"},
      {id: 'e0107',  bookName: "中央音乐学院钢琴考级教程基本练习7级-9级" },
      {id: '010101', bookName:'请弹吧（用右手）'},
      {id: '010102', bookName:'请弹吧（用左手）'},
      {id: '010103', bookName:'爷爷的大钟'},
      {id: '010104', bookName:'莫卡辛软皮舞鞋'},
      {id: '010105', bookName:'火车'},
      {id: '010106', bookName:'海军工兵'},
      {id: '010107', bookName:'小矮人进行曲'},
      {id: '010108', bookName:'小矮人舞曲'},
      {id: '010109', bookName:'玛丽有只小羔羊'},
      {id: '0101010', bookName:'伞兵'},
      {id: '0101011', bookName:'越过山坡'},
      {id: '0101012', bookName:'雷格泰姆舞'},
      {id: '0101013', bookName:'排钟'},
      {id: '0101014', bookName:'滑稽面孔'},
      {id: '0101015', bookName:'老麦克唐纳'},
      {id: '0101016', bookName:'拔河'},
      {id: '0101017', bookName:'教堂管风琴'},
      {id: '0101018', bookName:'扬基歌'},
      {id: '0101019', bookName:'把我带回弗吉妮故乡'},
      {id: '0101020', bookName:'摘棉花的老人'},
      {id: '0101021', bookName:'“自新大陆”交响曲'},
      {id: '0101022', bookName:'军号响'},
      {id: '0101023', bookName:'划呀划'},
      {id: '0101024', bookName:'有谁知道我的忧愁'},
      {id: '0101025', bookName:'乘黄包车'},
      {id: '0101026', bookName:'班卓琴手'},
      {id: '0101027', bookName:'公主圆舞曲'},
    ],
    //学习排行榜
    manager_top: [],
    //课程数据
    class_data: [],
    teacher_class: [],
    s_random_class: [],
    t_random_class:[],
    teacher_information_data:[]
  },
  mutations: {

    //学生信息模拟
    radom_student_information_data (state,num) { 
      if (state.student_information_data.length!=0) {
        return
      }
      for (let i = 1; i <=57; i++) {
        // let img = "../assets/images/student/" + i + ".jpg";
        let da = {
          id: i-1,
          imgSrc:require("../assets/images/student/"+i+".jpg"),
          
          name: state.student_name[i],
          score: 50 +Math.floor(Math.random()*51),
          isPlay: true,
        };
        state.student_information_data.push(da)
      }
      this.commit("radom_student_information_data2")
    },
    radom_student_information_data2 (state,num) { 
    
      for (let i = 58; i <= 523; i++) {
        // let img = "../assets/images/student/" + i + ".jpg";
        let da = {
          id: i-1,
          imgSrc:require("../assets/images/student/"+parseInt(1+Math.random()*56)+".jpg"),
          
          name: state.student_name[Math.floor(Math.random()*state.student_name.length+1)],
          score: 50 +Math.floor(Math.random()*51),
          isPlay: true,
        };
        state.student_information_data.push(da)
      }
    },

    //学生排行榜模拟
    radom_manager_top(state,num) { 
      let n = 100
      let z = 1
      let namenum =1
      if (state.manager_top.length!=0) {
        return
      }
      for (let i = 1; ; i++) {
        // let img = "../assets/images/student/" + i + ".jpg";
        if (state.manager_top.length>=10) {
          break
        }
        let namenum2 = parseInt(Math.random() * state.student_name.length)
        if (namenum2==namenum) {
          continue
        }
        let a = 80 +Math.floor(Math.random()*21)
        if (a <= n) {
          n = a
          namenum=namenum2
          let da = {
            id: z-1,
            imgSrc:require("../assets/images/student/"+z+".jpg"),
            
            name: state.student_name[namenum2],
            score: a,
            isPlay: true,
          };
          state.manager_top.push(da)
          z++
        } else { 
           
            continue
        }
        
       
      }
    },
    //课程数据模拟
    random_class (state) { 
      if (state.class_data.length!=0) {
        return
      }
      let place=['课室c1-108','课室c2-208','课室c3-305','课室b1-101','课室b1-102','课室b1-301','课室a1-307','课室a1-204','课室a1-103']
      let teachernum = 0
      
      let time = new Date().getTime()
      let placenum=parseInt(Math.random()*place.length)
      for (let index = 1; index <= parseInt(Math.random() * state.course_data.length); index++) {
        let teacher = parseInt(Math.random() * state.teacher_name.length)
        if (teacher==teachernum) {
          continue
        }
        let da = {
          id: index,
          time: moment(new Date(time)).format('MM-DD HH:mm')+"-"+moment(new Date(time+2700000)).format('HH:mm'),
          class:state.course_data[parseInt(Math.random() * state.course_data.length)].bookName,
          teacher: state.teacher_name[teacher],
         place:place[placenum]
        };
        time=time+3300000
        state.class_data.push(da)
      }
    },
     //信息页课程数据模拟
     rs_random_class (state) { 
      let place=['课室c1-108','课室c2-208','课室c3-305','课室b1-101','课室b1-102','课室b1-301','课室a1-307','课室a1-204','课室a1-103']
      let teachernum = 0
      let time = new Date().getTime()
       let placenum = parseInt(Math.random() * place.length)
       state.s_random_class=[]
      for (let index = 1; index <= 4; index++) {
        let teacher = parseInt(Math.random() * state.teacher_name.length)
        if (teacher==teachernum) {
          continue
        }
        let da = {
          id: index,
          time: moment(new Date(time)).format('MM-DD HH:mm')+"-"+moment(new Date(time+2700000)).format('HH:mm'),
          class:state.course_data[parseInt(Math.random() * state.course_data.length)].bookName,
          teacher: state.teacher_name[teacher],
         place:place[placenum]
        };
        time=time+3300000
        state.s_random_class.push(da)
      }
    },
    //教师信息
    radom_teacher_information_data (state,num) { 
      if (state.teacher_information_data.length!=0) {
        return
      }
      for (let i = 1; i <= 17; i++) {
        // let img = "../assets/images/student/" + i + ".jpg";
        let da = {
          id: i-1,
          imgSrc:require("../assets/images/teacher/"+i+".jpg"),
          
          name: state.teacher_name[i],
          score: parseInt(Math.random()*100),
          isPlay: true,
        };
        
       state.teacher_information_data.push(da)
      }
      
      this.commit("radom_teacher_information_data2")
    },
    radom_teacher_information_data2 (state,num) { 
     
      for (let i = 18; i <= 67; i++) {
        // let img = "../assets/images/student/" + i + ".jpg";
        let da = {
          id: i-1,
          imgSrc:require("../assets/images/teacher/"+parseInt(1+Math.random()*16)+".jpg"),
          
          name: state.teacher_name[parseInt(Math.random()*state.teacher_name.length)],
          score: parseInt(Math.random()*100),
          isPlay: true,
        };
        state.teacher_information_data.push(da)
      }
    },

    //教师课程数据模拟
    random_teacher_class (state) { 
      if (state.teacher_class.length!=0) {
        return
      }
      let place=['课室c1-108','课室c2-208','课室c3-305','课室b1-101','课室b1-102','课室b1-301','课室a1-307','课室a1-204','课室a1-103']
      let teachernum = 0
      let placenum = parseInt(Math.random() * place.length)
      let time = new Date().getTime()
      state.teacher_class=[]
      console.log(time)
      for (let index = 1; index <= parseInt(Math.random() * state.course_data.length); index++) {
        let teacher = parseInt(Math.random() * state.teacher_name.length)
        if (teacher==teachernum) {
          continue
        }
       
        let student = ""
        let a=parseInt(1 + Math.random() * 4)
        for (let i = 0; i < a; i++){ 
          if (i<a&&i!=0) {
            student +=","
          }
          student += state.student_name[parseInt(Math.random() * state.student_name.length)]
        }
        let da = {
          id: index,
          time: moment(new Date(time)).format('MM-DD HH:mm')+"-"+moment(new Date(time+2700000)).format('HH:mm'),
          class:state.course_data[parseInt(Math.random() * state.course_data.length)].bookName,
          teacher: state.teacher_name[teacher],
          place: place[placenum],
         student:student
        };
        time=time+3300000
        state.teacher_class.push(da)
      }
    },

    //教师个人主页信息模拟
    //课程
    ts_random_class (state) { 
      state.t_random_class=[]
      let place=['课室c1-108','课室c2-208','课室c3-305','课室b1-101','课室b1-102','课室b1-301','课室a1-307','课室a1-204','课室a1-103']
      let teachernum = 0
      let placenum = parseInt(Math.random() * place.length)
      let time = new Date().getTime()
     
      console.log(time)
      for (let index = 1; index <= parseInt(Math.random() * state.course_data.length); index++) {
        let teacher = parseInt(Math.random() * state.teacher_name.length)
        if (teacher==teachernum) {
          continue
        }
       
        let student = ""
        let a=parseInt(1 + Math.random() * 4)
        for (let i = 0; i < a; i++){ 
          if (i<a&&i!=0) {
            student +=","
          }
          student += state.student_name[parseInt(Math.random() * state.student_name.length)]
        }
        let da = {
          id: index,
          time: moment(new Date(time)).format('MM-DD HH:mm')+"-"+moment(new Date(time+2700000)).format('HH:mm'),
          class:state.course_data[parseInt(Math.random() * state.course_data.length)].bookName,
          teacher: state.teacher_name[teacher],
          place: place[placenum],
         student:student
        };
        time=time+3300000
        state.t_random_class.push(da)
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
