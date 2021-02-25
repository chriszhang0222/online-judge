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
        <el-col :span="16" class="left-border">
          {{ value }}
            <el-row class="place-left">
              <el-select v-model="value" placeholder="请选择" @change="onChange">
                <el-option
                    v-for="item in options"
                    :key="item.name"
                    :label="item.name"
                    :value="item.path">
                </el-option>
              </el-select>
              <el-button>Reset</el-button>
            </el-row>

            <el-row class="margin-top20">
              <div class="ace-container">
                  <div class="ace-editor" ref="ace"></div>
              </div>
            </el-row>
            <el-row class="margin-top20">
              <el-button type="success" class="pull-left" @click="submitResult">Submit</el-button>
            </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import {getProblemDetail} from "@/api/problemapi";
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/ext-language_tools'
export default {
  name: "ProblemDetail",
  mounted() {
    this.aceEditor = ace.edit(
        this.$refs.ace, {
          maxLines: 40,
          minLines: 40,
          fontSize: 14,
          mode: this.modepath,
          theme: this.themepath,
          tabSize: 4
        }
    )
    this.aceEditor.setOptions({
      enableSnippets: true,
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true
    })

  },
  data(){
    return{
      aceEditor: null,
      modepath: 'ace/mode/javascript',
      themepath: 'ace/theme/monokai',
      option:{},
      problem: {
        'id': 1,
        'name': 'Two Sum',
        'Diff': 'easy',
        'desc': 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.'
      },
      options: [
        {
          name: 'JavaScript',
          path: 'ace/mode/javascript',
        },
        {
          name: 'Python',
          path: 'ace/mode/python'
        },
        {
          name: 'Java',
          path: 'ace/mode/java'
        },
        {
          name: 'GoLang',
          path: 'ace/mode/golang'
        },
        {
          name: 'C++',
          path: 'ace/mode/c_cpp'
        }
      ],
      values: [
          ''
      ],
      value:'ace/mode/javascript',
    }
  },
  methods: {
    setProblemDetail(){

    },
    onChange(val){
      this.aceEditor.getSession().setMode(val)
    },
    submitResult(){
      let value = this.aceEditor.getSession().getValue()
      console.log(value)
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

.left-border{
  border-left: 1px solid #ddd;
}

</style>