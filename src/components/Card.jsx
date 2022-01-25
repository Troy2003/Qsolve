import React from 'react';


const Card = (propes) => {
  return (
      <>
        <div className='h-32 w-36 flex flex-col items-center mx-4 justify-between cursor-pointer  shadow-2xl ' onClick={propes.onclick}>
        <img className='w-[84px]' src={propes.src} alt="DS Image" />
        <p className='font-semibold text-lg text-center text-gray-600'>{propes.title}</p>
        </div>
      </>
  );
};

export default Card;
