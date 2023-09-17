import { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';


const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

function GiftIdea() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Start the conversation with the AI's first message
    initiateChat("I need help finding a gift?");
  }, []);

  const initiateChat = async (initialMessage) => {
    setIsTyping(true);

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "assistant", content: initialMessage }
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        const responseMessage = data.choices[0].message.content;
        setMessages([{ message: responseMessage, sender: "ChatGPT" }]);
        setIsTyping(false);
      });
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: apiMessages,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        const responseMessage = data.choices[0].message.content;
        setMessages([...chatMessages, { message: responseMessage, sender: "ChatGPT" }]);
        setIsTyping(false);

        // Handle user response based on the script
        handleUserResponse(responseMessage);
      });
  };

  const handleUserResponse = (userResponse) => {
    const lowercaseResponse = userResponse.toLowerCase();

    if (/adult/i.test(lowercaseResponse)) {
      setMessages([
        ...messages,
        {
          message: "I can suggest some great gift ideas for adults with kids. Please feel free to have a look at our hand-made <a href='https://blissfullbeginnings-9040c36213a5.herokuapp.com/' target='_blank'>Furniture</a>. A gift any parent will appreciate.",
          sender: "ChatGPT",
        },
      ]);
    } else if (/child/i.test(lowercaseResponse)) {
      setMessages([
        ...messages,
        {
          message: "I can suggest some wonderful gifts for children. Please feel free to browse through our <a href='https://blissfullbeginnings-9040c36213a5.herokuapp.com/' target='_blank'>Toys</a> section. This bear <a href='https://blissfullbeginnings-9040c36213a5.herokuapp.com/' target='_blank'>Plushie</a> is very popular among our customers!",
          sender: "ChatGPT",
        },
      ]);
    } else {
      setMessages([...messages, { message: "I'm sorry, I didn't understand. Is it for an adult or a child?", sender: "ChatGPT" }]);
    }
  };

  return (
    <div className="GiftIdea">
      <div style={{ position: "relative", height: "300px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default GiftIdea;
