import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s'
}

export default function () {
  let res = http.get('http://localhost:3000/products/14032/styles');
  console.log(`RESPONSE TIME: ${res.timings.duration} ms`)
  sleep(1);
}