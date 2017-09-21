<template>
    <div style="margin-bottom: 200px">

        <h4>tabs标签页</h4>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="1">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="2">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="3">角色管理</el-tab-pane>
            <el-tab-pane label="资源管理" name="4">资源管理</el-tab-pane>
        </el-tabs>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                isCollapse: true,
                activeName: '1',
                active: 1,
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
        }
    }

</script>

<style>

</style>