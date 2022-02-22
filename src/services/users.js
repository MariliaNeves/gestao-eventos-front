import { HTTPClient } from '../utils/request';

export default {
  create: ({ payload }) => HTTPClient.get('/users', payload),
};
