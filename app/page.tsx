'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Item {
  id: number;
  title: string;
  content: string;
  price: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('https://devran.pythonanywhere.com/api/items/');
        if (!res.ok) throw new Error('Network response was not ok');
        
        const data: Item[] = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col items-center p-3 sm:p-5 bg-[#242222] min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between w-full p-3 sm:p-5">
        <motion.div
          className="text-xl sm:text-2xl font-bold relative cursor-pointer"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Odium Shop
          <div className="absolute left-0 right-0 bottom-[-5px] h-[3px] bg-gradient-to-r"></div>
        </motion.div>
        <div className="flex">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2 sm:mr-4">
            <img src="https://cdn3.emoji.gg/emojis/6627-x-logo.png" alt="X" className="w-10 h-10 sm:w-14 sm:h-14 p-2" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn3.emoji.gg/emojis/4789-discord-icon.png" alt="Discord" className="w-10 h-10 sm:w-14 sm:h-14 p-2" />
          </a>
        </div>
      </header>

      <motion.h1
        className="my-3 sm:my-5 text-3xl sm:text-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Odium Shop
        <div className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-gradient-to-r"></div>
      </motion.h1>

      <h1 className="text-center mb-5 text-white">
        We are an arbitrage bridge.. buy original licensed products cheaper than your home country..
      </h1>

      <nav className="mb-5">
        <Link href="/how-it-works">
          <button className="bg-[#3498db] text-white border-none mt-5 p-2 text-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg">
            How it works? How Refund?
          </button>
        </Link>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mt-5">
        {items.map(item => (
          <motion.div
            key={item.id}
            className="bg-[#181818] p-3 sm:p-5 text-center cursor-pointer text-[#bfd5f1] transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg"
          >
            <h3 className="mb-2">{item.title}</h3>
            <p className="whitespace-pre-line">{item.content}</p>
            <p className="whitespace-pre-line">{item.price} (USDT)</p>
            <Link href={`/products/${item.id}`}>
              <motion.button className="bg-[#3498db] text-white border-none mt-5 p-2 text-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                Buy Now
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      <footer className="bg-[#0C0B0B] text-[#8E8484] p-2 text-center text-sm w-full mt-auto">
        &copy; 2024 - All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
