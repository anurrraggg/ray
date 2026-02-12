"use client";

import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(item =>
    (category === 'All' || item.category === category) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-orange-500/20 overflow-hidden relative">

      {/* Background Ambience (Very Subtle) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 pt-32 pb-20 container mx-auto px-6 lg:px-16">

        {/* Header - Minimalist */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/5 pb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
              Store
            </h1>
            <p className="text-slate-500 font-light text-lg">
              Premium hardware for innovation.
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all placeholder:text-slate-400 shadow-lg shadow-black/20"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-orange-400 transition-colors" size={18} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Clean List */}
          {/* Sidebar Filters - Responsive */}
          <aside className="w-full lg:w-64 shrink-0 lg:space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="flex lg:block items-center overflow-x-auto pb-4 lg:pb-0 gap-4 lg:gap-0 no-scrollbar">
              <div className="flex items-center gap-2 mb-0 lg:mb-6 text-slate-400 shrink-0">
                <Filter size={16} /> <span className="text-xs font-bold uppercase tracking-widest hidden lg:inline">Filters</span>
              </div>

              <div className="flex lg:block gap-2 space-y-0 lg:space-y-1">
                {['All', 'Industrial IoT', 'Safety', 'Sensors', 'DIY Kits'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 lg:px-3 lg:py-2 rounded-full lg:rounded-md text-sm transition-all duration-300 border lg:border-none lg:border-l-2 ${category === cat
                      ? 'bg-orange-500 text-black lg:text-white lg:bg-white/5 lg:border-orange-500 lg:pl-5 font-medium'
                      : 'border-white/10 text-slate-400 lg:border-transparent lg:text-slate-500 hover:text-white lg:hover:text-slate-300 lg:hover:pl-4 bg-white/5 lg:bg-transparent'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Product Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="min-h-[400px] flex items-center justify-center text-slate-500 capitalize tracking-widest animate-pulse gap-3">
                <Loader2 className="animate-spin" /> Loading Products...
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-slate-600 font-light">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product._id?.toString() || product.id} className="group bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between overflow-hidden relative">

                    {/* Interaction Overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Image Area */}
                    <div className="h-64 bg-[#080808] relative overflow-hidden flex items-center justify-center p-6">
                      <div className="text-[100px] font-bold text-white/5 absolute -bottom-8 -right-8 rotate-12 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-6 select-none grayscale opacity-30">
                        {product.name[0]}
                      </div>

                      <div className="relative z-10 w-full h-full flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                        <Image
                          src={product.images?.[0] || '/images/placeholder.png'}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-2xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                          {product.category}
                        </span>
                        <h3 className="text-xl font-medium text-white group-hover:text-orange-100 transition-colors">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed font-light">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-lg font-light text-slate-200">{formatPrice(product.price)}</span>
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
