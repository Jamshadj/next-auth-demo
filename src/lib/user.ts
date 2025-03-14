import fs from 'fs/promises';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'data', 'userdata.json');

export const getUsers = async () => {
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
};

export const saveUsers = async (users: any[]) => {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};
