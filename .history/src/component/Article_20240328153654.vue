<template>
  <div class="content">
    <h1>{{ props.title }}</h1>
    <div v-html="transformMsg(props.value)" class="markdown-viewer"></div>
    <div v-html="showCode(props.value)" ></div>
    <div v-html="renderMarkdown(markdownContent)"></div>
  </div>
</template>

<script setup >
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import showdown from 'showdown';
import showdownKatex from 'showdown-katex';
import marked from 'marked';
const props = defineProps({
    title: { type:String },
    value: { type: String },
    class: { type: String },
});
const data = reactive({})

function showCode(code){
    const converter = new showdown.Converter();
    return converter.makeHtml(code);
}

function transformMsg(msgInfo = '') {
    msgInfo = msgInfo.replaceAll('<br  />', '\n'); // 一些处理
    let converter = new showdown.Converter({
        // 详细配置见：https://github.com/showdownjs/showdown#valid-options
        tables: true, // 支持table语法
        strikethrough: true, // 将~~strikethrough~~ 识别为 <del>strikethrough</del>
        underline: true, // __test__中的下划线不识别为<em> 和 <strong>
        extensions: [
        showdownKatex({
            // 使用方式见：https://obedm503.github.io/showdown-katex
            // 详细配置见：https://katex.org/docs/options.html
            throwOnError: false, // 公式有错时，是否抛出错误
            displayMode: false, // 如果为false，公式以inline方式渲染
            delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '~', right: '~', display: false, asciimath: true },
            ],
        }),
        ],
    });
    return converter.makeHtml(msgInfo);
}
const markdownContent = `
Python面向对象编程是一种重要的编程范式，它是Python编程语言的核心之一。在面向对象编程中，一切皆为对象，通过类和对象来组织和管理代码，实现数据和行为的封装、继承和多态。

## 面向对象编程思想

面向对象编程思想是一种程序设计思想，它将现实世界中的事物抽象成对象，并通过对象之间的交互来解决问题。面向对象编程使得程序更加模块化、灵活和易于维护。

## 类和对象

在Python中，类是对象的抽象，用于描述具有相同属性和方法的一组对象。对象是类的实例，具有类所定义的属性和方法。通过类和对象，可以实现数据的封装和代码的重用。例如，我们可以定义一个简单的Person类：

\`\`\`python
# 定义一个Person类

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

# 创建一个Person对象

person = Person("Alice", 30)
print(person.greet())
\`\`\`

## 继承

继承是面向对象编程中的重要概念，它允许一个类（子类）继承另一个类（父类）的属性和方法，并可以在此基础上进行扩展。通过继承，可以实现代码的重用和扩展。例如，我们可以定义一个Student类，它继承自Person类：

\`\`\`python
# 定义一个Student类，继承自Person类

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def study(self):
        return f"{self.name} is studying."

# 创建一个Student对象

student = Student("Bob", 20, "12345")
print(student.greet())
print(student.study())
\`\`\`

## 封装

封装是面向对象编程的重要特性之一，它指的是将数据和方法封装在类的内部，通过公共接口来访问和修改数据，保证了数据的安全性和代码的灵活性。例如，我们可以将类的属性设置为私有属性，通过公共方法来访问和修改这些属性。

## 多态

多态是面向对象编程的另一个重要概念，它允许不同的对象对同一消息做出不同的响应。多态提高了代码的灵活性和可扩展性，使得程序更加易于理解和维护。例如，我们可以定义一个动物类Animal，以及不同的子类（如Dog、Cat），它们都实现了相同的方法（如make_sound），但具体的实现不同。

## 结论

Python面向对象编程是Python编程中的重要组成部分，掌握了面向对象编程思想、类、对象、继承等相关概念和用法，可以帮助你编写更加模块化、可重用、易维护的Python代码。通过不断的学习和实践，相信你能够成为一名优秀的Python开发者！
`;

const renderMarkdown = (markdown) => {
  return marked(markdown);
};
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.content{
    width:100wh;
}

.katex-html {
    display: none;
  }
.markdown-viewer {
    width: 100%;
    overflow-wrap: break-word;
    td {
        border: 1px solid #dfe2e5;
        padding: 5px;
    }
    th {
        border: 1px solid #dfe2e5;
        padding: 5px;
        text-align: center;
    }
    tr:nth-child(2n-1) {
        background-color: #fafbfc;
    }
}
</style>