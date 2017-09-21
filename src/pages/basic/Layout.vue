<template>
    <div>
        <h4>基础布局</h4>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>

        <h4>分栏布局</h4>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>

        <h4>分栏偏移</h4>
        <el-row>
            <el-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>

        <h4>对齐方式</h4>
        <el-row type="flex" class="row-bg">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>

        <h4>响应式布局</h4>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: 'Layout'
    }

</script>

<style scoped>
    .bg-purple {
        background: #BBB;
    }

    .bg-purple-light {
        background: #DDD;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f3f3f3;
    }

</style>