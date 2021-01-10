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

// 获取平均工资的数据
export function getAverageSalaryAndCount(data) {
	return request.post('/employees/queryAverageSalary', data)
}
