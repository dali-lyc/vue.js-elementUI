<template>
    <div>
        <h4>element图标</h4>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete" style="color: #00d6b2"></i>
        <el-button type="primary" icon="search">搜索</el-button>

        <h4>font-awesome图标</h4>
        <i class="fa fa-home"></i>
        <i class="fa fa-tachometer"></i>
        <i class="fa fa-bar-chart"></i>
        <i class="fa fa-list-alt"></i>
        <i class="fa fa-cogs" style="color: #00d6b2"></i>

        <h4>按钮</h4>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <br><br>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <br><br>
        <el-button :plain="true" type="success">成功按钮</el-button>
        <el-button :plain="true" type="info">信息按钮</el-button>
        <el-button :plain="true" type="warning">警告按钮</el-button>
        <el-button :plain="true" type="danger">危险按钮</el-button>

        <h4>图标按钮</h4>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload"></i></el-button>

        <h4>按钮组</h4>
        <el-button-group>
            <el-button type="primary" icon="arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right"></i></el-button>
        </el-button-group>
        <el-button-group>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
        </el-button-group>

        <h4>不同尺寸</h4>
        <el-button type="primary" size="large">大按钮</el-button>
        <el-button type="primary">正常按钮</el-button>
        <el-button type="primary" size="small">小按钮</el-button>
        <el-button type="primary" size="mini">超小按钮</el-button>
    </div>

</template>

<script>
    export default {
        name: 'Button'
    }

</script>

<style>

</style>