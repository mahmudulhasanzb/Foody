import React from 'react';

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;

  const foodsData = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await foodsData.json();
  const food = data.data;

  const {
    dish_name,
    image_link,
    category,
    price,
    rating,
    alternative_names,
    main_ingredients,
    approximate_nutrition_per_serving,
    possible_price_in_dhaka,
    origin_and_popularity,
    cooking_steps,
    cuisine,
  } = food;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 text-gray-800 font-sans selection:bg-orange-300 selection:text-orange-900 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500"></div>
        <img
          src={image_link}
          alt={dish_name}
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-7xl mx-auto w-full">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/90 backdrop-blur-md text-white text-sm font-semibold tracking-wide uppercase shadow-lg max-w-fit border border-orange-400/50">
            {category} • {cuisine}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-6 tracking-tight leading-tight">
            {dish_name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <span className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/30 shadow-xl transition-transform hover:-translate-y-1">
              <span className="text-yellow-400 text-xl">⭐</span>
              <span className="font-bold text-lg">{rating}</span>
            </span>
            <span className="flex items-center gap-2 bg-green-500/90 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-green-400/50 shadow-xl text-white font-bold text-lg transition-transform hover:-translate-y-1">
              ৳ {price}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Origin & Popularity */}
          <section className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
              📖 The Story
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{origin_and_popularity}</p>
          </section>

          {/* Cooking Steps */}
          <section className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
              👨‍🍳 Cooking Instructions
            </h2>
            <div className="space-y-6">
              {cooking_steps.map((step, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm border border-orange-100 group-hover:border-orange-500">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2.5 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          
          {/* Ingredients */}
          <section className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h2 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              🛒 Ingredients
            </h2>
            <ul className="space-y-3">
              {main_ingredients.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 bg-gray-50/50 p-3 rounded-xl border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nutrition */}
          <section className="bg-gradient-to-br from-indigo-50/90 to-purple-50/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-indigo-100/50 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h2 className="text-xl font-bold mb-5 text-indigo-900 flex items-center gap-2 border-b border-indigo-200/50 pb-3">
              🔥 Nutrition Info
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(approximate_nutrition_per_serving).map(([key, value]) => (
                <div key={key} className="bg-white/70 p-4 rounded-2xl text-center shadow-sm hover:bg-white transition-colors">
                  <div className="text-xs uppercase tracking-wider text-indigo-500 font-bold mb-1">{key}</div>
                  <div className="font-extrabold text-gray-800 text-lg">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Price in Dhaka */}
          <section className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-100/50 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h2 className="text-xl font-bold mb-5 text-emerald-900 flex items-center gap-2 border-b border-emerald-200/50 pb-3">
              💰 Price in Dhaka
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white/50 p-3 rounded-xl">
                <span className="text-emerald-800 font-medium">Home Cooked</span>
                <span className="font-bold text-gray-900">{possible_price_in_dhaka.home_cooked}</span>
              </div>
              <div className="flex justify-between items-center bg-white/50 p-3 rounded-xl">
                <span className="text-emerald-800 font-medium">Street Food</span>
                <span className="font-bold text-gray-900">{possible_price_in_dhaka.street_food_or_small_restaurant}</span>
              </div>
              <div className="flex justify-between items-center bg-white/50 p-3 rounded-xl">
                <span className="text-emerald-800 font-medium">Cafe/Restaurant</span>
                <span className="font-bold text-gray-900">{possible_price_in_dhaka.cafe_or_healthy_eatery}</span>
              </div>
            </div>
          </section>

          {/* Alternative Names */}
          {alternative_names && alternative_names.length > 0 && (
            <section className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white text-sm text-gray-500">
              <span className="font-bold text-gray-700 block mb-2">Also known as:</span> 
              <div className="flex flex-wrap gap-2">
                {alternative_names.map((name, i) => (
                  <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium">{name}</span>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
