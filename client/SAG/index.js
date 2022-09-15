/* ┌────────────────────────────────────────────────────────────────────────────┐  */

// apiRequest是一个封装了axios请求的函数
// https://github.com/mzabriskie/axios
// 你也可以在./client下自定义_apiRequest_方法来发起客户端网络请求
// easySignature 是使用签名算法对api参数进行加密，如果在api-config-list中配置了使用签名算法，则api调用中使用easySignature算法

/*  └────────────────────────────────────────────────────────────────────────────┘ */

// 本文件生成时间：15-09-2022 21:50

// import { easySignature } from './signature' // 手动使用
import api from './client'
import { forEach } from './utils'

// 
export function GetId (payload) {
	const { id } = payload
	const config = {
		method: 'get',
		url: `/automatic/users/${id}`,
	}
	const params = {}
	const paramsKeyList = ['obj']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// 
export function PostAutomaticUsers (payload) {
	const config = {
		method: 'post',
		url: `/automatic/users`,
	}
	const params = {}
	const paramsKeyList = ['obj']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// Endpoint to get the specific user.
export function GetId (payload) {
	const { id } = payload
	const config = {
		method: 'get',
		url: `/automatic_and_incremented/users/${id}`,
	}
	return api.Request(config)
}

// 
export function DeleteId (payload) {
	const { id } = payload
	const config = {
		method: 'delete',
		url: `/automatic_and_incremented/users/${id}`,
	}
	return api.Request(config)
}

// Endpoint to add a user.
export function PostAutomaticUsers (payload) {
	const config = {
		method: 'post',
		url: `/automatic_and_incremented/users`,
	}
	return api.Request(config)
}

// Endpoint added manually.
export function PatchId (payload) {
	const { id } = payload
	const config = {
		method: 'patch',
		url: `/manual/users/${id}`,
	}
	const params = {}
	const paramsKeyList = ['obj']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}

// 
export function HeadSecurity (payload) {
	const config = {
		method: 'head',
		url: `/security`,
	}
	const params = {}
	const paramsKeyList = ['obj']
	forEach(paramsKeyList, key => {
		if (payload[key]) {
			params[key] = payload[key]
		}
	})
	config.params = params
	return api.Request(config)
}


