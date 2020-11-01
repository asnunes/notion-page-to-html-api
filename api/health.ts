import { NowRequest, NowResponse } from '@vercel/node';

export default (_request: NowRequest, response: NowResponse): void => {
  response.status(200).send('OK!');
};
