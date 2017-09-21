<template>
    <div style="margin-bottom: 200px">
        <h4>动态增减表单</h4>
        <el-form :model="dynamicForm" ref="dynamicForm">
            <el-form-item label="邮箱" prop="email" :rules="[{required: true, message: '请输入邮箱地址', trigger: 'blur'}, {type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur,change'}]">
                <el-input v-model="dynamicForm.email"></el-input>
            </el-form-item>
            <el-form-item v-for="(domain, index) in dynamicForm.domains" :label="'域名：' + index" :key="domain.key"
                          :prop="'domains.' + index + '.value'" :rules="{required: true, message: '域名不能为空', trigger: 'blur'}">
                <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm2('dynamicForm')">提交</el-button>
                <el-button @click="addDomain">新增</el-button>
                <el-button @click="resetForm2('dynamicForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                dynamicForm: {
                    domains: [{
                        value: '',
                    }],
                    email: '',
                }
            }
        },
        mounted() {

        },
        methods: {
            submitForm2(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error');
                        return false;
                    }
                });
            },
            resetForm2(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicForm.domains.indexOf(item);
                if (index !== -1) {
                    this.dynamicForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }

        }
    }
</script>

<style>

</style>