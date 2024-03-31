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
import { mockPopularPosts, mockPopularSearchTerms } from './mockData'; // 导入模拟数据

// 响应式对象
const state = reactive({
  popularPosts: [] as { id: number; title: string }[],
  popularSearchTerms: [] as string[],
});

// 在组件加载时获取数据
import { onMounted } from 'vue';
onMounted(() => {
  state.popularPosts = mockPopularPosts;
  state.popularSearchTerms = mockPopularSearchTerms;
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
