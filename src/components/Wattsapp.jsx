import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+923129185825'; // Replace with the desired phone number
  const message = 'Hello, this is our WhatsApp message!'; // Replace with your message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Contact with us on Whatsapp
      </button>
    </a>
  );
};

export default WhatsAppButton;
