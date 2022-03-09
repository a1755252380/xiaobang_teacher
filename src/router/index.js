import Vue from 'vue'
import VueRouter from 'vue-router'


//教师端
import Teacher from '../components/Teacher.vue'
import TeacherHome from '../views/teacher/Home.vue'
import Login from '../views/Login.vue'
import tMessage from '../views/teacher/Message.vue'
import tInformation from '../views/teacher/Information.vue'
import StudentDetails from '../views/teacher/studentDetails.vue'
import tManage from '../views/teacher/manage/Manage.vue'
import tCorrectionDetails from '../views/teacher/manage/CorrectionDetails.vue'
import tArrangement from '../views/teacher/manage/Arrangement.vue'


//管理端
import Manager from '../components/Manager.vue'
import ManagerHome from '../views/manager/Home.vue'
import mMessage from '../views/manager/Message.vue'
import msInformation from '../views/manager/sInformation.vue'
import mtInformation from '../views/manager/tInformation.vue'
import TeacherDetails from '../views/manager/teacherDetails.vue'
import mManage from '../views/manager/manage/Manage.vue'
import mCorrectionDetails from '../views/manager/manage/CorrectionDetails.vue'
import mArrangement from '../views/manager/manage/Arrangement.vue'
import studytop from "../views/manager/study_top.vue"
import MStudentDetails from '../views/manager/studentDetails.vue'


import Test from '../views/test.vue'
import Test2 from '../views/test2.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/test',component:Test},
  { path: '/test2',name:'test2',component:Test2},
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login},
  { path: '/manager', component: Manager,redirect:'/manager/home',children: [
    { path: '/manager/home', component: ManagerHome },
    { path: '/manager/message', component: mMessage },
    { path: '/manager/sInformation', component: msInformation },
    { path: '/manager/tInformation', component: mtInformation },
    { path: '/manager/teacherDetails/:id', component: TeacherDetails },
    {
      path: '/manager/manage',
      component: mManage,
    },
    { path: '/manager/correctionDetails/:id', component: mCorrectionDetails },
    { path: '/manager/arrangement/:id', component: mArrangement },
    { path: "/manager/studytop", component: studytop },
    { path: '/manager/studentDetails/:id', component: MStudentDetails },
  ]},
  {
    path: '/teacher',
    component: Teacher,
    redirect: '/teacher/home',
    children: [
      { path: '/teacher/home', component: TeacherHome },
      { path: '/teacher/message', component: tMessage },
      // { path: '/showData', component: showData },
      { path: '/teacher/information', component: tInformation },
      { path: '/teacher/studentDetails/:id', component: StudentDetails },
      {
        path: '/teacher/manage',
        component: tManage,
      },
      { path: '/teacher/correctionDetails/:id', component: tCorrectionDetails },
      { path: '/teacher/arrangement/:id', component: tArrangement },

    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
