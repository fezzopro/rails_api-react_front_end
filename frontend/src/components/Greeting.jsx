import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../Redux/greeting.reducer/greeting.slice';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  if (greeting.isLoading) {
    return (
      <h3>Loading...</h3>
    );
  }

  if (greeting.error) {
    return (
      <h3 className="error">{`${greeting.error} ⚠️`}</h3>
    );
  }
  return (
    <h3>{greeting.greeting.message}</h3>
  );
};

export default Greeting;
