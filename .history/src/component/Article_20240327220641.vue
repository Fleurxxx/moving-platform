<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 22:06:21
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 22:06:39
 * @FilePath: \moving-platform\src\component\Article.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-html="transformMsg(props.value)" class="markdown-viewer"></div>
  </template>
  <script lang="ts" setup>
    import showdown from 'showdown';
    import showdownKatex from 'showdown-katex';
    const props = defineProps({
      value: { type: String },
      class: { type: String },
    });
  
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
    }
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
  