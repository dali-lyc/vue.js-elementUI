<template>
    <div style="margin-bottom: 200px">
        <h4>table表格</h4>
        <el-table :data="tableData" stripe border style="width: 90%" max-height="250" highlight-current-row @selection-change="handleSelectionChange">
            <el-table-column type="selection"></el-table-column>
            <el-table-column sortable fixed prop="date" label="日期">
                <template scope="scope">
                    <el-icon name="time"></el-icon><span style="padding-left: 10px">{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable prop="name" label="姓名"></el-table-column>
            <el-table-column sortable prop="address" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index + 1, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index + 1, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="100" :filters="[{text: '家', value: '家'}, {text: '公司', value: '公司'}]" :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'">{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>

        </el-table>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2017-09-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 18 弄',
                    tag: '家'
                }, {
                    date: '2017-09-03',
                    name: '张小虎',
                    address: '上海市普陀区金沙江路 17 弄',
                    tag: '公司'
                }, {
                    date: '2017-09-05',
                    name: '陈小虎',
                    address: '上海市普陀区金沙江路 19 弄',
                    tag: '家'
                }, {
                    date: '2017-09-04',
                    name: '刘小虎',
                    address: '上海市普陀区金沙江路 16 弄',
                    tag: '公司'
                }],
                multipleSelection: [],
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            filterTag(val, row) {
                return row.tag === val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
        }
    }

</script>

<style>

</style>