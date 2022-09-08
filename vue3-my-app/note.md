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

### query

```typescript
/* Interface Commodity {
  name: string,
  price: number,
  id: number,
  // Interface 是可扩展的并非最终形态, 所以需要用索引签名来限制可能会有的新增属性保证与待检查的类型一致
  [params: string]: string | number
} */

// type 不可扩展扩展可以确保是最终形态
type Commodity = {
  name: string,
  price: number,
  id: number
}

interface ToDetail {
  (commodity: Commodity): void
}
const router = useRouter()
const toDetail: ToDetail = commodity => {
	router.push({
		path: '/regist',
		query: commodity
	})
	console.log(commodity)
}
```

1. 使用 query 传就要用 query 接

```typescript
<script setup lang="ts">
const msg = $ref('regist page')

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <div>{{ route.query.name }}</div>
  <div>{{ route.query.price }}</div>
  <div>{{ route.query.id }}</div>
  <br>
  <button @click="router.back">
    返回
  </button>
</template>
```

2. 使用 state 然后用 history.state 接

``` typescript
const toDetail: ToDetail = commodity => {
	router.push({
		/* Path: '/regist',
		Query: commodity */
		// path: '/regist/:id/name/:name/price/:price',
		name: 'Regist',
		state: commodity
	})
}
```

```typescript
<script setup lang="ts">
const msg = $ref('regist page')

// Const route = useRoute()
const router = useRouter()
// Console.log(history.state)
const item = ref(history.state)
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <!-- <div>{{ route.query.name }}</div>
  <div>{{ route.query.price }}</div>
  <div>{{ route.query.id }}</div> -->
  <div>{{ item.name }}</div>
  <div>{{ item.id }}</div>
  <div>{{ item.price }}</div>
  <br>
  <button @click="router.back">
    返回
  </button>
</template>
```

3. 配置路由的定义去匹配 path , 使用 params 接

```typescript
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: async () => import('../components/HelloWorld.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: async () => import('../components/UserLogin.vue')
	},
	{
		// Path: '/regist',
		path: '/regist/id/:id/name/:name/price/:price',
		name: 'Regist',
		component: async () => import('../components/UserRegist.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
```


```typescript
const toDetail: ToDetail = commodity => {
	router.push({
		/* Path: '/regist',
		Query: commodity */
		// path: '/regist/id/:id/name/:name/price/:price',
		/* name: 'Regist',
		state: commodity */
		name: 'Regist',
		params: commodity
	})
}
```


```html
  <div>{{ route.params.name }}</div>
  <div>{{ route.params.id }}</div>
  <div>{{ route.params.price }}</div>
```

4. 与 route 解耦, 更灵活的方法 path 配合 props

这种方式自己实践当只传一个参数然后查询 item 来显示数据不会刷新丢失, 多个参数就丢失

```typescript
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: async () => import('../components/HelloWorld.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: async () => import('../components/UserLogin.vue')
	},
	{
		// Path: '/regist',
		path: '/regist/id/:id/name/:name/price/:price',
		name: 'Regist',
		component: async () => import('../components/UserRegist.vue'),
		props: true
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
```

`接收方`
```typescript
<script setup lang="ts">
const msg = $ref('regist page')

const router = useRouter()

const props = defineProps<{
  name: string,
  id: string,
  price: string
}>()
</script>

<template>
  <div>{{ props.name }}</div>
  <div>{{ props.id }}</div>
  <div>{{ props.price }}</div>
</template>
```
