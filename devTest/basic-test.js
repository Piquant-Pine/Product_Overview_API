import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 500,
  duration: '5s'
}

// export default function () {
//   let res = http.get('http://localhost:3000/products/1400032/styles');
//   console.log(`RESPONSE TIME: ${res.timings.duration} ms`)
//   sleep(1);
// }

// export let options = {
//   stages: [
//     { duration: '5s', target: 100 }, // below normal load
//     { duration: '5s', target: 200 },
//     { duration: '2s', target: 300 }, // normal load
//     { duration: '5s', target: 500 },
//     { duration: '2s', target: 1000 }, // around the breaking point
//     { duration: '5s', target: 2000 },
//     { duration: '2s', target: 3000 }, // beyond the breaking point
//     { duration: '5s', target: 4000 },
//     { duration: '5s', target: 900 },
//     { duration: '5s', target: 300 },
//     { duration: '10s', target: 0 }, // scale down. Recovery stage.
//   ],
// };



export default function () {
  try {
    let res = http.get('http://localhost:3000/products/9090/related');
    console.log(`RESPONSE TIME: ${res.timings.duration} ms`)
    sleep(1);
  } catch (error) {
    newrelic.noticeError(error);
  }

}

