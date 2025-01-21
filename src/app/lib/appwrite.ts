import { Account, Client } from 'appwrite';

export const client = new Client();
client.setProject('678f9ca40018f19534c5');

export const account = new Account(client);
export { ID } from 'appwrite';
