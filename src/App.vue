<template>
    <div id="app">
        <el-row class="container">

            <!--头部-->
            <el-col :span="24" class="topbar-wrap">
                <div class="topbar-logo topbar-btn">
                    <a href="/"><i class="fa fa-pie-chart" style="margin-top: 5px; font-size: 24px; color: #dea726"></i></a>
                </div>
                <div class="topbar-title topbar-btn">
                    <a href="/" style="text-decoration: none"><span style="color: #fff">后台管理系统</span></a>
                </div>
                <!--展开折叠开关-->
                <div class="menu-toggle" @click.prevent="collapse">
                    <i class="el-icon-d-arrow-left" v-show="!collapsed"></i>
                    <i class="el-icon-d-arrow-right" v-show="collapsed"></i>
                </div>
                <div class="topbar-account topbar-btn">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link userinfo-inner">
                          您好，{{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <a href="#" style="text-decoration: none">个人信息</a>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <a href="#" style="text-decoration: none">修改密码</a>
                            </el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </el-col>

            <!--中间-->
            <el-col :span="24" class="main">

                <!--左侧导航栏-->
                <aside :class="collapsed?'menu-collapsed':'menu-expanded'">

                    <el-menu class="el-menu-vertical" theme="dark" default-active="1" @open="handleOpen" @close="handleClose" :collapse="collapsed" router>
                        <template v-for="(item, index) in menu">
                            <el-submenu v-if="item.children" :index="index + ''">
                                <template slot="title"><i :class="['fa','fa-'+item.icon]"></i><span slot="title" style="padding-left: 10px">{{item.title}}</span></template>
                                <el-menu-item v-for="subItem in item.children" :key="subItem.href" :index="subItem.href">
                                    {{subItem.title}}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-if="!item.children" :index="item.href" class="el-submenu__title">
                                <i :class="['fa','fa-'+item.icon]"></i><span slot="title" style="padding-left: 10px">{{item.title}}</span>
                            </el-menu-item>
                        </template>
                    </el-menu>

                </aside>

                <!--右侧内容区-->
                <section class="content-container">
                    <el-col :span="24" class="content-wrapper">
                        <router-view></router-view>
                    </el-col>
                </section>

            </el-col>

        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    import menu from './router/menu.js'

    export default {
        name: 'app',
        data () {
            return {
                collapsed: false,
                username: '王小虎',
                menu,
            }
        },
        methods: {
            handleOpen() {
                //console.log('handleopen');
            },
            handleClose() {
                //console.log('handleclose');
            },
            //折叠导航栏
            collapse: function () {
                this.collapsed = !this.collapsed;
            },
            showMenu(i, status){
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
            },
            logout(){
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('access-user');
                    _this.$router.push('/login');
                }).catch(() => {
                });
            },
        },
    }
</script>

<style scoped>

    @import '../node_modules/font-awesome/css/font-awesome.css';

    .el-menu {
        width: 180px;
    }

    .el-menu-item, .el-submenu__title {
        color: #fff;
    }

    .el-submenu__title:hover {
        background-color: #00C1DE;
    }

    .el-submenu .el-menu-item {
        background-color: #333744;
        min-width: 180px;
    }

    .el-submenu .el-menu-item:hover {
        background-color: #4A5064
    }

    .el-submenu .el-menu-item.is-active, .el-menu-item.is-active,
    .el-submenu .el-menu-item.is-active:hover, .el-menu-item.is-active:hover {
        background-color: #00C1DE;
        color: #fff;
    }

    .el-menu .iconfont {
        vertical-align: baseline;
        margin-right: 6px;
    }

    .warp-breadcrum {
        padding: 10px 0px;
        border-bottom: 1px solid #efefef;
    }

    .warp-main {
        padding-top: 20px;
    }

    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        left: 0px;
    }

    .topbar-wrap {
        height: 50px;
        line-height: 50px;
        background: #373d41;
        padding: 0px;
    }

    .topbar-btn {
        color: #fff;
    }

    .topbar-btn:hover {
        background-color: #4A5064;
    }

    .topbar-logo {
        float: left;
        text-align: center;
        width: 49px;
        /*border-right: 1px solid #000;*/
        line-height: 56px;
    }

    .topbar-title {
        float: left;
        text-align: left;
        width: 130px;
        border-right: 1px solid #000;
    }

    .topbar-account {
        float: right;
        padding-right: 12px;
    }

    .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
    }

    .main {
        display: flex;
        position: absolute;
        top: 50px;
        bottom: 0px;
        overflow: hidden;
    }

    aside {
        flex: 0 0 180px;
        width: 180px;
    }

    .el-menu {
        height: 100%;
        border-radius: 0px;
        background-color: #333744;
    }

    .collapsed {
        width: 50px;
    }

    .submenu {
        position: absolute;
        top: 0px;
        left: 50px;
        z-index: 9999;
        height: auto;
        display: none;
    }

    .menu-collapsed {
        flex: 0 0 50px;
        width: 50px;
    }

    .menu-expanded {
        flex: 0 0 180px;
        width: 180px;
    }

    .menu-toggle {
        background: #4A5064;
        text-align: center;
        color: white;
        height: 50px;
        line-height: 50px;
        float: left;
        width: 40px;
    }

    .content-container {
        background: #fff;
        flex: 1;
        overflow-y: auto;
        padding: 10px;
    }

    .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
    }

    .el-menu-vertical:not(.el-menu--collapse) {
        width: 180px;
        height: 100%;
    }
    .el-menu-vertical.el-menu--collapse {
        width: 50px;
        height: 100%;
    }


</style>
