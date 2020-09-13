import request from '@/utils/request'
//  user login
export function UserLogin(data) {
	return request.post('/user/login', data)
}

export function GetRecords(data) {
	return request.get('/api/records', data)
}
