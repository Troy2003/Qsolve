import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-[50%] w-[80%] flex flex-col items-center justify-between">
          <div className="logo">

          </div>
          <p className="text-gray-700 text-2xl text-center sm:text-3xl font-serif">Currently we supports only </p>
          <p className="text-gray-500 text-xl font-serif py-3">@yashbansod</p>

          <div className="w-full flex flex-wrap  items-center h-[82%] justify-center">
            <Card src="/images/ds.png" title="Data Structures" onclick={() => navigate('/prac')} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
