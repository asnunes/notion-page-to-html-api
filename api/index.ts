import { NowRequest, NowResponse } from '@vercel/node';
import NotionPageToHtml from 'notion-page-to-html';
import { MissingIdError } from '../_errors/missing-id';

export default async (request: NowRequest, response: NowResponse): Promise<void | NowResponse> => {
  try {
    const { id } = request.query;
    if (!id) throw new MissingIdError();

    const url = `https://notion.so/${id}`;
    const content = await NotionPageToHtml.convert(url);
    const { html } = content;

    response.setHeader('Content-Type', 'text/html');
    response.status(200).send(html);
  } catch (err) {
    switch (err.name) {
      case 'MissingIdError':
      case 'InvalidPageUrlError':
        return response.status(400).send(err.message);
      case 'NotionPageAccessError':
        return response.status(401).send(err.message);
      default:
        return response.status(500).send(err.message);
    }
  }
};
