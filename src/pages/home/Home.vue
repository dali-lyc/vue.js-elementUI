<template>
    <div>
        <el-carousel :interval="10000">
            <el-carousel-item><a href="http://www.baidu.com" target="_blank"><img src="../../assets/1.jpg"/></a>
            </el-carousel-item>
            <el-carousel-item><img src="../../assets/2.jpg"/></el-carousel-item>
            <el-carousel-item><img src="../../assets/3.jpg"/></el-carousel-item>
            <el-carousel-item><img src="../../assets/4.jpg"/></el-carousel-item>
        </el-carousel>
        <br>

        <el-row class="row-bg">
            <el-form :inline="true" v-model="queryForm">
                <el-form-item label="姓名">
                    <el-input v-model="queryForm.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="queryForm.address"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryUser">查询</el-button>
                    <el-button type="default" @click="addUser">新增</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <br>

        <el-row class="row-bg">
            <el-table :data="tableData" stripe border style="width: 100%" max-height="250" highlight-current-row>
                <el-table-column type="selection"></el-table-column>
                <el-table-column sortable fixed prop="date" label="日期">
                    <template scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="padding-left: 10px">{{scope.row.date}}</span>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="name" label="姓名"></el-table-column>
                <el-table-column sortable prop="address" label="地址"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button size="small" @click="editUser(scope.$index + 1, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="delUser(scope.$index + 1, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="tag" label="标签" width="100"
                                 :filters="[{text: '家', value: '家'}, {text: '公司', value: '公司'}]" :filter-method="filterTag">
                    <template scope="scope">
                        <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'">{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
            <br>

            <el-pagination style="display: inline-block" @size-change="handleSizeChange" :page-sizes="pager.pageSizes" :page-size="pager.pageSize"
                           layout="total, sizes" :total="pager.total">
            </el-pagination>
            <el-pagination style="display: inline-block; float: right" @current-change="handleCurrentChange"
                           :current-page="pager.currentPage"
                           layout="prev, pager, next, jumper" :total="pager.total">
            </el-pagination>
        </el-row>

        <el-dialog title="信息添加" :visible.sync="addUserModal" size="tiny">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="住址" prop="address">
                    <el-input v-model="ruleForm.address" style="width: 200px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addUserModal = false">取消</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                queryForm: {
                    name: '',
                    address: '',
                },
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
                addUserModal: false,
                pager: {
                    currentPage: 4,
                    pageSizes: [10, 20, 50],
                    pageSize: 10,
                    total: 400
                },
                ruleForm: {
                    name: '',
                    address: '',
                },
                rules: {
                    name: [{
                        required: true, message: '请输入', trigger: 'blur'
                    }, {
                        min: 3, max: 5, message: '字符长度3~5', trigger: 'blur'
                    }],
                },
            }
        },
        methods: {
            queryUser() {
                console.log(this.formInline);
                this.tableData.forEach(function (item) {
                    console.log(item.name);
                })
            },
            addUser() {
                this.ruleForm.name = '';
                this.ruleForm.address = '';
                this.addUserModal = true;
            },
            filterTag(val, row) {
                return row.tag === val;
            },
            editUser(index, row) {
                console.log(index, row);
                console.log(row.name);
                this.ruleForm.name = row.name;
                this.ruleForm.address = row.address;
                this.addUserModal = true;
            },
            delUser(index, row) {
                console.log(index, row);
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
            handleSizeChange(val) {
                console.log('每页 ' + val + ' 条');
            },
            handleCurrentChange(val) {
                console.log('当前页: ' + val);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('提交');
                        this.addUserModal = false;
                    } else {
                        console.log('error');
                        return false;
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }

</script>

<style scoped>
    .row-bg {
        padding: 10px 10px;
        background-color: #f3f3f3;
    }

</style>