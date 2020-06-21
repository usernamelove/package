
import http from './http';
const host = '192.168.3.4';
const ip = '30019';
let api = {};
//基础的请求路径
const baseUrl = `http://${host}:${ip}`
const urls = {
    getConentsInfo: `${baseUrl}/getConentsInfo`
}
