<template>
    <div style="margin-bottom: 200px">
        <h4>radio单选框</h4>
        <el-radio-group v-model="radio">
            <el-radio :label="1">选项1</el-radio>
            <el-radio :label="2">选项2</el-radio>
            <el-radio :label="3">选项3</el-radio>
        </el-radio-group>
        <br><br>
        <el-radio-group v-model="radio2">
            <el-radio-button :label="1">北京</el-radio-button>
            <el-radio-button :label="2">上海</el-radio-button>
            <el-radio-button :label="3">广州</el-radio-button>
            <el-radio-button :label="4">深圳</el-radio-button>
        </el-radio-group>

        <h4>checkbox多选框</h4>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="选项1"></el-checkbox>
            <el-checkbox label="选项2"></el-checkbox>
            <el-checkbox label="选项3"></el-checkbox>
        </el-checkbox-group>
        <div style="margin: 15px 0;"></div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkboxGroup" fill="#333" text-color="#999" :min="1" :max="3">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>

    </div>

</template>

<script type="text/ecmascript-6">
    const cityOptions = ['北京', '上海', '广州', '深圳'];
    export default {
        data () {
            return {
                radio: 1,
                radio2: 2,
                checkList: ['选项1'],
                cities: cityOptions,
                checkAll: false,
                checkedCities: ['北京', '上海'],
                isIndeterminate: true,
                checkboxGroup: ['上海'],
            }
        },
        mounted() {

        },
        methods: {
            handleCheckAllChange(event) {
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
        }
    }
</script>

<style>

</style>