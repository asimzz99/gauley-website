'use client';
import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    document.title = "Gauley – Nepal's First Open-World Adventure";
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://img.itch.zone/aW1nLzEzNzQ4NTc1LnBuZw==/original/KLJkFg.png)' }}>
        <div className="bg-black/60 p-6 rounded-2xl shadow-2xl text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">GAULEY</h1>
          <p className="text-lg md:text-xl italic mb-6">Nepal's First GTA-Inspired Open-World Game</p>
          <a href="https://ashimshakya.itch.io/gauley" target="_blank">
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-2">Play Now</button>
          </a>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#121212]">
        {[
          {
            title: "Explore Rural Nepal",
            img: "https://img.itch.zone/aW1nLzEzNzQ4NTgwLnBuZw==/original/Z7YZuW.png",
            desc: "Drive, walk, and live in dynamic Himalayan villages."
          },
          {
            title: "Nepali Culture + NPCs",
            img: "https://img.itch.zone/aW1nLzEzNzQ4NTc5LnBuZw==/original/vw9V%2Bq.png",
            desc: "Chat with locals, join rituals, and immerse in folklore."
          },
          {
            title: "Open World Adventure",
            img: "https://img.itch.zone/aW1nLzEzNzQ4NTc4LnBuZw==/original/fkMcjY.png",
            desc: "Quests, vehicles, wanted level, day-night cycle."
          }
        ].map(({ title, img, desc }, i) => (
          <div key={i} className="bg-neutral-900 rounded-2xl overflow-hidden shadow-md">
            <img src={img} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#181818] px-4 md:px-16 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <iframe className="w-full h-64 md:h-96 rounded-2xl" src="https://www.youtube.com/embed/xn376uXRjY0" title="Gauley Gameplay Trailer" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="text-gray-300">
          <h2 className="text-3xl font-bold mb-4">About Gauley</h2>
          <p className="mb-4">Gauley is a Nepali open-world game built by solo developer Ashim Shakya using Unreal Engine. Inspired by GTA, it brings the villages, roads, and myths of Nepal to life in stunning detail.</p>
          <p>Experience local conversations, drive old jeeps, and complete missions in a world that looks and feels like home.</p>
        </div>
      </section>

      <section className="bg-black text-center py-16 px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block bg-white/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Get notified about Steam release and major updates.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded-md bg-neutral-800 text-white border border-neutral-700" />
            <button className="bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-md"><Mail className="w-4 h-4" /> Subscribe</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}