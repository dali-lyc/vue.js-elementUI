<template>
    <div style="margin-bottom: 200px">
        <h4>行内表单</h4>
        <el-form :inline="true" v-model="formInline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region">
                    <el-option label="--请选择--" value=""></el-option>
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <h4>表单验证</h4>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region">
                    <el-option label="--请选择--" value=""></el-option>
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="4">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" v-model="ruleForm.date1" style="width: 80%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="1">-</el-col>
                <el-col :span="4">
                    <el-form-item prop="date2">
                        <el-time-picker type="fixed-time" v-model="ruleForm.date2" style="width: 80%"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题" name="type"></el-checkbox>
                    <el-checkbox label="品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio :label="1">线上品牌</el-radio>
                    <el-radio :label="2">线下场地</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: 1,
                    desc: '',
                },
                rules: {
                    name: [{
                        required: true, message: '请输入', trigger: 'blur'
                    }, {
                        min: 3, max: 5, message: '字符长度3~5', trigger: 'blur'
                    }],
                    region: [{
                        required: true, message: '请选择', trigger: 'change'
                    }],
                    date1: [{
                        type: 'date', required: true, message: '请选择', trigger: 'change'
                    }],
                    date2: [{
                        type: 'date', required: true, message: '请选择', trigger: 'change'
                    }],
                    type: [{
                        type: 'array', required: true, message: '请选择', trigger: 'change'
                    }],
                    resource: [{
                        type: 'number', required: true, message: '请选择', trigger: 'change'
                    }],
                    desc: [{
                        required: true, message: '请填写', trigger: 'blur'
                    }]
                },
            }
        },
        mounted() {

        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error');
                        return false;
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style>

</style>