import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getUsers } from '../../actions';

const HomeComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((users) => users.home);

  return (
    <div>
      {users.map((user) => (
        <p key={user._id}>{user.user_type}</p>
      ))}
    </div>
  );
};

export default HomeComponent;
