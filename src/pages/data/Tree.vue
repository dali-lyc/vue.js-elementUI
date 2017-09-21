<template>
    <div style="margin-bottom: 200px">
        <h4>tree树形控件</h4>
        <el-tree :data="data" accordion @node-click="handleNodeClick"></el-tree>
        <br>
        <el-tree :data="data" show-checkbox @check-change="handleCheckChange"></el-tree>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1',
                        }, {
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }]
                }],
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data)
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
        }
    }

</script>

<style>

</style>