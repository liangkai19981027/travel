import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8080/static/mock',
        timeout: 5000
    })
    return instance(config)
}