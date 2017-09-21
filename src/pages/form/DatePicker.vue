<template>
    <div style="margin-bottom: 200px">

        <h4>switch开关</h4>
        <el-switch v-model="switchValue" on-text="ON" off-text="OFF" on-color="#13ce66" off-color="#ff4949"></el-switch>

        <h4>slider滑块</h4>
        <el-slider v-model="sliderValue" style="width:50%"></el-slider>

        <h4>datePicker日期选择器</h4>
        <el-date-picker v-model="dateValue"></el-date-picker>
        <el-date-picker v-model="dateValue2" type="daterange"></el-date-picker>

        <h4>upload上传</h4>
        <el-upload :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-upload drag multiple action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <h4>rate评分</h4>
        <el-rate v-model="rateValue" show-text></el-rate>
        <h4>colorPicker颜色选择器</h4>
        <el-color-picker v-model="colorValue" show-alpha></el-color-picker>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                switchValue: true,
                sliderValue: 20,
                dateValue: '',
                dateValue2: '',
                fileList: [],
                rateValue: null,
                colorValue: 'rgba(19, 206, 102, 0.8)',
            }
        },
        mounted() {

        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
        }
    }
</script>

<style>

</style>