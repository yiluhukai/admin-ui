<template>
	<el-container style="border: 1px solid #eee">
		<el-aside style="background-color: rgb(238, 241, 246);" width="200px">
			<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
				<el-radio-button :label="false">展开</el-radio-button>
				<el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group>
			<el-menu
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				:collapse="isCollapse"
				:default-active="$route.path"
				router
			>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">组件</span>
					</template>
					<el-menu-item-group>
						<!-- <span slot="title">表格</span> -->
						<el-menu-item index="/dashboard">员工</el-menu-item>
						<el-menu-item index="/departments">部门</el-menu-item>
						<el-menu-item index="/jobs">职位</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">图标</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/sprite">雪碧图</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">echart</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/echart">echart</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!-- <el-menu-item index="/login">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span slot="title">登陆</span>
					</template>
				</el-menu-item>-->
				<el-menu-item index="3" disabled>
					<i class="el-icon-document"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
				<el-menu-item index="4">
					<i class="el-icon-setting"></i>
					<span slot="title">导航四</span>
				</el-menu-item>
			</el-menu>
		</el-aside>

		<el-container style="flex:1">
			<el-header style="text-align: right; font-size: 12px">
				<div style="margin-right:30px"></div>

				<div>
					<el-select v-model="value" placeholder="请选择语言">
						<el-option v-for="item in lang" :key="item.value" :label="$ttt(item)" :value="item.value"></el-option>
					</el-select>
				</div>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>
<style>
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
.el-aside {
	color: #333;
	height: 100vh;
}
</style>

<script>
export default {
	data() {
		return {
			value: this.$i18n.locale,
			lang: [
				{ value: 'zh', label: '中文', labelEN: 'Chinese' },
				{ value: 'en', label: '英文', labelEN: 'English' }
			],
			isCollapse: false
		}
	},
	watch: {
		value(value) {
			this.$i18n.locale = value
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>
