<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 22:06:21
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 22:07:56
 * @FilePath: \moving-platform\src\component\Article.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-html="transformMsg(props.value)" class="markdown-viewer"></div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { VideoLinkUtils } from '@/utils/links.ts'; 
import showdown from 'showdown';
import showdownKatex from 'showdown-katex';
import Video from '@/component/Video'

const videoUtils = new VideoLinkUtils();
const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({
    name:'',
    intruction:'',
})
const url = ref('https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/456b34da-18e7fe1ceab/456b34da-18e7fe1ceab.mp4?Expires=1711546151&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=xmHUKTZ%2FHH5qmCJE%2BJV1WdcY9BI%3D');
// Markdown 内容
const newsContent = ref<string>(`
# 新闻标题

这是一条新闻的内容，包含文字和图片：

![图片描述](https://example.com/image.jpg)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit eget dolor tristique consequat. Integer mattis nisi quis nibh interdum, et consequat nisi lobortis.
`);
function transformMsg(msgInfo = '') {
    msgInfo = msgInfo.replaceAll('<br  />', '\n'); // 一些处理
    let converter = new showdown.Converter({
        // 详细配置见：https://github.com/showdownjs/showdown#valid-options
        tables: true, // 支持table语法
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
pnp}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    videoUtils.addVideoLink("Video 1", "https://example.com/video1.mp4");
    videoUtils.addVideoLink("Video 2", "https://example.com/video2.mp4");
    videoUtils.printAllVideoLinks();
    console.log("Video 1 URL:", videoUtils.getVideoLink("Video 1"));
    data.name = '安恒信息';
    data.intruction = '杭州安恒信息技术股份有限公司（简称：安恒信息）成立于2007年，于2019年登陆科创板，是网络安全行业发展速度最快的上市公司之一。作为行业领导者，安恒信息秉承“构建安全可信的数字世界”的企业使命，以数字经济的安全基石为企业定位，形成了云安全、大数据安全、物联网安全、智慧城市安全、工业控制系统安全及工业互联网安全五大市场战略，凭借强大的研发实力和持续的产品创新，完成覆盖网络信息安全全生命周期的产品、服务及解决方案体系，作为国家级核心安保单位，参与了近乎全部国家重大活动网络安保，实现零失误。2020年11月23日，安恒信息正式成为2022年杭州第19届亚运会网络安全类官方合作伙伴，这也是国际大型综合性赛事网络信息安全类最高层级合作。';
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style>
.katex-html {
    display: none;
}
.markdown-viewer {
    width: 100%;
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
</style>
