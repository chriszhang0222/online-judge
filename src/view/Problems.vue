<template>
    <div>
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <i class="el-icon-pie-chart"></i>Problems
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-card shadow="hover">
          <div v-for="(item, index) in problems" :key="index">
            <ProblemSection
            :index="index"
            :problem="item"></ProblemSection>
          </div>
        <div class="block margin-top20">
          <el-pagination
              layout="prev, pager, next"
              :total="50">
          </el-pagination>
        </div>

      </el-card>
    </div>
</template>

<script>
import {getProblem} from '@/api/problemapi'
import ProblemSection from "@/components/ProblemSection";
import {Toast} from "@/utils/Toast";

export default {
  name: "Problems",
  components:{ProblemSection},
  mounted() {
    getProblem({'page': 1, 'pnum': 10}, this.getProblemCallBack)
  },
  data(){
    return{
      problems: [
      ]
    }
  },
  methods:{
    test(){
      console.log("hello")
    },
    getProblemCallBack(res){
      if(res.status === 200){
        let data = res.data
        this.problems = data.data
      }else{
        Toast.error('Can not get problem list from server')
      }
    }
  }

}
</script>

<style scoped>
.diff-block {
  display: block;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 5px;
  color: white;
  font-weight: bolder;
}



</style>