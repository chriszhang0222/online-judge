<template>
  <div>
    <el-card>
      <el-row :gutter=30>
        <el-col :span="8" class="pull-left">
            <h2>{{problem.id}}.{{problem.name }}
              <span class="diff-block" v-bind:class="problem.Diff" style="float: right;font-size: 14px;margin-top: 5px">{{ problem.Diff.toUpperCase() }}</span>
            </h2>
          <hr>
            <p>{{problem.desc}}</p>
        </el-col>
        <el-col :span="16">
          {{ value }}
            <el-row class="place-left">
              <el-select v-model="value" placeholder="请选择" @change="onChange">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
              <el-button>Reset</el-button>
            </el-row>
            <el-row class="margin-top20">
              <MonacoEditor
                  ref="editor"
                  class="margin-top50"
                  style="text-align: left"
                  height="400"
                  :language=value
                  :options="option"
              >
              </MonacoEditor>
            </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import {getProblemDetail} from "@/api/problemapi";
import MonacoEditor from 'vue-monaco-editor'
export default {
  name: "ProblemDetail",
  components: {MonacoEditor},
  mounted() {
    console.log(this.$route.params.id)
  },
  data(){
    return{
      option:{},
      problem: {
        'id': 1,
        'name': 'Two Sum',
        'Diff': 'easy',
        'desc': 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.'
      },
      options: [{
        value: 'python',
        label: 'Python'
      }, {
        value: 'java',
        label: 'Java'
      }, {
        value: 'javascript',
        label: 'Javascript'
      },{
        value:'c++',
        label: 'C++'
      }],
      value:'c++',
    }
  },
  methods: {
    setProblemDetail(){

    },
    onChange(val){
      alert(val)
      this.option = {
        language: val
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