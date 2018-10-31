import request from '@/utils/request'

export function getAllUser() {
  return request({
    url: '/allUser',
    method: 'get'
  })
}

/**
 * 更新用户信息
 * @export
 * @param {*} data
 * @returns
 */
export function updateUser(data) {
  return request({
    url: '/updateUser',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: '/deleteUser',
    method: 'post',
    data
  })
}

export function createArt(data) {
  return request({
    url: '/create',
    method: 'post',
    data
  })
}