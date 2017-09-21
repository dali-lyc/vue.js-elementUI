<template>
    <div style="margin-bottom: 200px">
        <h4>input输入框</h4>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input v-model="input2" icon="search" :on-icon-click="handleIconClick"></el-input>
        <el-input v-model="input3">
            <template slot="prepend">http://</template>
        </el-input>
        <el-input v-model="input4">
            <template slot="append">.com</template>
        </el-input>
        <el-input v-model="input5">
            <el-select v-model="select" slot="prepend">
                <el-option label="系统名称" value="1"></el-option>
                <el-option label="系统标识" value="2"></el-option>
                <el-option label="系统地址" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
        </el-input>

        <h4 class="sub-title">激活即列出输入建议</h4>
        <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
        ></el-autocomplete>

        <h4>select下拉框</h4>
        <el-select v-model="value" multiple>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <h4>远程搜索</h4>
        <el-select v-model="value2" multiple filterable remote :remote-method="remoteMethod">
            <el-option v-for="item in options2" :key="item.key" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <h4>cascader级联选择器</h4>
        <el-cascader expand-trigger="hover" :options="options3" v-model="selectedOptions"
                     @change="handleChange"></el-cascader>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                input: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                select: '',
                restaurants: [],
                state1: '',
                state2: '',
                options: [{
                    value: '1',
                    label: '选项1'
                }, {
                    value: '2',
                    label: '选项2'
                }, {
                    value: '3',
                    label: '选项3'
                }],
                value: '',
                options2: [],
                value2: [],
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",],
                list: [],
                selectedOptions: [],
                options3: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致',
                        }, {
                            value: 'fankui',
                            label: '反馈',
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiang',
                            label: '侧向',
                        }, {
                            value: 'chuizhi',
                            label: '垂直',
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'jichu',
                        label: '基础',
                        children: [{
                            value: 'buju',
                            label: '布局',
                        }, {
                            value: 'secai',
                            label: '色彩',
                        }]
                    }, {
                        value: 'biaodan',
                        label: '表单',
                        children: [{
                            value: 'danxuan',
                            label: '单选框',
                        }, {
                            value: 'xialakuang',
                            label: '下拉框',
                        }]
                    }]
                }],
            }
        },
        mounted() {
            this.restaurants = this.loadAll();

            this.list = this.states.map(item => {
                return {value: item, label: item}
            });
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev);
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
                    {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
                    {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
                    {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
                    {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
                    {"value": "贡茶", "address": "上海市长宁区金钟路633号"},
                    {"value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号"},
                    {"value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号"},
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            remoteMethod(query) {
                if (query !== '') {
                    setTimeout(() => {
                        this.options2 = this.list.filter(item => {
                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                        })
                    }, 200);
                } else {
                    this.options2 = [];
                }
            },
            handleChange(value) {
                console.log(value);
            },
        }
    }
</script>

<style>
    .el-input {
        width: 210px
    }

    .el-select {
        width: 210px
    }
</style>