<template>
    <div style="margin-bottom: 200px">
        <h4>messageBox弹框</h4>
        <el-button type="text" @click="openBox">点击打开</el-button>

        <h4>dialog对话框</h4>
        <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-button @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="tableData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="150"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
        </el-dialog>
        <el-button @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" style="width: 1200px">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off" style="width: 220px"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>

</template>

<script type="es6">
    export default {
        data() {
            return {
                dialogVisible: false,
                dialogTableVisible: false,
                dialogFormVisible: false,
                tableData: [{
                    date: '2017-09-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 18 弄',
                }, {
                    date: '2017-09-03',
                    name: '张小虎',
                    address: '上海市普陀区金沙江路 17 弄',
                }, {
                    date: '2017-09-05',
                    name: '陈小虎',
                    address: '上海市普陀区金沙江路 19 弄',
                }, {
                    date: '2017-09-04',
                    name: '刘小虎',
                    address: '上海市普陀区金沙江路 16 弄',
                }],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '220px'
            }
        },
        methods: {
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
            handleClose(done) {
                this.$confirm('确认关闭？').then(() => {
                    done();
                }).catch(() => {
                });
            }
        }
    }

</script>

<style>

</style>