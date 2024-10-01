import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Phone from "./Phone";
import Login from "./Login"; 

function Home() {
  const [messages, setMessages] = useState([]);
  const [sender1, setSender1] = useState(null);
  const [sender2, setSender2] = useState(null);
  const [imgUrl1, setImgUrl1] = useState('');
  const [imgUrl2, setImgUrl2] = useState('');
  const navigate = useNavigate();

  const sendMessage = (message, sender) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prevMessages) => [...prevMessages, { text: message, sender, time: timestamp }]);
  };

  const handleCreateChat = (name1, name2, url1, url2) => {
    setSender1(name1);
    setSender2(name2);
    setImgUrl1(url1);
    setImgUrl2(url2);
    setMessages([]); // Clear all messages
    navigate('/chatting'); 
  };

  const handleLogout = () => {
    setSender1(null);
    setSender2(null);
    setImgUrl1('');
    setImgUrl2('');
    setMessages([]); // Clear messages on logout as well
    navigate('/chatting'); // Navigate back to Login component
  };

  return (
    <div>
      {!sender1 || !sender2 ? (
        <Login onCreateChat={handleCreateChat} />
      ) : (
        <div className="container-phone mt-10 gap-10 flex max-sm:flex-col">
          <Phone 
            name={sender1} 
            img={imgUrl1} 
            messages={messages}
            sendMessage={(msg) => sendMessage(msg, sender1)}
          />
          <button className="bg-red-500 h-10 rounded-xl text-white font-bold max-sm:w-20 m-auto" onClick={handleLogout} style={{padding:'10px 20px'}}> Logout</button>
          <Phone 
            name={sender2} 
            img={imgUrl2}
            messages={messages}
            sendMessage={(msg) => sendMessage(msg, sender2)}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
