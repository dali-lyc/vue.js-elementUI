<template>
    <div style="margin-bottom: 200px">

        <h4>breadcrumb面包屑</h4>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/manage'}">活动管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/list'}">活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>

        <h4>dropdown下拉菜单</h4>
        <el-dropdown @command="handleCommand">
            <el-button type="primary">更多菜单<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                <el-dropdown-item command="双皮奶">双皮奶</el-dropdown-item>
                <el-dropdown-item command="蚵仔煎">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>

</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
            },
        }
    }

</script>

<style>

</style>