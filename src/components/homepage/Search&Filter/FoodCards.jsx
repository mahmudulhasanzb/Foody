import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const FoodCards = async() => {
  const foodsData = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/');
  const data = await foodsData.json();
  const foods = data.data
  console.log(foods);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
      {foods.map(food => (
        <div key={food.id} className="card bg-base-200 shadow-sm">
          <figure>
           <Image width={400} height={300} className='w-full rounded-lg p-2 max-h-[200px] ' src={food.image_link} alt={food.dish_name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{food.dish_name}</h2>
            <div className="flex justify-between">
              <div className="badge font-bold text-lg">${food.price}</div>
              <div className="badge badge-ghost">❤️</div>
            </div>
            <div className="card-actions justify-between">
              <Link href={`foods/fooddetails/${food.id}`} className="btn btn-sm">
                Details
              </Link>
              <div className="badge font-bold">⭐{food.rating}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;
