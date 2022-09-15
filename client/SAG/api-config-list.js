// 本文件是输入json到js的映射配置表，可以添加相关字段，但是不要添加新的api元素，不然不会过滤掉
/* ┌────────────────────────────────────────────────────────────────────────────┐  */
/**
* 默认字段
* @param {description} [string] api的描述
* @param {method} [string] api的请求方法
* @param {path} [string] api请求后缀地址
* @param {parameters} [string] api请求时可能需要的参数
* @param {tags} [string] api的标签
*//*  └────────────────────────────────────────────────────────────────────────────┘ */

/* ┌────────────────────────────────────────────────────────────────────────────┐  */
/**
* 可选字段
* @param {needAuth} [bool] true时调用api时会读取用户信息, !仅仅是在api的function内部读出userid与token，调用时仍要保证传入用户信息，可使用封装函数callBindAuth
* @param {easySignature} [bool] true时调用api会生成参数签名
* @param {formData} [bool] true时调用api时使用表单提交的方法配置: api.formDataRequest
*/
/*  └────────────────────────────────────────────────────────────────────────────┘ */
// 本文件生成时间：15-09-2022 21:50

const configList = [
	{
		description: "",
		method: "get",
		path: "/automatic/users/{id}",
		parameters: {
			path: [
				{
					key: "id",
					require: true
				}
			],
			query: [
				{
					key: "obj",
					require: "undefined"
				}
			]
		},
		tags: "undefined",
		name: "GetId"
	},
	{
		description: "",
		method: "post",
		path: "/automatic/users",
		parameters: {
			query: [
				{
					key: "obj",
					require: "undefined"
				}
			]
		},
		tags: "undefined",
		name: "PostAutomaticUsers"
	},
	{
		description: "Endpoint to get the specific user.",
		method: "get",
		path: "/automatic_and_incremented/users/{id}",
		parameters: {
			path: [
				{
					key: "id",
					require: true
				}
			]
		},
		tags: [
			"User"
		],
		name: "GetId"
	},
	{
		description: "",
		method: "delete",
		path: "/automatic_and_incremented/users/{id}",
		parameters: {
			path: [
				{
					key: "id",
					require: true
				}
			]
		},
		tags: "undefined",
		name: "DeleteId"
	},
	{
		description: "Endpoint to add a user.",
		method: "post",
		path: "/automatic_and_incremented/users",
		parameters: {
			body: [
				{
					key: "obj",
					require: true
				}
			]
		},
		tags: [
			"User"
		],
		name: "PostAutomaticUsers"
	},
	{
		description: "Endpoint added manually.",
		method: "patch",
		path: "/manual/users/{id}",
		parameters: {
			path: [
				{
					key: "id",
					require: true
				}
			],
			query: [
				{
					key: "obj",
					require: true
				}
			]
		},
		tags: "undefined",
		name: "PatchId"
	},
	{
		description: "",
		method: "head",
		path: "/security",
		parameters: {
			query: [
				{
					key: "obj",
					require: "undefined"
				}
			]
		},
		tags: "undefined",
		name: "HeadSecurity"
	}
]

module.exports = configList
