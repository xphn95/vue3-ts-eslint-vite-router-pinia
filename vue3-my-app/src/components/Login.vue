<script setup lang="ts">
import { FormItemRule, FormInstance } from 'element-plus'
import initRouter from '~/service/index.js'

type FormInline = {
  user: string,
  password: string
}

type Rules = {
  [K in keyof FormInline]: Array<FormItemRule>
}

const formInline = reactive<FormInline>({
	user: '',
	password: ''
})

const rules = reactive<Rules>({
	user: [{
		required: true,
		message: '输入账号(必填)',
		type: 'string'
	}],
	password: [{
		required: true,
		message: '输入密码(必填)',
		type: 'string'
	}]
})

const router = useRouter()

const ruleFormRef = ref<FormInstance>()

const addRouter = async (params: Record<string, string>) => {
	const data = await initRouter<Array<Record<'path' | 'name' | 'component', string>>>({ params })
	if (data.code === 200) {
		data.route?.forEach(v => {
			console.log(v)
			router.addRoute({
				path: v.path,
				name: v.name,
				component: async () => import(`../components/${v.component}`)
			})
		})
	}
}

const onSubmit = async () => {
	if (!ruleFormRef.value) {
		return
	}

	await ruleFormRef.value?.validate(valid => {
		if (valid) {
			router.push({ path: '/index' })
			localStorage.setItem('token', '1')
			addRouter(formInline)
		} else {
			ElMessage.error('要输入完整')
		}
	})
}
</script>

<template>
  <div
    h-full
    flex
    justify-center
    items-center
  >
    <el-card class="box-card">
      <el-form
        ref="ruleFormRef"
        :model="formInline"
        class="demo-form-inline"
        :rules="rules"
      >
        <el-form-item
          label="账号:"
          prop="user"
        >
          <el-input
            v-model="formInline.user"
            placeholder="输入账号"
          />
        </el-form-item>
        <el-form-item
          label="密码:"
          prop="password"
        >
          <el-input
            v-model="formInline.password"
            type="password"
            placeholder="输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit()"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
