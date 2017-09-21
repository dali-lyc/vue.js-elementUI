<template>
    <div style="margin-bottom: 200px">

        <h4>steps步骤条</h4>
        <el-steps :space="200" :active="active" finish-status="success">
            <el-step title="步骤1" description="步骤1操作详情" icon="edit"></el-step>
            <el-step title="步骤2" description="步骤2操作详情" icon="upload"></el-step>
            <el-step title="步骤3" description="步骤3操作详情" icon="picture"></el-step>
        </el-steps>
        <el-button style="margin-top: 10px" @click="next">下一步</el-button>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                active: 1,
            }
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }

</script>

<style>

</style>