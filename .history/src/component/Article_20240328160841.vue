<template>
  <div class="content">
    <h1>{{ props.title }}</h1>
    <div v-html="transformMsg(props.value)" class="markdown-viewer"></div>
  </div>
</template>

<script setup >
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import showdown from 'showdown';
import showdownKatex from 'showdown-katex';

const props = defineProps({
    title: { type:String },
    value: { type: String },
    class: { type: String },
});
const data = reactive({})

function transformMsg(msgInfo = '') {
    msgInfo = msgInfo.replaceAll('<br  />', '\n'); // 一些处理
    let converter = new showdown.Converter({
        // 详细配置见：https://github.com/showdownjs/showdown#valid-options
        tables: true, // 支持table语法
        simpleLineBreaks: true,
        strikethrough: true, // 将~~strikethrough~~ 识别为 <del>strikethrough</del>
        underline: true, // __test__中的下划线不识别为<em> 和 <strong>
        extensions: [
        showdownKatex({
            // 使用方式见：https://obedm503.github.io/showdown-katex
            // 详细配置见：https://katex.org/docs/options.html
            throwOnError: false, // 公式有错时，是否抛出错误
            displayMode: false, // 如果为false，公式以inline方式渲染
            delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '~', right: '~', display: false, asciimath: true },
            ],
        }),
        ],
    });
    return converter.makeHtml(msgInfo);
}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.content{
   width:100%;
   h1{
        text-align: center;
   }
}

.katex-html {
    display: none;
  }
.markdown-viewer {
    line-height: 0.32rem;
        font-size:0.2rem;
    td {
        border: 1px solid #dfe2e5;
        padding: 5px;
    }
    th {
        border: 1px solid #dfe2e5;
        padding: 5px;
        text-align: center;
    }
    tr:nth-child(2n-1) {
        background-color: #fafbfc;
    }
}
::v-deep(.markdown-viewer pre){
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>