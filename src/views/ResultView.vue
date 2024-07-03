<template>
  <div>
    <h3>以上是搜索出来的结果:</h3>
    <p v-for="item in 5" :key="item">xyz ...</p>
    <!-- 使用 vue中的循环指令 v-for 
        item是临时的变量名
        in 20 表示循环20次 
        添加 :key 以提高性能和避免警告
        -->
    <!-- Vue 提供的语法, 用于取Vue中绑定的值 -->
    {{emp}}
    <p>姓名：{{emp.name}}</p>
    <p>薪资：{{emp.salary}}</p>
    <p>职业：{{emp.job}}</p>

    <button @click="add">加薪</button>
    <!-- onclick 是原生的js事件处理; @click是Vue中绑定点击事件的写法 -->
  </div>
</template>

<script setup>
import { ref } from "vue";

// 定义一个 响应式 变量, 必须使用 ref ()函数包裹下
// 响应式变量, 就是当数据发生变化时, 页面会自动更新, 一般使用const声明
const emp = ref({ name: "张三", salary: 10000.0, job: "程序员" });

//使用箭头函数 定义方法
const add = () => {
    alert("加薪成功");
    emp.value.salary += 1000; // 增加薪资
    console.log(emp.value.salary);
};

// 定义一个 普通 方法
function add1() {
    alert("加薪成功");
    alert(emp.value.salary);
    emp.value.salary += 1000; // 增加薪资
    console.log(emp.value.salary);
}
</script>

<script>
// 定义一个 普通 方法
function add1() {
    emp.value.salary += 1000; // 增加薪资
    alert("加薪成功");
    alert(emp.value.salary);
    console.log(emp.value.salary);
};
</script>

<style scoped></style>