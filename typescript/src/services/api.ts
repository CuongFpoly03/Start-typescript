// src/services/api.ts
const API = 'https://dummyjson.com/carts';

export const fetchData = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${API}${url}`, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postData = async (url: string, data: any, options?: RequestInit) => {
  const response = await fetch(`${API}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
};

export const deleteData = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${API}${url}`, {
    method: 'DELETE',
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const putData = async (url: string, data: any, options?: RequestInit) => {
  const response = await fetch(`${API}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.json();
};
