<template>
    <div class="emoji-container clearfix">
        <!-- 输入框 -->
        <div class="input-area" 
            id="input-area" 
            ref="editableInputAreaDiv" 
            contenteditable="true" 
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            :class="{ 'placeholder-text': content==='' }"
            >
            <!-- <span v-show="content === '' && !focused" class="placeholder-text">快来一起讨论吧！</span> -->
            {{ content==='' && !focused ? '快来一起讨论吧！' : '' }}
            <!-- <img src="https://cdn.sunofbeaches.com/emoji/1.png" alt=""> -->
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
            <div>
                <span class="emoji-txt" @click="emojiShow = !emojiShow"><i class="fa fa-smile-o"></i> 表情</span>
                <span class="emoji-txt" @click="addTopic">
                    <svg t="1712823358619" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19195" width="17" height="17"><path d="M704 298.666667l36.394667-181.956267A39.035733 39.035733 0 0 1 778.666667 85.333333a26.235733 26.235733 0 0 1 25.728 31.377067L768 298.666667h138.666667a32 32 0 1 1 0 64H755.2l-59.733333 298.666666h211.2a32 32 0 1 1 0 64H682.666667l-36.394667 181.956267A39.035733 39.035733 0 0 1 608 938.666667a26.235733 26.235733 0 0 1-25.728-31.377067L618.666667 725.333333H320l-36.394667 181.956267A39.035733 39.035733 0 0 1 245.333333 938.666667a26.235733 26.235733 0 0 1-25.728-31.377067L256 725.333333H117.333333a32 32 0 1 1 0-64H268.8l59.733333-298.666666H117.333333a32 32 0 0 1 0-64H341.333333l36.394667-181.956267A39.035733 39.035733 0 0 1 416 85.333333a26.235733 26.235733 0 0 1 25.728 31.377067L405.333333 298.666667h298.666667z m-12.8 64H392.533333l-59.733333 298.666666h298.666667l59.733333-298.666666z" fill="#4485f9" p-id="19196"></path></svg>
                    话题
                </span> 
            </div>
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
            content: "", // 用于保存输入框的文字内容
            focused: false, // 输入框是否获得焦点的标志
        }
    },
    mounted() {
        this.$refs['editableInputAreaDiv'].onclick = () => {
            // 获取选定对象
            let selection = window.getSelection()
            // console.log(selection, selectiosn.rangeCount, 'selection');
            // 设置最后光标对象
            if (selection.rangeCount > 0) {
                // 记录光标最后点击可编辑div中所选择的位置
                this.lastEditRange = selection.getRangeAt(0);
                // console.log(selection.getRangeAt(0));
            }
        }
    },
    computed: {
        // contentStyle() {
        // return {
        //     color: this.content ? 'black' : '#ccc', // 根据内容是否为空设置文字颜色
        // };
        // },
    },
    methods: {
        //获得焦点
        handleFocus() {
            this.focused = true;
        },
        //失去焦点
        handleBlur() {
            this.focused = false;
            
            if(this.content==='' && !this.focused){
                console.log("???")
            }else{
                console.log(">>>"+this.content)
            }
        },
        handleInput(event) {
            // 更新content的值，保持与输入框内容同步
            // let edit = this.$refs["editableInputAreaDiv"];
            // this.content = edit.innerHTML; // 获取文本框内的 HTML 内容，包含表情图片
            // this.content = event.target.innerText.trim(); // 去除首尾空格
            this.content = this.$refs.editableInputAreaDiv.innerHTML;
            // console.log("发布内容:"+this.content)
        },
        //发布
        publish() {
            // this.$refs['editableInputAreaDiv'].focus()
            // let selection = window.getSelection()
            // console.log(selection)

            let edit = this.$refs["editableInputAreaDiv"];
            let content = edit.innerHTML; // 获取文本框内的 HTML 内容，包含表情图片
            content = '<a>#什么什么#</a> 好吧好吧???<div><br></div>'
            console.log("发布内容:", content);
            this.$emit('send-data', content);
            
        },
        toggleEmoji() {
            this.emojiShow = !this.emojiShow;
        },
        hideEmoji() {
            this.emojiShow = false;
        },
        //输入框内出现表情
        addEmoji(emoji) {
            // 添加表情到输入框中
            let edit = this.$refs["editableInputAreaDiv"];
            edit.focus();

            // 获取光标所在位置的Range对象
            let selection = window.getSelection();
            // let range = selection.getRangeAt(0);

            // // 创建表情图像元素
            // let img = document.createElement('img');
            // img.src = `https://cdn.sunofbeaches.com/emoji/${emoji}.png`;

            // // 插入表情到光标位置后面
            // range.insertNode(img);
            // range.collapse(false); // 将光标移动到插入表情后面

            // // 更新content的值，保持与输入框内容同步
            // this.content = edit.innerText;

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
                img.style.width = '0.35rem';
                console.log(img);
                /*
                // 也可以这样创建img 
                let image = new Image();
                image.src = 'https://cdn.sunofbeaches.com/emoji/' + emoji + '.png'; */

                // 获取到最后选择的位置
                var range = selection.getRangeAt(0);
                console.log(range);
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
        //添加话题
        addTopic(){
            // 1. 获取输入框的 DOM 元素
            let inputArea = this.$refs.editableInputAreaDiv;
            
            // 2. 在输入框内容最前面添加话题标记，并保持内容不变
            inputArea.innerHTML = '#话题#' ;

            // 3. 选择“话题”两个字
            let range = document.createRange();
            let selection = window.getSelection();
            let textNode = inputArea.firstChild; // 获取输入框的文本节点
            range.setStart(textNode, 1); // 设置范围的起点为“话题”后的第一个字符
            range.setEnd(textNode, 3); // 设置范围的终点为“话题”后的第三个字符（不包括）
            selection.removeAllRanges();
            selection.addRange(range);
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
    .placeholder-text {
        color: #ccc; // 设置提示文字的颜色为浅灰色
    }

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
            margin-right: 0.2rem;
        }


    }
}
.update-image{
    position: absolute;
    top: 8.17rem;
    padding-left: 0.01rem;
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

