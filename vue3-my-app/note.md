## 路由模式

| mode | vue2 | vue3 | 对应原生原理 | 监听前进后退 |
| - | - | - | - | - |
| | history | createWebHistory | location.hash | window.addEventListener('hashchange', () => {}) |
| | hash | createWebHashHistory | history.pushState({}, '', '/login') 这个不会被前进后退监听到, 需要手动刷新 | window.addEventListener('popstate', () => {})
| (SSR) | abstact | createMemoryHistory |

## 命名路由


```javascript
<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const hello = $ref('hello')
console.log(hello)

const router = useRouter()
// Push 和 to 属性的行为是一样的
/* const toPage = (path: string) => {
	router.push(path)
} */
const toPage = (params: Pick<RouteRecordRaw, 'path'>) => {
	router.push(params)
}
/* Const toPage = (params: Pick<RouteRecordRaw, 'name'>) => {
	router.push(params)
} */
</script>

<template>
  <div>{{ hello }}</div>
  <!-- 使用路径 -->
  <!-- <router-link to="/">
    home
  </router-link>
  <router-link to="/login">
    login
  </router-link>
  <router-link to="/regist">
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
```

## 历史记录

浏览器的前进后退

### 想不留下历史记录(比如登录页面)有如下方法

#### router-link 的 replace 属性

#### router.push()

### 前进/后退

1. router.go()
2. router.back()

## 路由传参
