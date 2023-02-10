import { checkError, client } from './client.js';

export async function getBulletins() {
  const resp = await client.from('bulletins').select();
  return checkError(resp);
}

export async function getBulletinDetail(id) {
  const resp = await client.from('bulletins').select().match({ id });
  return checkError(resp);
}
