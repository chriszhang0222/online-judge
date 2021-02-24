<template>
  <div class="list-group-item">
    <el-row>
      <el-col :span="2">
        <span class="diff-block" v-bind:class="problem.diff">{{ problem.diff.toUpperCase() }}</span>
      </el-col>
      <el-col :span="22" class="pull-left">
        <strong class="problem-title">{{ index }} | {{ problem.name }}</strong>
      </el-col>
    </el-row>
    <el-row class="margin-top20">
      <a :href="'/problem/' + problem.id">
        <el-card shadow="hover">
          <el-row>
            <el-col :span="22">
              <div class="pull-left">{{ problem.desc }}</div>
            </el-col>
            <el-col :span="2">
              <i class="el-icon-arrow-right"></i>
            </el-col>
          </el-row>

        </el-card>
      </a>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "ProblemSection",
    props: {
      problem: {
        type: Object,
        required: true
      },
      index:{
        type: Number
      }
    }

  }
</script>

<style scoped>
.list-group-item{
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.diff-block {
  display: block;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 5px;
  color: white;
  font-weight: bolder;
}

.problem-title{
  font-size: 20px;
  padding: 10px 10px;
}

.easy{
  background-color: #14a5f3;
}

.medium {
  background-color: #eae722;
}

.hard {
  background-color: #e91188;
}

.super-hard {
  background-color: #d10000;
}

</style>