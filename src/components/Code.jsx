import React from 'react';

const Code = (propes) => {



  return (
      <>
      <div className='relative'>
      <pre id='ctext' style={{whiteSpace: 'pre-wrap'}} className='text-cyan-700 px-6 h-full w-full'>
          {propes.code}
      </pre>
    <button className='text-white text-md md:text-lg md:font-bold rounded-md px-2 md:px-3 md:py-1 bg-cyan-500  absolute right-7 top-2' type='button' onClick={(e)=>{
        let text = e.target.parentElement.firstChild.innerText;
        const newText = text.replace(/(\r\n|\n|\r)/gm, "");

        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(newText);
            return;
          }
          navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
  
    }}>Copy</button>
    </div>
      </>
  );
};

export default Code;
