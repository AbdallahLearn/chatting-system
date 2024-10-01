import React, { useState } from "react";

function Phone(props) {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue) {
      props.sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    }
  };

  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div
          className="artboard artboard-demo phone-1 h-96"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/1b/e7/16/1be7169aa4da85588e003ab7192724a6.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="overflow-auto w-full">
            <div className="container w-full bg-gray-900 h-20 flex">
              <div className="container w-[90%] flex justify-between items-center m-auto">
                <p className="text-white">{props.name}</p>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img width='0%' src={props.img} alt="avatar" />
                  </div>
                </div>
              </div>
            </div>
            {props.messages.map((message, index) => (
              <div className="container mt-2 pe-2 ps-2" key={index}>
                <div
                  className={`mb-2 flex ${
                    message.sender === props.name
                      ? "justify-end"
                      : "justify-start"
                  } break-words max-w-[100%]`}
                >
                  <div
                    className={`p-2 rounded-lg max-w-[80%] ${
                      message.sender === props.name
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    <p>
                      {message.text.split('\n').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <span className="text-xs text-black">{message.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container-input mt-auto flex justify-around items-center w-full">
            <textarea
              rows={1}
              style={{ borderRadius: '10px 10px 10px 100px', padding:'10px 20px' }}
              className="p-3  border rounded w-[80%] resize-none"
              placeholder="Write a message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="rounded-full bg-green-300 p-2"
              onClick={handleSendMessage}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/sent.png"
                alt="sent"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
