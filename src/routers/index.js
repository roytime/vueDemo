let Card = ()=> import('./Card.vue')
let CardIndex = ()=> import('./CardIndex.vue')
let CardList = ()=> import('./CardList.vue')
let CardShow = ()=> import('./CardShow.vue')
let CardSet = ()=> import('./CardSet.vue')

export default [
	{path:'/card',component:Card,children:[
		{path:'show',component:CardShow},
		{path:'set',component:CardSet},
		{path:'list',component:CardList},
		{path:'',component:CardIndex}
	]}
]