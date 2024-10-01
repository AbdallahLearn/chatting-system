import React, { useState } from 'react';

function Login({ onCreateChat }) {
  const [sender1, setSender1] = useState('');
  const [sender2, setSender2] = useState('');
  const [imgUrl1, setImgUrl1] = useState(''); 
  const [imgUrl2, setImgUrl2] = useState(''); 

  const defaultImgUrl = 'https://i.pinimg.com/474x/9f/00/af/9f00af501d2d324ac7f8ebb559fc25dd.jpg'; // Default image URL

  const handleCreateChat = () => {
    const finalImgUrl1 = imgUrl1 || defaultImgUrl; // Use default if not provided
    const finalImgUrl2 = imgUrl2 || defaultImgUrl; // Use default if not provided
    
    onCreateChat(sender1, sender2, finalImgUrl1, finalImgUrl2); 
    navigate('/');
  };

  return (
    <div className="container w-[30%] m-auto mt-60 max-sm:w-[80%]">
      <h1 className='text-center text-3xl mb-10'>Create chatting system</h1>
      
      <label className="input input-bordered flex items-center gap-2 mb-10">
        <input 
          type="text" 
          className="grow" 
          placeholder="Sender 1" 
          value={sender1}
          onChange={(e) => setSender1(e.target.value)} 
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 mb-10">
        <input 
          type="text" 
          className="grow" 
          placeholder="Sender 2" 
          value={sender2}
          onChange={(e) => setSender2(e.target.value)} 
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 mb-10">
        <input 
          type="text" 
          className="grow" 
          placeholder="Image URL for Sender 1" 
          value={imgUrl1}
          onChange={(e) => setImgUrl1(e.target.value)} 
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 mb-10">
        <input 
          type="text" 
          className="grow" 
          placeholder="Image URL for Sender 2" 
          value={imgUrl2}
          onChange={(e) => setImgUrl2(e.target.value)} 
        />
      </label>

      <button className='btn w-full mt-10 bg-green-400 text-white text-lg' onClick={handleCreateChat}>
        Create Chat
      </button>
    </div>
  );
}

export default Login;
