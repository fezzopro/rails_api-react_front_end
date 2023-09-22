import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../Redux/greeting.reducer/greeting.slice';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, []);
  if (greeting.isLoading) {
    return (
      <h3>...</h3>
    );
  }
  return (
    <h3>{greeting.greeting.message}</h3>
  );
};

export default Greeting;
