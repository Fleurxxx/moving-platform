<template>
    <u-comment :config="config" upload @submit="submit" @like="like" @show-info="showInfo" page @reply-page="replyPage" relative-time>
      <template #card="scope">
        <div class="user-card">
          <div class="user-avatar">
            <el-avatar style="margin-top: 5px" :size="40" fit="cover" :src="scope.avatar">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </div>
          <div class="user-content">
            <div class="user-info">
              <a href="" class="username" target="_blank">
                <span class="name" style="max-width: 10em">{{ scope.username }}</span>
                <span blank="true" class="rank">
                  <u-icon size="24" v-html="useLevel(scope.level)"></u-icon>
                </span>
              </a>
            </div>
            <div class="social-info">
              <a href="" class="attention">
                <span>{{ scope.attention }}</span>
                <span>关注</span>
              </a>
              <a href="" class="follower">
                <span>{{ scope.follower }}</span>
                <span>粉丝</span>
              </a>
              <a href="" class="like">
                <span>{{ scope.like }}</span>
                <span>获赞</span>
              </a>
            </div>
            <div class="card-btn">
              <el-button type="primary">关注</el-button>
              <el-button>发消息</el-button>
            </div>
          </div>
        </div>
      </template>
    </u-comment>
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
  // 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
  // static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
  import emoji from '@/utils/emoji'
  import { reactive, ref } from 'vue'
  import { useClipboard } from '@vueuse/core'
  import { CommentApi, ConfigApi, useLevel, SubmitParamApi, UToast, createObjectURL,ReplyApi, usePage, ReplyPageParamApi, dayjs } from 'undraw-ui'
  
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



  const config = reactive<ConfigApi>({
    user: {
      id: 1,
      username: 'jack',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
      likeIds: [1, 2, 3]
    },
    emoji: emoji,
    comments: [],
    total: 10
  })
  
  // 用户信息是否加载
  const loading = ref(false)
  
  // 请求获取用户详细信息
  const showInfo = (uid: string, finish: Function) => {
    console.log(loading.value)
    loading.value = true
    console.log('获取用户信息: ' + uid)
    let userInfo
    setTimeout(() => {
      userInfo = {
        id: String(uid),
        username: '落尘' + uid,
        avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
        level: 6,
        like: 36011,
        attention: 15,
        follower: 6878
      }
      loading.value = false
      finish(userInfo)
    }, 200)
  }
  
  let temp_id = 100
  // 提交评论事件
  const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
    console.log('提交评论: ' + content, parentId, files)
  
    /**
     * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
     */
    let contentImg = files?.map(e => createObjectURL(e)).join('||')
    temp_id += 1
    const comment: CommentApi = {
      id: String(temp_id),
      parentId: parentId,
      uid: config.user.id,
      address: '来自江苏',
      content: content,
      likes: 0,
    //   createTime: '1分钟前',
      createTime: dayjs().subtract(5, 'seconds').toString(),
      contentImg: contentImg,
      user: {
        username: config.user.username,
        avatar: config.user.avatar,
        level: 6,
        homeLink: `/${temp_id}`
      },
      reply: null
    }
    setTimeout(() => {
      finish(comment)
      UToast({ message: '评论成功!', type: 'info' })
    }, 200)
  }
  // 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
  const like = (id: string, finish: () => void) => {
    console.log('点赞: ' + id)
    setTimeout(() => {
      finish()
    }, 200)
  }
  //回复分页
const replyPage = ({ parentId, pageNum, pageSize, finish }: ReplyPageParamApi) => {
  let tmp = {
    total: reply.total,
    list: usePage(pageNum, pageSize, reply.list)
  }
  setTimeout(() => {
    finish(tmp)
  }, 200)
}
  config.comments = [
    {
      id: '1',
      parentId: null,
      uid: '1',
      address: '来自上海',
      content:
        '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
      likes: 2,
      contentImg: 'https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp',
      createTime: dayjs().subtract(10, 'minute').toString(),
      user: {
        username: '落🤍尘',
        avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
        level: 6,
        homeLink: '/1'
      }
    }
  ]
  </script>
  
  <style lang="less" scoped>
  .user-card {
    display: flex;
    .user-content {
      flex: 1;
      margin-left: 16px;
      .user-info {
        .username {
          display: flex;
          align-items: center;
          text-decoration: none;
          .name {
            max-width: 10rem;
            font-weight: 500;
            font-size: 15px;
            color: #252933;
            line-height: 32px;
            margin-right: 4px;
          }
        }
      }
      .social-info {
        font-size: 12px;
        margin-bottom: 10px;
        a {
          text-decoration: none;
        }
        a:not(:first-child) {
          margin-left: 18px;
        }
        a span:last-child {
          margin-left: 3px;
          color: #9499a0;
        }
      }
    }
  }
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
   ::v-deep .reply:not(:first-child) {
        margin-top: 0rem;
    }
  </style>
  