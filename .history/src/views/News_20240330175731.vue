<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-28 18:13:58
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-30 17:57:29
 * @FilePath: \moving-platform\src\views\News.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <card v-for="(card, index) in cards" :key="card.id" :card="card" @close="removeCard(index)">
    </card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, content: 'Card 1' },
        { id: 2, content: 'Card 2' },
        // ...
      ]
    };
  },
  methods: {
    removeCard(index) {
      this.cards.splice(index, 1);
    }
  }
};
</script>
 
<style scoped>
/* 样式按需添加 */
</style>