
'use client';

export default function CryptoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Seamless Transactions with Crypto
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
          We offer fast, secure, and private payment options through major cryptocurrencies, making it easier for our global clients to do business with us.
        </p>
        
        <div className="flex justify-center items-center space-x-12 md:space-x-20 mb-12">
          <div className="group flex flex-col items-center">
            <div className="w-28 h-28 bg-gradient-to-br from-orange-500/20 to-orange-600/30 rounded-2xl flex items-center justify-center mb-6 hover:from-orange-500/30 hover:to-orange-600/40 transition-all duration-300 group-hover:scale-110 border border-orange-500/20 shadow-lg shadow-orange-500/10">
              <i className="ri-currency-line text-5xl text-orange-400" aria-hidden="true"></i>
            </div>
            <span className="text-white font-bold text-xl mb-2">Bitcoin</span>
            <span className="text-gray-400 text-sm">BTC</span>
          </div>
          
          <div className="group flex flex-col items-center">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6 hover:from-blue-500/30 hover:to-blue-600/40 transition-all duration-300 group-hover:scale-110 border border-blue-500/20 shadow-lg shadow-blue-500/10">
              <i className="ri-coin-line text-5xl text-blue-400" aria-hidden="true"></i>
            </div>
            <span className="text-white font-bold text-xl mb-2">Ethereum</span>
            <span className="text-gray-400 text-sm">ETH</span>
          </div>
          
          <div className="group flex flex-col items-center">
            <div className="w-28 h-28 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-2xl flex items-center justify-center mb-6 hover:from-green-500/30 hover:to-green-600/40 transition-all duration-300 group-hover:scale-110 border border-green-500/20 shadow-lg shadow-green-500/10">
              <i className="ri-money-dollar-circle-line text-5xl text-green-400" aria-hidden="true"></i>
            </div>
            <span className="text-white font-bold text-xl mb-2">USDT</span>
            <span className="text-gray-400 text-sm">Tether</span>
          </div>
        </div>
        
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-shield-check-line text-green-400 text-2xl mr-3" aria-hidden="true"></i>
            <span className="text-white font-semibold">Secure & Borderless Payments</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Accept payments from anywhere in the world with zero geographic restrictions and enhanced privacy protection.
          </p>
        </div>
      </div>
    </section>
  );
}