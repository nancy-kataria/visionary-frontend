import React, { useState } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react'; // Icons still needed

function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: 'system' },
    { id: 2, text: "I have a question about my account.", sender: 'user' },
    { id: 3, text: "I'd be happy to help. What specific question do you have about your account?", sender: 'system' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // Here you would typically call an API to get the system's response
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, text: "I'm processing your request. How else can I help you?", sender: 'system' }])
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-900 text-white">
      <section className="flex-grow p-4 overflow-auto"> {/* Replaces ScrollArea with semantic section and overflow-auto */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </section>

      <footer className="p-4 bg-gray-800"> {/* Replaces div with semantic footer */}
        <div className="flex items-center">
          <button type="button" className="text-gray-400 hover:text-gray-500">
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow mx-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button type="button" className="text-gray-400 hover:text-gray-500">
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice input</span>
          </button>
          <button type="button" onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default ChatWindow;