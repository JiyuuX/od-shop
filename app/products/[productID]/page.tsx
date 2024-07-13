'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

const ProductPage = ({
  params: { productID },
}: {
  params: {
    productID: string;
  };
}) => {
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [cryptoAddress, setCryptoAddress] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText("0xE1b03a5ca277b1Aa330Dcd1316bB7Ef881fBf96C");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://devran.pythonanywhere.com/api/item/${productID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productID]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cryptoAddress === "0xE1b03a5ca277b1Aa330Dcd1316bB7Ef881fBf96C") {
      toast.error("This crypto address is not allowed.");
      return;
    }

    try {
      const response = await fetch(`https://devran.pythonanywhere.com/api/save-data/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item: product.id,
          email,
          cryptoAddress,
        }),
      });
      if (response.ok) {
        toast.success("Data saved successfully!");
        setEmail('');
        setCryptoAddress('');
      } else {
        const errorData = await response.json();
        toast.error("Failed to save data: " + errorData.message);
      }
    } catch (error) {
      toast.error("Error saving data: " + error.message);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-black min-h-screen relative">
      <a href="/" className="absolute top-4 left-4 text-white text-lg">← Back</a>
      <h1 className="text-white text-3xl mb-4 md:mb-6">{product.title}</h1>
      <p className="text-white text-sm md:text-base mb-4 md:mb-6">{product.content}</p>
      <div className="bg-yellow-200 text-red-700 border border-green-300 p-4 mb-4 md:mb-6 w-full max-w-xl rounded text-center">
        Attention: Use BEP20- Binance Smart Chain Network
      </div>
      <div className="mb-4 md:mb-6">
        <Image src="/wallet.png" alt="QR Code" width={150} height={150} />
      </div>
      <div className="bg-gray-800 text-white p-4 mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-center w-full max-w-xl rounded">
        <span className="mb-2 md:mb-0">0xE1b03a5ca277b1Aa330Dcd1316bB7Ef881fBf96C</span>
        <button onClick={handleCopy} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          {copied ? <span className="mr-2">✓</span> : null}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 w-full rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Enter your crypto address"
          value={cryptoAddress}
          onChange={(e) => setCryptoAddress(e.target.value)}
          className="mb-4 p-3 w-full rounded bg-gray-700 text-white"
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full w-full transition duration-300 transform hover:bg-blue-400 hover:scale-105">
          Submit
        </button>
      </form>
      <Toaster position="bottom-center" />
      <div className="text-white text-sm absolute bottom-4 w-full text-center z-10 p-4 bg-black bg-opacity-50">
        Copyright © 2024 - All rights reserved.
      </div>
    </div>
  );
};

export default ProductPage;
