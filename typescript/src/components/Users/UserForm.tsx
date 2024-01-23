// src/components/UserForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from '../../interfaces';
import { createUser } from '../../services/userServices';

interface UserFormProps {
  onSuccess: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, reset } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      await createUser(data);
      reset();
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register('name')} />
        <label>Email:</label>
        <input type="text" {...register('email')} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default UserForm;
