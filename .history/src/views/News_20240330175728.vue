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