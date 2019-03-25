import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import EvaluationTemplate from './views/SupervisionMsg/EvaluationTemplate.vue'
import AttendanceRules from './views/SupervisionMsg/AttendanceRules.vue'
import TagContent from './views/SupervisionMsg/TagContent.vue'
import AddClassRoom from './views/SupervisionMsg/AddClassRoom.vue'
import DeviceManagement from './views/SupervisionMsg/DeviceManagement.vue'
import ClassroomMonitoring from './views/ObservationClass/ClassroomMonitoring.vue'
import EvaluationRecord from './views/ObservationClass/EvaluationRecord.vue'
import ExcellentClassroom from './views/ObservationClass/ExcellentClassroom.vue'
import FocusonClass from './views/ObservationClass/FocusonClass.vue'
import ViewRecord from './views/ObservationClass/ViewRecord.vue'
import CityReport from './views/LectureReport/CityReport.vue'
import JudgeReport from './views/LectureReport/JudgeReport.vue'
import TeacherReport from './views/LectureReport/TeacherReport.vue'


let routes = [
/*    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },*/
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    {
        path: '/',
        component: Home,
        name: '监课管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/EvaluationTemplate', component: EvaluationTemplate, name: '评价模板' },
            { path: '/AttendanceRules', component: AttendanceRules, name: '听课规则' },
            { path: '/TagContent', component: TagContent, name: '标记内容' },
            { path: '/AddClassRoom', component: AddClassRoom, name: '添加课堂' },
            { path: '/DeviceManagement', component: DeviceManagement, name: '设备管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '听评课堂',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/ClassroomMonitoring', component: ClassroomMonitoring, name: '课堂监控' },
            { path: '/EvaluationRecord', component: EvaluationRecord, name: '评价记录' },
            { path: '/ViewRecord', component: ViewRecord, name: '观看记录' },
            { path: '/ExcellentClassroom', component: ExcellentClassroom, name: '优秀课堂' },
            { path: '/FocusonClass', component: FocusonClass, name: '重点关注课堂' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '监课报表',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/JudgeReport', component: JudgeReport, name: '听评人报表' },
            { path: '/TeacherReport', component: TeacherReport, name: '教师报表' },
            { path: '/CityReport', component: CityReport, name: '城市报表' },
        ]
    },
];

export default routes;
