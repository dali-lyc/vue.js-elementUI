<template>
    <div style="margin-bottom: 200px">
        <h4>alert警告</h4>
        <el-alert title="成功提示" type="success" show-icon></el-alert>
        <el-alert title="消息提示" type="info" show-icon></el-alert>
        <el-alert title="警告提示" type="warning" show-icon></el-alert>
        <el-alert title="错误提示" type="error" show-icon></el-alert>

        <h4>消息提示</h4>
        <el-button :plain="true" @click="open1">成功</el-button>
        <el-button :plain="true" @click="open2">消息</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>

        <h4>notification通知</h4>
        <el-button plain @click="openNotification">消息边栏通知</el-button>
    </div>

</template>

<script type="es6">
    export default {
        data() {
            return {

            }
        },
        methods: {
            open1() {
                this.$message({
                    message: '这是一条消息提示',
                    type: 'success',
                    showClose: true
                })
            },
            open2() {
                this.$message({
                    message: '这是一条消息提示',
                    type: 'info',
                    showClose: true
                })
            },
            open3() {
                this.$message({
                    message: '这是一条消息提示',
                    type: 'warning'
                })
            },
            open4() {
                this.$message({
                    message: '这是一条消息提示',
                    type: 'error'
                })
            },
            openBox() {
                this.$confirm('确认删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功！'
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消操作'
                    })
                })
            },
            openNotification() {
                const h = this.$createElement;
                this.$notify({
                    title: '消息通知',
                    message: h('i', {style: 'color: #666'}, '消息通知，消息通知'),
                    duration: 2000,
                    type: 'success',
                    offset: 100
                })
            }
        }
    }

</script>

<style>
    .el-alert {
        margin-bottom: 10px;
        width: 30%;
    }
    
</style>