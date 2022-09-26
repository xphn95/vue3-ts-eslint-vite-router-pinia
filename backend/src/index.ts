import type {Express, Request, Response} from 'express'
import express from 'express'

const app: Express = express()

app.get('/index', (req: Request, res: Response) => {
	res.header('Access-Control-Allow-Origin', '*')
	if (req.query.user === 'admin' && req.query.password === '1234') {
		res.json({
			code: 200,
			route: [
				{
					path: '/demo1',
					name: 'Demo1',
					component: 'Demo1.vue'
				},
				{
					path: '/demo2',
					name: 'Demo2',
					component: 'Demo2.vue'
				},
				{
					path: '/demo3',
					name: 'Demo3',
					component: 'Demo3.vue'
				}
			]
		})
	} else if (req.query.user === 'admin1' && req.query.password === '1234') {
		res.json({
			code: 200,
			route: [
				{
					path: '/demo1',
					name: 'Demo1',
					component: 'Demo1.vue'
				},
				{
					path: '/demo2',
					name: 'Demo2',
					component: 'Demo2.vue'
				}
			]
		})
	} else {
		res.json({
			code: 400,
			message: '账号密码错误'
		})
	}
})

app.listen(9999, () => {
	console.log('http://localhost:9999')
})
