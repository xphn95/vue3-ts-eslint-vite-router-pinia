<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const hello = $ref('hello')
console.log(hello)

const router = useRouter()
// Push 和 to 属性的行为是一样的
/* const toPage = (path: string) => {
	router.push(path)
} */
/* Const toPage = (params: Pick<RouteRecordRaw, 'name'>) => {
	router.push(params)
} */
const toPage = (params: Pick<RouteRecordRaw, 'path'>) => {
	router.replace(params)
}
</script>

<template>
  <div>{{ hello }}</div>
  <!-- 使用路径 -->
  <!-- <router-link
    to="/"
    replace
  >
    home
  </router-link>
  <router-link
    to="/login"
    replace
  >
    login
  </router-link>
  <router-link
    to="/regist"
    replace
  >
    regist
  </router-link> -->
  <!-- 命名路由 -->
  <!-- <router-link :to="{name: 'Home'}">
    home
  </router-link>
  <router-link :to="{name: 'Login'}">
    login
  </router-link>
  <router-link :to="{name: 'Regist'}">
    regist
  </router-link> -->
  <!-- 编程式导航 -->
  <!-- path: String -->
  <!-- <button @click="toPage('/')">
    home
  </button>
  <button @click="toPage('/login')">
    login
  </button>
  <button @click="toPage('/regist')">
    regist
  </button> -->
  <!-- params: Pick<RouteRecordRaw, 'name'> -->
  <!-- <button @click="toPage({name: 'Home'})">
    home
  </button>
  <button @click="toPage({name: 'Login'})">
    login
  </button>
  <button @click="toPage({name: 'Regist'})">
    regist
  </button> -->
  <!-- params: Pick<RouteRecordRaw, 'path'> -->
  <button @click="toPage({path: '/'})">
    home
  </button>
  <button @click="toPage({path: '/login'})">
    login
  </button>
  <button @click="toPage({path: '/regist'})">
    regist
  </button>
  <router-view />
</template>
