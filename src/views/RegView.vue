<template>
    <h1>注册页面</h1>
    <router-link to="/">返回首页</router-link>
</template>

<!-- setup表示使用Vue中的 组合式 写法, 方便于整理数据和方法在一起, 易于复用 -->
<script setup>

const emp = ref({
    name: '张三',
    salary: 9000.0,
    job: '程序员'
})

const { name, age } = emp

console.log(name, age)
</script>