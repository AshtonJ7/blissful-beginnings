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

const API_KEY = "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";

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
    // Check user response and continue the conversation based on the script
    if (userResponse.toLowerCase().includes("yes")) {
      setMessages([...messages, { message: "Is it for an child or adult?", sender: "ChatGPT" }]);
    } else if (userResponse.toLowerCase().includes("no")) {
      setMessages([
        ...messages,
        {
          message: "No problem, feel free to explore our store.",
          sender: "ChatGPT",
        },
      ]);
    } else if (userResponse.toLowerCase().includes("adult")) {
      setMessages([
        ...messages,
        {
          message: "I can suggest some great adult gift ideas. Please visit LINK.",
          sender: "ChatGPT",
        },
      ]);
    } else if (userResponse.toLowerCase().includes("child")) {
      setMessages([
        ...messages,
        {
          message: "I can suggest some wonderful children's gift ideas. Please visit <a href='https://www.google.com' target='_blank'>www.google.com</a>",
          sender: "ChatGPT",
        },
      ]);
    } else {
      // If user response is unclear, ask again
      setMessages([...messages, { message: "I'm sorry, I didn't understand. Is it for an adult or child?", sender: "ChatGPT" }]);
    }
  };

  return (
    <div className="GiftIdea">
      <div style={{ position: "relative", height: "250px", width: "700px" }}>
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
