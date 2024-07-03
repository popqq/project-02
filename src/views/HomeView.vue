<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>工程首页</h1>
    <router-link to="/reg">注册</router-link> |
    <router-link to="/login">登录</router-link> |
    <router-link to="/result">搜索</router-link> |
    <router-link to="/list">list</router-link>
  </div>

  <router-view/>
</template>