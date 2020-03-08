import axios from 'axios'
import qs from 'qs'
let http=function(){
		function HttpFunction(baseUrl, config = {}, hookFn1 = '', hookFn2 = '') {
			//let h = {post:{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}};
			this.$ = axios.create({
				timeout: 3000,
				//headers: h,
				baseURL: baseUrl //配置接口地址
			})
			this._config = config
			this._hookFn1 = hookFn1
			this._hookFn2 = hookFn2
			this.requestInit()
			this.responseInit()
		}
		HttpFunction.prototype.requestInit=function(){
			this.$.interceptors.request.use((config) => {
				//在发送请求之前做某件事
				config = { ...config,
					...this._config
				};
				console.log(typeof this._hookFn1);
				if (typeof this._hookFn1 === 'function') {
					this._hookFn1();
				}
				if (config.method === 'post') {
					config.data = qs.stringify(config.data);
				}
				return config;
			}, (error) => {
				console.log('错误的传参')
				return Promise.reject(error);
			});
		}
		
		HttpFunction.prototype.responseInit=function() {
			this.$.interceptors.response.use((res) => {
				//对响应数据做些事
				console.log('response here')
				if (typeof this._hookFn2 === 'function') {
					this._hookFn2();
				}
				if (!res.data.success) {
					return Promise.resolve(res);
				}
				return res;
			}, (error) => {
				if (typeof this._hookFn2 === 'function') {
					this._hookFn2();
				}
				console.log('网络异常')
				return Promise.reject(error);
			});
		}
		
		return HttpFunction
	}(axios,qs)

export default http

