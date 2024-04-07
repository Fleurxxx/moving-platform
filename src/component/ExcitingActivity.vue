<template>
    <div class="all-frame">
        <div class="row-one-frame">
            <div class="first-block">精彩活动</div>
            <div class="remain-block">
                <div class="text-title" v-for="i in 6" :key="i" @click="changeClass(i - 1)">{{ data[i - 1] }}</div>


            </div>
            <el-icon class="to-detail">
                <Right />
            </el-icon>

        </div>

        <div class="row-two-frame">
            <div class="small-title">{{ information[0]["smallTitle"] }}</div>
            <div class="big-title">{{ information[0]["bigTitle"] }}</div>
            <div class="uni-content">{{ information[0]["content"] }}</div>
        </div>
        <div class="row-three-frame"> <a class="link-to">了解详情</a></div>


    </div>

</template>
<script setup>
import {ref} from 'vue'
const data = [
    '格致论道',
    '西湖论剑安全特训营',
    '新品发布',
    '第二直播间',
    '掌上论剑',
    '西湖论剑10周年回顾'
]
const information = [{
    'smallTitle': '格致论道',
    'bigTitle': '让“圈外人”关注网络安全，让“冷”科普做到“热”传播',
    'content': '5月5日 18:30 “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展',

}]
const changeClass = (index) => {
    console.log(index);
    document.getElementsByClassName('text-title')[0].classList.add('active');
    let activeElements = document.querySelectorAll('.active');
    activeElements.forEach(element => {
        element.classList.remove('active');
    });
    // 将点击的元素设置为 'active'
    document.getElementsByClassName('text-title')[index].classList.add('active');
    var allFrameElement = document.querySelector('.all-frame');

    // 设置背景图片的 URL 为 "1.png"
    allFrameElement.style.backgroundImage = 'url('+images.value[index]+')';
}
const images = ref([
    '../assets/image/common/1.png', '../assets/image/common/2.jeg', '../assets/image/common/3.jeg', '../assets/image/common/4.png',
]);
</script>
<style lang="less" scoped>
.all-frame {
    width: 100%;
    height: 80%;
    background-image: url( '../assets/image/common/1.png');
    background-size: cover;
    height: 85vh;
    width: 98.8vw;
    padding: 0.5rem;
    margin: 0;
    z-index: -100;

    .row-one-frame {
        width: 80vw;
        height: 12vh;
        margin: 1vh auto;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 0.2rem;
        display: flex;
        border: white solid 0px;
        background: white;


        .first-block {
            background: linear-gradient(to right, rgba(34, 137, 201, 0.736), rgba(6, 187, 178, 0.702));
            color: white;
            font-size: 0.3rem;
            font-weight: 900;
            padding: 0.4rem;
            padding-left: 0.55rem;
            border-radius: 0.2rem;
            height: 100%;
            width: 15%;

        }

        .remain-block {
            display: flex;
            color: black;
            margin-left: 0.6rem;
            font-size: 0.18rem;

            .text-title {
                margin: 0.5rem;
            }

        }

        .to-detail {
            margin-top: 0.53rem;
            transform: scale(1.3);
            color: rgb(90, 173, 213);
        }

    }

    .row-two-frame {
        color: white;
        margin: 1vh auto;
        width: 80vw;
        height: 32vh;
        margin-top: 1rem;

        .small-title {
            font-size: 0.3rem;
        }

        .big-title {
            margin-top: 0.2rem;
            font-size: 0.4rem;
        }

        .uni-content {
            margin-top: 0.3rem;
            width: 40%;
            line-height: 0.4rem;
            font-size: 0.2rem;


        }


    }

    .row-three-frame {
        width: 80vw;
        height: 12vh;
        margin: 1vh auto;

        .link-to {
            --animate-duration: 1s;
            --animate-delay: 1s;
            --animate-repeat: 1;
            --load-svg: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiMxOThjZmYiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMiIgY3g9IjE0IiBjeT0iMTQiIHI9IjEyIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCwyNkM3LjM3MiwyNiwyLDIwLjYyOSwyLDE0Ij4KICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgICAgICAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgICAgICAgICAgICBmcm9tPSIwIDE0IDE0IgogICAgICAgICAgICAgICAgICAgIHRvPSIzNjAgMTQgMTQiCiAgICAgICAgICAgICAgICAgICAgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
            --load-svg-w: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmZmZmYiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMiIgY3g9IjE0IiBjeT0iMTQiIHI9IjEyIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCwyNkM3LjM3MiwyNiwyLDIwLjYyOSwyLDE0Ij4KICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgICAgICAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgICAgICAgICAgICBmcm9tPSIwIDE0IDE0IgogICAgICAgICAgICAgICAgICAgIHRvPSIzNjAgMTQgMTQiCiAgICAgICAgICAgICAgICAgICAgZHVyPSIxcyIKICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
            --load-gif: url("data:image/gif;base64,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");
            --color-primary: #198cff;
            --color-primary-like: #6619ff;
            --color-secondary: #475b66;
            --color-secondary-like: #63a0be;
            --color-danger: #dc3545;
            --color-danger-like: #ffc000;
            --color-success: #41a358;
            --color-success-like: #b2d956;
            --color-warning: #ffc107;
            --color-warning-like: #ffde7a;
            --color-info: #14ccc9;
            --color-info-like: #2c7be6;
            --color-ad: #ff8400;
            --color-ad-like: #ffdd23;
            -webkit-text-size-adjust: none;
            font-size: 0.2rem;
            list-style: none;
            visibility: visible;
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
            flex-shrink: 0;
            vertical-align: top;
            display: block;
            border-radius: 0.2rem;
            text-align: center;
            cursor: pointer;
            transition: .5s;
            background-image: linear-gradient(45deg, #2b76bc 0, #2ba9bd 51%, #2b76bc 100%) !important;
            background-size: 200%auto !important;
            text-decoration: none;
            width: 1.8rem;
            height: 0.5rem;
            line-height: 0.5rem;
            color: #fff;
            background: linear-gradient(to right, #2b76bc, #2db1ba);
        }


    }

}

.active {
    font-size: 0.22rem;
    color: rgba(6, 187, 178, 0.702);
}
</style>