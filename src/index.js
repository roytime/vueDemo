import Vue from 'vue'
import VueRouter from 'vue-router'
import Http from './util.js'
import App from './app.vue'

//引入iview的样式库
import 'view-design/dist/styles/iview.css'
import {Spin} from 'view-design'
let $con = {headers:{token:'I am a token'}}
let $http = new Http('http://tom.top',$con,Spin.show,Spin.hide)
// http.$.interceptors.request.use((config) => {
// 	Spin.show()
// 	console.log('spin.show')
// 	config.headers.token = 'I am a token'
// 	return config
// },(error)=>{
// 	console.log('error');
// 	return Promise.reject(error);
// });
// http.$.interceptors.response.use((res) => {
// 	Spin.hide()
// 	console.log('spin.hide')
// 	return res;
// });
$http.$.get('/thinking/forJs').then(res=>console.log(res))

//引入routes 
//创建router实例
//创建Vue实例
Vue.use(VueRouter)
import routes from './routers/index.js'
let router = new VueRouter({
	routes
})

let div = document.createElement('div')
document.body.appendChild(div)

new Vue({
	render: (h) => h(App),
	router
}).$mount(div)

