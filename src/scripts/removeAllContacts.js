import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  writeContacts(JSON.stringify([]), null, 2);
};

removeAllContacts();
