<template>
  <div ref="playerContainer" :id="playerId"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
// import Aliplayer from 'aliplayer';

export default defineComponent({
  props: {
    source: {
      type: String as PropType<string>,
      required: true
    },
    autoplay: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    isLive: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    rePlay: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup(props) {
    const playerId = 'aliplayer_' + Math.random().toString(36).substr(2, 9);
    const playerContainer = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (playerContainer.value) {
        const player = new Aliplayer({
          id: playerId,
          autoplay: props.autoplay,
          isLive: props.isLive,
          rePlay: props.rePlay,
          source: props.source
        });
        player.mount(playerContainer.value);
      }
    });

    return { playerId, playerContainer };
  }
});
</script>
