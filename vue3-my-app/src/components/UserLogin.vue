<script setup lang="ts">
import { data } from './data.json'
const msg = $ref('login page')

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
		/* Path: '/regist',
		query: commodity */
		// path: '/regist/id/:id/name/:name/price/:price',
		// 利用 history
		/* name: 'Regist',
		state: commodity */
		// path 配合 params
		name: 'Regist',
		params: commodity
	})
}
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <table>
    <thead>
      <tr>
        <th>品牌</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item of data"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td @click="toDetail(item)">
          查看详情
        </td>
      </tr>
    </tbody>
  </table>
</template>
