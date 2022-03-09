<template>
  <div class="information_container">
    <el-row
      :gutter="10"
      style="width:100%;display: flex;
  justify-content: space-evenly;"
    >
      <el-col
        :xs="20"
        :sm="20"
        :md="20"
        :lg="22"
        :xl="22"
      >
        <el-card class="ability_ranking">
          <h1>学生信息</h1>
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
              label="进度"
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

</style>
<script>
export default {
  data () {
    return {
      stuList: [
        
      ],
      tableheight:600
    };
  },
  methods: {
    openDetails (row) {
      const { id } = row
      let add=this.stuList[id]
      console.log(add)
      this.$router.push({path:"/manager/studentDetails/" + id, query:add
                      })
    }
  },
    mounted() {
      if(this.$store.state.student_information_data.length==0){
        this.$store.commit('radom_student_information_data');
      }
      this.stuList=this.$store.state.student_information_data;
     
    },
 
};
</script>
