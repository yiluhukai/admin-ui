<!--  -->
<template>
	<div class="login-container">
		<el-row :gutter="20">
			<el-col :span="6" :offset="9">
				<el-form ref="form" :model="form" :rules="rules" label-width="80px">
					<el-form-item style="text-align:center;;color:white">
						<span style="font-size:40px">用户登录</span>
					</el-form-item>
					<el-form-item label="用户名称:" prop="username" label-width="120px">
						<el-input v-model="form.username"></el-input>
					</el-form-item>
					<el-form-item label="密码:" prop="password" label-width="120px">
						<el-input v-model="form.password" type="password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit('form')" style="width:100%">立即登陆</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import { UserLogin } from '@/api/login'
export default {
	data() {
		return {
			form: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{ required: true, message: '请输入你的名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入你的密码', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			}
		}
	},

	methods: {
		onSubmit(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					UserLogin({ ...this.form }).then(res => {
						console.log(res)
					})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	padding-top: 200px;
	background-color: #2d3a4b;
	min-height: 100vh;
}
</style>
