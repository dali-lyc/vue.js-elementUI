<template>
    <div style="margin-bottom: 200px">
        <h4>navMenu导航菜单</h4>
        <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">菜单1</el-menu-item>
                <el-menu-item index="2-2">菜单2</el-menu-item>
                <el-menu-item index="2-3">菜单3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
        <br>
        <el-menu theme="dark" default-active="1" @open="handleOpen" @close="handleClose" style="width: 200px">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item index="1-1">菜单1</el-menu-item>
                <el-menu-item index="1-2">菜单2</el-menu-item>
                <el-menu-item index="1-3">菜单3</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>导航二</template>
                <el-menu-item index="2-1">菜单1</el-menu-item>
                <el-menu-item index="2-2">菜单2</el-menu-item>
                <el-menu-item index="2-3">菜单3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
        <br>
        <el-radio-group v-model="isCollapse" fill="#324057" text-color="#a4aebd" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="el-menu-vertical" theme="dark" default-active="1" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i><span slot="title">导航一</span></template>
                <el-menu-item index="1-1">菜单1</el-menu-item>
                <el-menu-item index="1-2">菜单2</el-menu-item>
                <el-menu-item index="1-3">菜单3</el-menu-item>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i><span slot="title">导航二</span></el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i><span slot="title">导航三</span></el-menu-item>
        </el-menu>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                isCollapse: true,
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }

</script>

<style>
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
        min-height: 300px;
    }
    .el-menu-vertical.el-menu--collapse {
        width: 60px;
        min-height: 300px;
    }

</style>