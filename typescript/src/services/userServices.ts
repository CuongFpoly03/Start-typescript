// src/services/userService.ts
import { fetchData, postData, deleteData, putData } from './api';

export const getUsers = async () => {
  return fetchData('/users');
};

export const createUser = async (user: { name: string; email: string }) => {
  return postData('/users', user);
};

export const deleteUser = async (usersId: string) => {
  return deleteData(`/users/${usersId}`);
}

export const editUser = async (usersId: string, updatedUsers: {
  name: string,
  emailL: string
})=>{
  return putData(`/users/${usersId}`, updatedUsers);
}


