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
      <template #operate="scope">
        <Operate :comment="scope" @remove="remove" />
        </template>
    </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/utils/emoji'
import { reactive, ref } from 'vue'
import { CommentApi, ConfigApi, useLevel, SubmitParamApi, UToast, createObjectURL,ReplyApi, usePage, ReplyPageParamApi, dayjs } from 'undraw-ui'
import Operate from './Operate.vue'

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
    // total: 10
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
            username: '落尘',
            avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
            level: 6,
            homeLink: '/1'
        }
    }
]
const reply = {
  total: 6,
  list: [
    {
      id: '31',
      parentId: '3',
      uid: '6',
      address: '来自成都',
      content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
      likes: 7,
      createTime: '1天前',
      user: {
        username: '陆呈洋',
        avatar:
          'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/31'
      }
    },
    {
      id: '32',
      parentId: '3',
      uid: '7',
      address: '来自杭州',
      content: '深思熟虑的结果往往就是说不清楚。',
      likes: 3,
      createTime: '2天前',
      user: {
        username: '哑谜',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 3,
        homeLink: '/32'
      }
    },
    {
      id: '33',
      parentId: '3',
      uid: '8',
      level: 2,
      address: '来自深圳',
      content: '当我跨过沉沦的一切，向着永恒开战的时候，你是我的军旗。',
      createTime: '5天前',
      user: {
        username: 'Mia',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919181554-L2ZO.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        likes: 3,
        homeLink: '/33'
      }
    },
    {
      id: '34',
      parentId: '3',
      uid: '9',
      address: '来自西安',
      likes: 34,
      content: '不要由于别人不能成为我们所希望的人而愤怒，因为我们自己也难以成为自己所希望的人。',
      createTime: '1天前',
      user: {
        username: 'poli301',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/34'
      }
    },
    {
      id: '35',
      parentId: '3',
      uid: '10',
      username: 'fish_eno',
      avatar:
        'https://static.juzicon.com/avatars/avatar-190919180320-NAQJ.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
      level: 6,
      link: '/35',
      likes: 32,
      address: '来自武汉',
      content: '世上莫名其妙走霉运的人多的是，都是一边为命运生气，一边化愤怒为力量地活着。',
      createTime: '11小时前',
      user: {
        username: 'poli301',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/34'
      }
    },
    {
      id: '36',
      parentId: '3',
      uid: '11',
      likes: 21,
      address: '来自上海',
      content: '这世上所有的不利情况，都是当事者能力不足造成的',
      createTime: '10小时前',
      user: {
        username: '十三',
        avatar:
          'https://static.juzicon.com/user/avatar-f103e42d-a5c9-4837-84e3-d10fad0bcb36-210108053135-E90E.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/36'
      }
    },
    {
      id: '37',
      parentId: '3',
      uid: '12',
      likes: 18,
      address: '来自广州',
      content: ' 绝望自有绝望的力量，就像希望自有希望的无能。',
      createTime: '9小时前',
      user: {
        username: 'D.z.H****',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919181051-M3HK.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 3,
        homeLink: '/37'
      }
    },
    {
      id: '38',
      parentId: '3',
      uid: '13',
      likes: 17,
      address: '来自重庆',
      content: ' 无论这个世界对你怎样，都请你一如既往的努力，勇敢，充满希望。',
      createTime: '8小时前',
      user: {
        username: '繁星Cong2',
        avatar:
          'https://static.juzicon.com/user/avatar-f81b3655-03fd-485c-811b-4b5ceaca52b6-210817180051-YTO4.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 1,
        homeLink: '/38'
      }
    }
  ]
} as ReplyApi
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

::v-deep .reply:not(:first-child) {
    margin-top: 0rem;
}
</style>
