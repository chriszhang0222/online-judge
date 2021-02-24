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
import ProblemSection from "@/components/ProblemSection";
export default {
  name: "Problems",
  components:{ProblemSection},
  data(){
    return{
      problems: [
        {
          'name': 'Two Sum',
          'desc': 'This is two sum',
          'diff': 'easy',
          'id': 1
        },
        {
          'name': 'Three Sum',
          'desc': 'This is three sum',
          'diff': 'medium',
          'id': 2
        }
      ]
    }
  },
  methods:{
    test(){
      console.log("hello")
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