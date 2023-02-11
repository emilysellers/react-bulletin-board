import { checkError, client } from './client.js';

export async function getBulletins() {
  const resp = await client.from('bulletins').select();
  return checkError(resp);
}

export async function getBulletinDetail(id) {
  const resp = await client.from('bulletins').select('*').match({ id });
  console.log('==services resp', resp);
  return checkError(resp);
}

export async function updateBulletin(id, title, description) {
  const resp = await client.from('bulletins').update({ title, description }).match({ id }).single();
  return checkError(resp);
}
