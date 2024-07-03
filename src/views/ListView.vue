<template>
    <div>
        <h3>简单的员工列表</h3>
        <p>{{arr}}</p>
        <ol>
            <li v-for="name in arr">{{name}}</li>
        </ol>
        <ul>
            <!-- V-for指令,用于遍历数组 (临时变量名, 循环变量) in 数组 -->
            <li v-for="name in arr">{{name}}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const arr = ref([
    ["Jack", "Rose", "Tom", "Jerry"]
]);
</script>

<style scoped>
/* 添加样式 */
</style>