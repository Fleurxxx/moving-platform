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
  