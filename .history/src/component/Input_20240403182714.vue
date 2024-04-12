<template>
    <div class="emoji-container clearfix">
        <!-- 输入框 -->
        <div class="input-area" id="input-area" ref="editableInputAreaDiv" contenteditable="true" @input="handleInput">
            hello world
            <img src="https://cdn.sunofbeaches.com/emoji/1.png" alt="">
        </div>
        <!-- 上传照片 -->
        <div class="update-image">
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
                <el-icon><Plus /></el-icon>
                <template #file="{ file }">
                <div>
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                    <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                    >
                        <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                    >
                        <el-icon><Download /></el-icon>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                    >
                        <el-icon><Delete /></el-icon>
                    </span>
                    </span>
                </div>
                </template>
            </el-upload>

            <el-dialog class="dialog" v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
        </div>
        <div class="input-area-bar">
            <span class="emoji-txt" @click="emojiShow = !emojiShow"><i class="fa fa-smile-o"></i> 表情</span>
            
            <el-button type="primary" @click="publish">发布</el-button>
        </div>
        <transition name="fade">
             <div class="emoji-item-container" v-show="emojiShow" @mouseleave="hideEmoji">
                <div class="emoji-item-area">
                    <img v-for="(emoji, key) in 130" :key="key" @click="addEmoji(emoji)"
                        :src="'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png'" alt="" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Emoji",
    data() {
        return {
            emojiShow: false,
            lastEditRange: null,
            dialogImageUrl:'',
            dialogVisible:false,
            disabled: false,
        }
    },
    mounted() {
        // this.$refs['editableInputAreaDiv'].onclick = () => {
        //     // 获取选定对象
        //     let selection = window.getSelection()
        //     console.log(selection, selection.rangeCount, 'selection');
        //     // 设置最后光标对象
        //     if (selection.rangeCount > 0) {
        //         // 记录光标最后点击可编辑div中所选择的位置
        //         this.lastEditRange = selection.getRangeAt(0);
        //         console.log(selection.getRangeAt(0));
        //     }
        // }
    },
    methods: {
        //发布
        publish() {
            this.$refs['editableInputAreaDiv'].focus()
            let selObj = window.getSelection();
            alert(selObj.toString());
            let selection = window.getSelection()
            console.log(selection)
            console.log('发布内容：', selection.getRangeAt(0));
            console.log('发布内容：', selection.rangeCount);
            // // 获取元素
            // const myDiv = document.getElementById('input-area');

            // // 使用textContent获取文本内容
            // const textContent = myDiv.textContent;

            // // 使用innerText获取文本内容
            // const innerText = myDiv.innerText;

            // // 打印文本内容
            // console.log('textContent:', textContent);
            // console.log('innerText:', innerText);

            // 发布内容，这里可以根据需要进行处理
            console.log('发布内容：', this.textarea);
            this.dialogImageUrl

        },
        toggleEmoji() {
            this.emojiShow = !this.emojiShow;
        },
        hideEmoji() {
            this.emojiShow = false;
        },
        //输入框内出现表情
        addEmoji(emoji) {
            let edit = this.$refs['editableInputAreaDiv']
            edit.focus()
            let selection = window.getSelection()
            // 如果存在最后的光标对象
            if (this.lastEditRange) {
                console.log('last');
                // 选区对象清除所有光标
                selection.removeAllRanges();
                // 并添加最后记录的光标，以还原之前的状态
                selection.addRange(this.lastEditRange);

                // 创建表情图
                let img = document.createElement('img');
                img.src = 'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png';
                console.log(img);
                /*
                // 也可以这样创建img 
                let image = new Image();
                image.src = 'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png'; */

                // 获取到最后选择的位置
                var range = selection.getRangeAt(0);

                // 在此位置插入表情图
                range.insertNode(img)
                // range.insertNode(image) // 或者这样插入

                // false，表示将Range对象所代表的区域的起点移动到终点处
                range.collapse(false)

                // 记录最后的位置
                this.lastEditRange = selection.getRangeAt(0);
            } else {
                console.log('new')
                // 创建一个img标签（表情）
                let img = document.createElement('img');
                img.src = 'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png';
                console.log(img);
                // 将表情添加到可编辑的div中，作为可编辑div的子节点
                edit.appendChild(img)
                // 使用选取对象，选取可编辑div中的所有子节点
                selection.selectAllChildren(edit)
                // 合并到最后面，即实现了添加一个表情后，把光标移到最后面
                selection.collapseToEnd()
                return
            }
        },
        //缩略图
        handlePictureCardPreview(file){
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        //下载
        handleDownload(file){
            console.log(file)
        },
        //移除
        handleRemove(file){
            console.log(file)
        },
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
        height: 3rem;
        border: 1px solid #e9e9e9;
        outline: none;
        padding: 0.2rem;
        font-size: 0.24rem;
        overflow-y: scroll;
        transition: border-color 0.4s ease; /* 添加过渡效果 */

        &:focus { //输入框点击后的边框
            border: 1px solid rgb(0, 153, 255);
        }

        img {
            width: 0.35rem;
            height: 0.35rem;
            vertical-align: bottom;
            margin: 0 5px;;
        }

    }

    .input-area-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:0.2rem;
        line-height: 20px;
        font-size:0.20rem;
        height: 30px;

        .emoji-txt {
            color: #4485f9;
            cursor: pointer;
        }


    }
}
.update-image{
    position: absolute;
    top:89.4%;
}
//图片预览
.dialog{
  img {
      border-style: none;
      width: 100%;
      margin-top: -4%;
  }
}
.el-upload-list--picture-card .el-upload-list__item-actions span+span {
    margin-left: 0.3rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out; /* 过渡动画的持续时间和缓动函数 */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; /* 进入和离开时的初始状态 */
}
.emoji-item-container {
    background-color: #fff;
    height: 1.5rem;
    width: 8.5rem;
    border-radius: 5px;
    padding: 5px;
    overflow-y: auto;
    margin-top: 14px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .028);
    position: absolute; /* 绝对定位 */
    top: 112%; /* 居中显示 */
    left: 38.3%; /* 居中显示 */
    transform: translate(-50%, -50%); /* 居中显示 */
    z-index: 9999; /* 设置较高的z-index值 */
    background-color: #fff; /* 背景色 */
    border-radius: 5px; /* 圆角 */
    padding: 5px; /* 内边距 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */


    .emoji-item-area {

        img {
            cursor: pointer;
            width: 0.35rem;
            height: 0.35rem;
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

