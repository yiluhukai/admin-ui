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
