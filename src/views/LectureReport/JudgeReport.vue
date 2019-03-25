<template>
 <section class="JudgeReport">
     <!--工具条-->
     <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
         <el-form :inline="true">
             <el-form-item label="年">
                 <el-select v-model="currentYear" placeholder="请选择" style="width: 120px;padding-right: 20px;" id="year">
                     <el-option
                             v-for="item in itemYearsList"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                     </el-option>
                 </el-select>
             </el-form-item>
             <el-form-item label="月">
                 <el-select v-model="currentMonth" placeholder="请选择" style="width: 120px;padding-right: 20px" id="month">
                     <el-option
                             v-for="item in itemMonthsList"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                     </el-option>
                 </el-select>
             </el-form-item>
             <el-form-item label="角色">
                 <el-select  v-model="currentRole" placeholder="请选择" style="width: 150px;padding-right: 20px" id="role">
                     <el-option
                             v-for="item in itemRolesList"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                     </el-option>
                 </el-select>
             </el-form-item>
             <el-form-item label="名字">
                 <el-input placeholder="请输入教师名字" style="width: 200px;padding-right: 20px" class="rescript-input" id="teacherName"></el-input>
             </el-form-item>
             <el-form-item style="padding-right: 10px">
                 <el-button type="" v-on:click="" class="rescript-button">查询</el-button>
             </el-form-item>
             <el-form-item style="padding-right: 10px">
                 <el-button type="" @click="" class="rescript-button">重置</el-button>
             </el-form-item>
             <el-form-item style="padding-right: 10px">
                 <el-button type="" @click="" class="rescript-button">导出</el-button>
             </el-form-item>
         </el-form>
     </el-col>

     <!--列表-->
 <el-table :data="JudgeReportList" stripe highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">

         <el-table-column prop="name" label="听评人" width="100">
         </el-table-column>
         <el-table-column prop="role" label="角色" width="100">
         </el-table-column>
         <el-table-column prop="CurrentMonthClass" label="本月听评课堂" min-width="100">
         </el-table-column>
         <el-table-column prop="AccumulatedClass" label="累计听评课堂" min-width="100">
         </el-table-column>
         <el-table-column prop="RecommendationClass" label="听评推荐课堂" min-width="100">
         </el-table-column>
         <el-table-column prop="ListeningTeachers" label="本月听评老师" min-width="100">
         </el-table-column>
         <el-table-column prop="completionRate" label="听评完成率" min-width="100">
         </el-table-column>
         <el-table-column label="操作" width="150">
             <template scope="scope">
                 <el-button type="text" @click="dialogTableVisible = true">查看听课列表</el-button>
                 <el-dialog title="听课列表" :visible.sync="dialogTableVisible">
                     <el-table :data="gridData">
                         <el-table-column property="date" label="日期" width="150"></el-table-column>
                         <el-table-column property="name" label="姓名" width="200"></el-table-column>
                         <el-table-column property="address" label="地址"></el-table-column>
                     </el-table>
                 </el-dialog>
             </template>
         </el-table-column>
     </el-table>

     <!--分页-->

 </section>
</template>

<script>
    export default {
        name: "JudgeReport",
        data(){
            return{
                JudgeReportList:[],
                pageNumber: 1,
                pageSize: 20,
                listLoading: false,
                itemYearsList: [{
                    value: '2018',
                    label: '2018'
                }, {
                    value: '2019',
                    label: '2019'
                }],
                itemMonthsList: [{
                    value: '1',
                    label: '1月'
                }, {
                    value: '2',
                    label: '2月'
                }],
                itemRolesList:[{
                    value: 'ChiefInspector',
                    label: '总监'
                },{
                    value: 'CenterDirector',
                    label: '中心主任'
                },{
                    value: 'TrainingSupervisor',
                    label: '师训主管'
                },{
                    value: 'TeachingSupervisor',
                    label: '教学主管'
                }],
                currentYear: '',
                currentMonth:'',
                currentRole:'',
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogTableVisible: false,
                dialogFormVisible: false,
            }
        },
       methods:{
          getJudgeReportList(){
            this.JudgeReportList = [{name: 'Amy',role:'师训主管',CurrentMonthClass:'4',AccumulatedClass:'1',RecommendationClass:'2',ListeningTeachers:'2',completionRate:'200%'},
                {name: 'Angela',role:'总监',CurrentMonthClass:'4',AccumulatedClass:'1',RecommendationClass:'2',ListeningTeachers:'2',completionRate:'200%'}]
          },
        },
        created:{

        },
        mounted(){
            this. getJudgeReportList();
        },
    }
</script>

<style>
    @import '../../styles/override-element-ui.css';
.color{
    color: #FCC22D;
}
el-input:hover{border-color:#FCC22D}
el-select:hover{border-color:#FCC22D}
.rescript-button{
    width: 72px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c4c4c4;
    color: #1f2d3d;
    margin: 0;
    padding: 10px 15px;
    border-radius: 1px;
}
.rescript-button:hover{
    width: 72px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FCC22D;
    border: 1px solid #FCC22D;
    color: #1f2d3d;
    margin: 0;
    padding: 10px 15px;
    border-radius: 1px;
}
 .JudgeReport .el-input__inner {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 1px;
        border: 1px solid #ddd;
        box-sizing: border-box;
        color: #1f2d3d;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: 0;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
  #year{
      width: 120px;
  }
    .JudgeReport .el-input__icon {
        margin-right: 10px;
        color: #bfcbd9;
        font-size: 12px;
        transition: transform .3s;
        -ms-transform: translateY(-50%) rotate(180deg);
        transform: translateY(-50%) rotateZ(180deg);
        line-height: 16px;
        top: 50%;
        cursor: pointer;
    }
</style>
