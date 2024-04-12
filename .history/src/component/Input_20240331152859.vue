<template>
    <div class="emoji-container clearfix">
  
      <div class="input-area" ref="editableInputAreaDiv" contenteditable="true">
        halo world
        <img src="https://cdn.sunofbeaches.com/emoji/1.png" alt="">
      </div>
      
      <div class="input-area-bar">
        <span class="emoji-txt" @click="emojiShow = !emojiShow">表情</span>
        <span class="emoji-btn" @click="publish">发布</span>
      </div>
      
      <div class="emoji-item-container" v-show="true">
        <div class="emoji-item-area">
          <img v-for="(emoji, key) in 130" :key="key" @click="addEmoji(emoji)"
            :src="'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png'" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const emojiShow = ref(false);
  let lastEditRange = null;
  
  const editableInputAreaDiv = ref(null);
  
  onMounted(() => {
    editableInputAreaDiv.value.onclick = () => {
      let selection = window.getSelection();
      if (selection.rangeCount > 0) {
        lastEditRange = selection.getRangeAt(0);
      }
    };
  });
  
  function publish() {
    editableInputAreaDiv.value.focus();
    let selection = window.getSelection();
  }
  
  function addEmoji(emoji) {
    let edit = editableInputAreaDiv.value;
    edit.focus();
    let selection = window.getSelection();
  
    if (lastEditRange) {
      selection.removeAllRanges();
      selection.addRange(lastEditRange);
  
      let img = document.createElement('img');
      img.src = 'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png';
      let range = selection.getRangeAt(0);
      range.insertNode(img);
      range.collapse(false);
      lastEditRange = selection.getRangeAt(0);
    } else {
      let img = document.createElement('img');
      img.src = 'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png';
      edit.appendChild(img);
      selection.selectAllChildren(edit);
      selection.collapseToEnd();
      return;
    }
  }
  </script>

<style scoped lang="less">
.emoji-container {
    width: 100%;
    height: 100%;
    margin: 10px auto;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;

    ::v-deep .input-area {
        height: 100px;
        border: 1px solid #e9e9e9;
        outline: none;
        padding: 10px;
        font-size: 16px;
        overflow-y: scroll;

        &:focus {
            border: 1px solid red;
        }

        img {
            width: 20px;
            height: 20px;
            vertical-align: bottom;
            margin: 0 2px;

        }
    }

    .input-area-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 5px;
        line-height: 20px;
        height: 30px;

        .emoji-txt {
            color: #4485f9;
            cursor: pointer;
        }


        .emoji-btn {
            background-color: #4485f9;
            cursor: pointer;
            padding: 0px 10px;
            color: #fff;
            height: 100%;
            line-height: 28px;
            border-radius: 5px;
        }
    }
}

.emoji-item-container {
    background-color: #fff;
    height: 200px;
    border-radius: 5px;
    padding: 5px;
    overflow-y: auto;
    margin-top: 14px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .028);

    .emoji-item-area {

        img {
            cursor: pointer;
            width: 20px;
            height: 20px;
            margin: 2px;
            padding: 9px;
            border-radius: 8px;
            vertical-align: bottom;
            transition: all .28s;

            &:hover {
                transform: scale(1.2);
            }

            &:hover {
                background-color: #eaeaea;
            }
        }
    }

}

.clearfix::before,
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

&::-webkit-scrollbar {
    width: 4px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.12);
    background: rgba(0, 0, 0, 0.2);
}

/*::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
    }*/
</style>

