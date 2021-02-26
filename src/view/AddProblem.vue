<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-chat-line-round"></i>Add Problem
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card>
        <el-form :model=form :rules="rules" ref="form" label-width="100px">
          <el-row :gutter="20">
            <el-form-item label="Problem Name" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="20">
            <el-form-item label="Difficulty" prop="diff">
              <el-select v-model="form.diff" placeholder="Please select difficulty" style="width: 100%">
                <el-option label="Easy" value="easy"></el-option>
                <el-option label="Medium" value="medium"></el-option>
                <el-option label="Hard" value="hard"></el-option>
                <el-option label="Super Hard" value="super-hard"></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row :gutter="20">
            <el-form-item label="Problem Description" prop="desc">
              <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder=""
                  v-model="form.desc"/>
            </el-form-item>
          </el-row>
        <el-row>
          <el-button type="primary" @click="submitForm">Submit</el-button>
        </el-row>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import {Tools} from "@/utils/Tools";
import {AddProblem} from "@/api/problemapi";
import {Toast} from "@/utils/Toast";

export default {
  name: "AddProblem",
  data(){
    return {
      form: {
        name: '',
        desc: '',
        diff: '',
      },
      rules: {
        name: [
          { required: true, trigger: 'blur'}
        ],
        diff: [
          { required: true }
        ],
        desc: [
          { required: true }
        ]
      }
    }
  },
  methods: {
    submitForm(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      });
      let param = new FormData()
      param.append("name", this.form.name)
      param.append("diff", this.form.diff)
      param.append("desc", this.form.desc)
      param.append("id", Tools.uuid(10))
      AddProblem(param, (res)=>{
        if(res.status === 200){
          Toast.success("Successfully add problem")
          this.form = {
            name: '',
            desc: '',
            diff: '',
          }
        }else{
          Toast.error(res.data.data.message)
        }
      })

    }
  }
}
</script>

<style scoped>

</style>