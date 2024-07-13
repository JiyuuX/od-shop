'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Item {
  id: number;
  title: string;
  content: string;
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
    <div className="flex flex-col items-center p-5 bg-[#242222] min-h-screen">
      <header className="flex justify-between w-full p-5">
        <motion.div
          className="text-2xl font-bold relative cursor-pointer"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Odium Shop
          <div className="absolute left-0 right-0 bottom-[-5px] h-[3px] bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 animate-rainbow"></div>
        </motion.div>
        <div className="flex">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="https://cdn3.emoji.gg/emojis/6627-x-logo.png" alt="X" className="w-14 h-14 p-2" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn3.emoji.gg/emojis/4789-discord-icon.png" alt="Discord" className="w-14 h-14 p-2" />
          </a>
        </div>
      </header>

      <motion.h1
        className="my-5 text-4xl text-center relative overflow-hidden h-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {[...Array.from('Welcome to Odium Shop')].map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block relative mx-[1px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01, duration: 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
        <div className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 animate-rainbow"></div>
      </motion.h1>

      <h1 className="text-center mb-5 text-white">
        We are an arbitrage bridge.. buy original licensed products cheaper than your home country..
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mt-10">
        {items.map(item => (
          <motion.div
            key={item.id}
            className="bg-[#181818] p-5 text-center cursor-pointer text-[#bfd5f1] transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg"
          >
            <h3 className="mb-2">{item.title}</h3>
            <p className="whitespace-pre-line">{item.content}</p>
            <Link href={`/products/${item.id}`}>
              <motion.button className="bg-[#3498db] text-white border-none mt-10 p-2 text-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg">
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
