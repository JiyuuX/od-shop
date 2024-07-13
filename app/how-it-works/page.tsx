'use client';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-[#242222] min-h-screen text-white font-sans">
      <a href="/" className="absolute top-4 left-4 text-white text-lg">← Back</a>
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-5 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        HOW IT WORKS?
      </motion.h1>

      <div className="bg-[#181818] p-5 rounded-lg shadow-lg w-full max-w-xl md:max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3 text-white">1) Choose Payment Method</h2>
        <p className="mb-4 text-gray-300 text-lg">
          You can select whether Crypto Payment or PayPal payment.
        </p>

        <div className="mb-5">
          <h3 className="font-semibold text-white text-lg">For crypto payments:</h3>
          <ul className="list-disc list-inside pl-5 text-gray-300">
            <li>Type your Email and Your Crypto (Sender) Wallet Address.</li>
            <li>Submit!</li>
            <li>Your order will be on Pending situation.</li>
            <li>Copy the OdiumShop's wallet address!</li>
            <li>Send USDT for the product to OdiumShop's address, via BEP20.</li>
            <li>Done! Within 24hr your account's Login Credentials will send to your email address.</li>
          </ul>
          <p className="font-semibold mt-2 text-white">NOTE:</p>
          <p className="text-gray-300">Please be careful with your transactions and information that you typed, use a valid email address. Your crypto wallet address that you submit has to match with the Crypto Sender address.</p>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold text-white text-lg">For PayPal payments:</h3>
          <ul className="list-disc list-inside pl-5 text-gray-300">
            <li>Family and Friend Send have to select.</li>
            <li>Done! Within 24hr your account's Login Credentials will send to your email address.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-3 text-white">2) Refund Policy:</h2>
          <p className="mb-2 text-gray-300">
            Although it is unlikely to happen, sometimes the account can be banned by the companies. They seem not happy with the purchases caused by price differences from different countries <span role="img" aria-label="smile">😊</span>
          </p>
          <p className="text-gray-300">
            No problem, if your account becomes unusable - before expiration - your payment for the unused period will be refunded to your address. If you want, we can provide a new account for you. This choice is entirely up to you. We are OK for each solution! <span role="img" aria-label="heart">❤️</span>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white text-lg">Need Help?</h3>
          <p className="text-gray-300">
            If you have any further question, please, reach out to us via our <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Discord </a> page.
          </p>
        </div>
      </div>

      <footer className="bg-[#0C0B0B] text-[#8E8484] p-2 text-center text-sm w-full mt-5">
        &copy; 2024 - All rights reserved.
      </footer>
    </div>
  );
};

export default HowItWorks;
