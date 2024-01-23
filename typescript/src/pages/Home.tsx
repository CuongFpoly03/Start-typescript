import React from 'react';
import UserList from '../components/Users/UserList';
import UserForm from '../components/Users/UserForm';

const Home: React.FC = () => {
    const handleSuccess= () =>  {
        console.log("thành công!");
    }
  return (
    <div>
      <UserList />
      <UserForm onSuccess={handleSuccess}/>
    </div>
  );
};
export default Home;
