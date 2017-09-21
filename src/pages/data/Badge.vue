<template>
    <div style="margin-bottom: 200px">
        <h4>tag标签</h4>
        <el-tag>标签一</el-tag>
        <el-tag type="gray">标签二</el-tag>
        <el-tag type="primary">标签三</el-tag>
        <el-tag type="success">标签四</el-tag>
        <el-tag type="warning">标签五</el-tag>
        <el-tag type="danger">标签六</el-tag>

        <h4>badge标记</h4>
        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <el-dropdown trigger="hover">
            <span class="el-dropdown-link">查看<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>评论<el-badge class="mark" :value="12"></el-badge></el-dropdown-item>
                <el-dropdown-item>回复<el-badge class="mark" :value="3"></el-badge></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <br><br>
        <el-badge :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge value="new" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
            <el-button icon="share" type="primary"></el-button>
        </el-badge>

    </div>

</template>

<script>
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
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>