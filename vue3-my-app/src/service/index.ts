import axios from 'axios'
import type { ResponseResult } from '~/service/typings'

interface InitRouterOption {
	params: Record<string, string>;
}

export async function initRouter<T>(op: InitRouterOption) {
	return axios.get<ResponseResult<T>>('http://localhost:9999/index', op)
		.then(res => res.data)
}

export default initRouter
