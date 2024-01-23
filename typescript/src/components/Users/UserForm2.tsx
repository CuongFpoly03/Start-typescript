/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/UserForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from '../../interfaces';
import { createUser } from '../../services/userServices';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

interface UserFormProps {
  onSuccess: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<User>({
    resolver: yupResolver(schema),
  });

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
        {errors.name && <p>{errors.name.message}</p>}
        <label>Email:</label>
        <input type="text" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default UserForm;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function yupResolver(_schema: yup.ObjectSchema<{ name: string; email: string; }, yup.AnyObject, { name: undefined; email: undefined; }, "">): import("react-hook-form").Resolver<User, any> | undefined {
    throw new Error('Function not implemented.');
}

