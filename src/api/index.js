import request from '@/utils/request'
//  user login
export function UserLogin(data) {
	return request.post('/user/login', data)
}

export function getEmployeeList(data = {}) {
	return request.get('/employees', {
		params: data
	})
}

export function getDepartmentList(data = {}) {
	return request.get('/departments', {
		params: data
	})
}

export function getJobList(data) {
	return request.get('/jobs', {
		params: data
	})
}

// 获取不同的部门员工的平均工资的数据和数量
export function getAverageSalaryAndCount(data) {
	return request.post('/employees/queryAverageSalary', data)
}

// 获取不同等级的员工平均工资的数据
export function getAverageSalaryAndCountByRank(data) {
	return request.post('/employees/queryAverageSalaryByRank', data)
}

// 导出数据
export function ExportEmployeeList(data) {
	return request.post('/employees/exportEmployeeList', data, { responseType: 'blob' })
}

//return request({ method: 'post', url: '/employees/exportEmployeeList', responseType: 'blob' })
