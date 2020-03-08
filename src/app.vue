<template>
	<div id="app">
		<Layout>
			<Header class="bg-white">Kasee</Header>
			<Layout>
				<Sider class="bg-white" :width="250" hide-trigger>
					<Menu theme="light" active-name="1">
						<MenuGroup title="思维模型">
							<MenuItem name="1" to="/card/list">
							<Icon type="md-document" />
								所有模型
							</MenuItem>
							<MenuItem name="2" to="/card/set">
							<Icon type="md-chatbubbles" />
								新建模型
							</MenuItem>
						</MenuGroup>
						<MenuGroup title="反思笔记">
							<MenuItem name="3">
							<Icon type="md-heart" />
							所有反思
							</MenuItem>
							<MenuItem name="4">
							<Icon type="md-leaf" />
							新建反思
							</MenuItem>
						</MenuGroup>
					</Menu>
				</Sider>
				<Content class="bg-white">
					<router-view></router-view>
				</Content>
			</Layout>
			<Footer class="bg-white">copyrigt by david</Footer>
		</Layout>
	</div>
</template>

<script>
	import {Layout,Menu,Icon} from 'view-design'
	export default {
		components: {
			Layout: Layout,
			Header: Layout.Header,
			Footer: Layout.Footer,
			Content: Layout.Content,
			Sider: Layout.Sider,
			Menu: Menu,
			MenuGroup: Menu.Group,
			MenuItem: Menu.Item,
			Icon:Icon
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.bg-white {
		background-color: white;
	}
</style>
