<template>
    <div style="margin-bottom: 200px">
        <h4>carousel轮播图</h4>
        <el-carousel :interval="3000" height="150px" style="width: 50%">
            <el-carousel-item v-for="item in 4" :key="item"><h3>{{item}}</h3></el-carousel-item>
        </el-carousel>
        <br>
        <el-carousel :interval="3000" type="card" height="150px" style="width: 50%">
            <el-carousel-item v-for="item in 4" :key="item"><h3>{{item}}</h3></el-carousel-item>
        </el-carousel>
    </div>

</template>

<script type="es6">
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }

</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>