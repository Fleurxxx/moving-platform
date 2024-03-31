<template>
  <div class="blog-container">
    <div class="blog-left">
      <h2>热门文章</h2>
      <ul>
        <li v-for="(post, index) in popularPosts" :key="index">
          {{ post.title }}
        </li>
      </ul>
    </div>
    <div class="blog-right">
      <h2>搜索热度榜</h2>
      <ul>
        <li v-for="(searchTerm, index) in popularSearchTerms" :key="index">
          {{ searchTerm }}
        </li>
      </ul>
      <div class="footer">
        <p>网页备案信息：XXXXXXXXXXX</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// 响应式对象
const state = reactive({
  popularPosts: [
    { id: 1, title: '如何学习Vue.js' },
    { id: 2, title: '深入理解JavaScript闭包' },
    { id: 3, title: '使用React构建单页面应用' },
    { id: 4, title: '前端工程化实践经验分享' },
  ],
  popularSearchTerms: ['Vue.js教程', 'JavaScript闭包', 'React入门', '前端工程化'],
});
</script>

<style>
.blog-container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.blog-left {
  flex: 1;
  margin-right: 20px;
}

.blog-right {
  flex: 1;
}

ul {
  list-style: none;
  padding: 0;
}

.footer {
  margin-top: 20px;
}
</style>
