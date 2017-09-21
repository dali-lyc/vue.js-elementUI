import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'

import Layout from '@/pages/basic/Layout'
import Button from '@/pages/basic/Button'

import Badge from '@/pages/data/Badge'
import Page from '@/pages/data/Page'
import Table from '@/pages/data/Table'
import Tree from '@/pages/data/Tree'

import DatePicker from '@/pages/form/DatePicker'
import DynamicForm from '@/pages/form/DynamicForm'
import Input from '@/pages/form/Input'
import RadioAndCheckbox from '@/pages/form/RadioAndCheckbox'
import ValidateForm from '@/pages/form/ValidateForm'

import NavMenu from '@/pages/navigation/NavMenu'
import Dropdown from '@/pages/navigation/Dropdown'
import Steps from '@/pages/navigation/Steps'
import Tabs from '@/pages/navigation/Tabs'

import Notice from '@/pages/notice/Notice'

import Carousel from '@/pages/others/Carousel'
import Collapse from '@/pages/others/Collapse'
import Dialog from '@/pages/others/Dialog'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Home,
    },{
        path: '/home',
        component: Home,
    }, {
        path: '/layout',
        component: Layout,
    }, {
        path: '/button',
        component: Button,
    }, {
        path: '/table',
        component: Table,
    }, {
        path: '/tree',
        component: Tree,
    }, {
        path: '/page',
        component: Page,
    }, {
        path: '/badge',
        component: Badge,
    }, {
        path: '/date',
        component: DatePicker,
    }, {
        path: '/dynamic',
        component: DynamicForm,
    }, {
        path: '/input',
        component: Input,
    }, {
        path: '/radio',
        component: RadioAndCheckbox,
    }, {
        path: '/validate',
        component: ValidateForm,
    }, {
        path: '/nav',
        component: NavMenu,
    },{
        path: '/tabs',
        component: Tabs,
    },{
        path: '/steps',
        component: Steps,
    }, {
        path: '/dropdown',
        component: Dropdown,
    }, {
        path: '/notice',
        component: Notice,
    }, {
        path: '/carousel',
        component: Carousel,
    }, {
        path: '/collapse',
        component: Collapse,
    }, {
        path: '/dialog',
        component: Dialog,
    }]
})
