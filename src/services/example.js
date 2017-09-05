import request from '../utils/request';

const url = 'http://10.101.56.15:8080/'
export default function query(options) {
  return request(url+'login',options);
}
