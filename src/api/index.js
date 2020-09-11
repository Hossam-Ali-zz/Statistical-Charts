import { toast } from 'react-toastify';

export default (endpoint, method = 'GET', body = {}) => {
  let resStatus = 0;
  return fetch(`http://5c3db915a9d04f0014a98a79.mockapi.io/${endpoint}`, {
    method: method,
    ...(method !== 'GET' && { body: body }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      resStatus = res.status;
      return res.json();
    })
    .then((res) => {
      if (resStatus !== 200)
        res?.errors?.length > 0 && res.errors.forEach((e) => toast.error(e));
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
