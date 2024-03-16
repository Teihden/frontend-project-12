import axios from 'axios';

const noop = () => { };

const request = (
  method = 'post',
  {
    url,
    body = null,
    onSuccessCb = noop,
    onErrorCb = noop,
    onFinallyCb = noop,
  } = {},
) => axios[method](url, body)
  .then((resp) => {
    console.debug(resp);
    onSuccessCb(resp);
  })
  .catch((err) => {
    console.error(err);
    onErrorCb(err);
  })
  .finally(() => onFinallyCb());

const getData = (options) => request('get', options);

const sendData = (options) => request('post', options);

export { getData, sendData };
