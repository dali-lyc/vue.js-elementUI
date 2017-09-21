<template>
    <div style="margin-bottom: 200px">
        <h4>pagination</h4>
        <el-pagination layout="prev, pager, next" :total="500"></el-pagination>
        <br>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pager.currentPage"
                       :page-sizes="pager.pageSizes" :page-size="pager.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pager.total">
        </el-pagination>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                pager: {
                    currentPage: 4,
                    pageSizes: [10, 20, 50],
                    pageSize: 10,
                    total: 400
                },

            }
        },
        methods: {
            handleSizeChange(val) {
                console.log('每页 ' + val + ' 条');
            },
            handleCurrentChange(val) {
                console.log('当前页: ' + val);
            }
        }
    }

</script>

<style>

</style>