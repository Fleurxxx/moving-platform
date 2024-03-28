<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-15 10:24:21
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-15 10:45:48
 * @FilePath: \moving-platform\src\component\Comment.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-dropdown trigger="click" @command="onCommand">
      <div class="operation-warp">
          <u-icon>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M586.624 234.624a74.624 74.624 0 1 1-149.184 0 74.624 74.624 0 0 1 149.12 0z m0 554.624a74.624 74.624 0 1 1-149.248 0 74.624 74.624 0 0 1 149.248 0zM512 586.624a74.624 74.624 0 1 0 0-149.248 74.624 74.624 0 0 0 0 149.248z"
                fill="currentColor"
              ></path>
            </svg>
          </u-icon>
        </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="report">举报</el-dropdown-item>
          <el-dropdown-item command="remove">删除</el-dropdown-item>
          <el-dropdown-item divided command="copy">复制</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>
  <script setup lang="ts">
  import { useClipboard } from '@vueuse/core'
  import { CommentApi, ElDropdown, ElDropdownItem, ElDropdownMenu, UToast} from 'undraw-ui'
  
  interface Props {
    comment: CommentApi
  }
  
  const props = defineProps<Props>()
  
  const emit = defineEmits<{
    (e: 'remove', comment: CommentApi): void
  }>()
  
  const { copy } = useClipboard()
  
  const onCommand = (command: any) => {
    switch(command) {
      case 'remove':
        emit('remove', props.comment)
        break
      case 'report':
        UToast({type: 'info', message: '举报成功: ' + props.comment.id})
        break
      case 'copy':
        copy(props.comment.content)
        UToast({type: 'info', message: '复制成功'})
    }
  }
  
  </script>
  
  <style lang="less" scoped>
  .el-dropdown {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  .operation-warp {
    font-size: 16px;
    color: #9499a0;
    cursor: pointer;
    position: relative;
  }
  .operation-warp:hover {
    color: #00aeec;
  }
  </style>