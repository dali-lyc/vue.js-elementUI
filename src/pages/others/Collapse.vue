<template>
    <div style="margin-bottom: 200px">

        <h4>tooltip文字提示</h4>
        <el-tooltip content="top center" placement="top">
            <el-button>dark</el-button>
        </el-tooltip>
        <el-tooltip placement="top">
            <div slot="content">多行信息<br/>第二行信息</div>
            <el-button>Top center</el-button>
        </el-tooltip>

        <h4>popover弹出框</h4>
        <el-popover ref="popover" placement="top-start" trigger="hover" title="标题" content="这里是内容"></el-popover>
        <el-button v-popover:popover>hover 激活</el-button>

        <h4>collapse折叠面板</h4>
        <el-collapse style="width: 50%">
            <el-collapse-item title="一致性 Consistency">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
        </el-collapse>
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

</style>