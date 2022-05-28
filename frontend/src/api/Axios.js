import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
      ? '/v2'
      : 'http://localhost:7072/v2';

export default axios.create({
    baseURL,
});
