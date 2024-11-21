import React from 'react';

const TrendingCoins = () => {
    const coins = [
      { name: "Dogecoin", description: "The original meme king!" },
      { name: "Shiba Inu", description: "The doge killer." },
      { name: "PepeCoin", description: "For the meme lovers." },
      { name: "Floki", description: "Elon's pet project." },
    ];
  
    return (
      <section className="trending-coins">
        <h2>Trending Memecoins</h2>
        <div className="coin-grid">
          {coins.map((coin) => (
            <div
              key={coin.name}
              className="coin-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="font-bold text-lg">{coin.name}</h3>
              <p className="text-gray-500">{coin.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TrendingCoins;
  
  
