<template>
  <div class="container">
    <div class="col-md-12">
      <FPanel title="FInputGroup">
        <FInputGroup size="lg" :minimal="true">
          <FInput></FInput>
          <FInputGroupAddon>
            <i class="fa-search"></i>
          </FInputGroupAddon>
        </FInputGroup>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FForm">
        <FForm method="GET" action="/login">
          <FFormGroup title="邮箱">
            <FInput v-bind="bind.el" name="name"></FInput>
          </FFormGroup>
          <FFormGroup title="密码">
            <FInput type="password" v-bind="bind.pwd" name="pwd"></FInput>
          </FFormGroup>
          <FFormGroup title="性别">
            <FRadioGroup style="margin-top: 12px">
              <FRadio value="1" name="sex">男</FRadio>
              <FRadio value="0" name="sex">女</FRadio>
            </FRadioGroup>
          </FFormGroup>
          <FFormGroup :inline="true">
            <FButton type="submit" color="success">登录</FButton>
            <FButton type="reset">重置</FButton>
          </FFormGroup>
        </FForm>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FPanel">
        FPanel
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="Button">
        <FButton @click="isTest">primary 1</FButton>
        <FButton @click="isTest">primary 2</FButton>
        <FButton @click="isTest">primary 3</FButton>
        <FButton @click="isTest">primary 4</FButton>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="ButtonDropdown">
        <FButtonDropdown :menu="menu" @menu-click="isTest" type="purple">
          purple
        </FButtonDropdown>
        <FButtonDropdown :menu="menu" @menu-click="isTest" type="info">
          info
        </FButtonDropdown>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FTabs @tab-change="isTest" :current="1">
        <FTabPane name="tab1" icon="fa-home">page1</FTabPane>
        <FTabPane name="tab2" icon="fa-ils">page2</FTabPane>
        <FTabPane name="tab3">page3</FTabPane>
        <FTabPane name="tab4">page4</FTabPane>
      </FTabs>
    </div>
    <div class="col-md-12">
      <FAccordion type="joined" @panel-click="isTest">
        <FAccordionPanel title="FAccordion 1">Page1</FAccordionPanel>
        <FAccordionPanel title="FAccordion 2">Page2</FAccordionPanel>
        <FAccordionPanel title="FAccordion 3">Page3</FAccordionPanel>
        <FAccordionPanel title="FAccordion 4">Page4</FAccordionPanel>
      </FAccordion>
    </div>
    <div class="col-md-12">
      <FPanel title="FBreadcrumb">
        <FBreadcrumb :data="data" @click="isTest" type="1" :auto="true"></FBreadcrumb>
        <FBreadcrumb :data="data" @click="isTest" type="2"></FBreadcrumb>
        <FBreadcrumb :data="data" @click="isTest" type="3"></FBreadcrumb>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FBlockquote">
        <FBlockquote type="red">
          <p>
            <strong>Blockquote Default</strong>
          </p>
          <p>
            <small>
              Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. Houses latter an valley be indeed wished merely in my. Money doubt oh drawn every or an china. Visited out friends for expense message set eat.
            </small>
          </p>
        </FBlockquote>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FProgress">
        <FProgress :progress="progress"></FProgress>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FAlert">
        <FAlert type="danger" :display="display">{{input}}</FAlert>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FPagination">
        <FPagination :current="50" :total="180" :page_size="18" @page-change="isTest"></FPagination>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FLabel">
        <FLabel theme="badge" type="info">info</FLabel>
        <FLabel theme="badge" type="success">success</FLabel>
        <FLabel theme="badge" type="danger">danger</FLabel>
        <FLabel type="info">FLabel</FLabel>
        <FLabel type="success">FLabel</FLabel>
        <FLabel type="danger">FLabel</FLabel>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FTooltips">
        <FButton type="info" v-FTooltips="tooltips">FTooltips</FButton>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FTooltips">
        <FTable :hover="true" :striped="true" :bordered="true" :head="head" :body="body"></FTable>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FInput">
        <FInput type="text" placeholder="placeholder" v-model="input"></FInput>
        <FInput type="textarea" placeholder="placeholder" v-model="input"></FInput>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FCheckbox">
        <FCheckboxGroup v-model="menu" @change="isTest">
          <FCheckbox name="ck" value="苹果" :check="true">苹果</FCheckbox>
          <FCheckbox name="ck" value="香蕉">香蕉</FCheckbox>
          <FCheckbox name="ck" value="菠萝" type="red" @change="isTest">菠萝</FCheckbox>
          <br>
          {{menu}}
        </FCheckboxGroup>
        <FCheckbox value="西瓜" type="info" @change="isTest">西瓜</FCheckbox>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FRadio">
        <FRadioGroup v-model="radio" @change="isTest">
          <FRadio name="pp" value="苹果">苹果</FRadio>
          <FRadio name="pp" value="香蕉">香蕉</FRadio>
          <FRadio name="pp" value="菠萝" :check="true">菠萝</FRadio>
          <br>
          {{radio}}
        </FRadioGroup>
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FSwitch">
        <FSwitch v-model="Switch" @change="isTest" :check="true" size="lg"></FSwitch>
        {{Switch}}
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FSelect">
        <FSelect style="width: 500px" :data="select" v-model="selectModel"></FSelect>
        {{selectModel}}
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FTagInput">
        <FTagInput v-model="tagInput" :max_value="-50"></FTagInput>
        {{tagInput}}
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FSpinner">
        <FSpinner v-model="Spinner" :min="20" :max="30" :interval="3" :readonly="true"></FSpinner>
        {{Spinner}}
      </FPanel>
    </div>
    <div class="col-md-12">
      <FPanel title="FMultiSelect">
        <FMultiSelect v-model="MultiSelect" :data="MultiSelectData"></FMultiSelect>
        {{MultiSelect}}
      </FPanel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        bind: {
          el: {
            required: true,
            email: true
          },
          pwd: {
            required: true,
            minlength: 6
          }
        },
        Spinner: 50,
        Switch: false,
        radio: '',
        MultiSelect: [],
        MultiSelectData: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13],
        tagInput: ['a', 'b', 'c'],
        menu: ['首页', '新闻', '列表', 'divider', '详情'],
        data: [{
          icon: 'fa-home',
          title: 'Home'
        }, {
          title: 'NewsNews'
        }, {
          title: 'FBreadcrumb'
        }],
        progress: 0,
        display: true,
        tooltips: {
          text: 'tooltips',
          type: 'blue'
        },
        head: [{
          name: 'id',
          text: 'Id',
          width: 30
        }, {
          name: 'name',
          text: '名字'
        }, {
          name: 'age',
          text: '年齡'
        }],
        body: [{
          id: 1,
          name: '曹操',
          age: '123'
        }, {
          id: 2,
          name: '刘备'
        }],
        input: 'input',
        checkbox: ['1', '2'],
        select: [{
          text: '选择1',
          value: '值1'
        }, {
          text: '选择2',
          value: '值2'
        }, {
          text: '选择3',
          value: '值3'
        }],
        selectModel: '值3'
      }
    },
    mounted () {
      setInterval(() => this.progress++, 1000)
    },
    methods: {
      isTest (item) {
        console.log(item)
        this.$message.setPosition('top', 'left')
        this.$message.error({
          time: 5000,
          title: '这个是一个标题',
          message: '八十八大叔大婶八十八大叔大婶八十八大叔大婶八十八大叔大婶'
        })
        this.$message.info({
          time: 5000,
          title: '这个是一个标题',
          message: '八十八大叔大婶八十八大叔大婶八十八大叔大婶八十八大叔大婶'
        })
        this.$message.success('success')
      }
    }
  }
</script>
<style>
  @import "assets/css/index.css";
</style>
