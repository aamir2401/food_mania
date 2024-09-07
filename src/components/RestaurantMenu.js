import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import MenuItemList from './MenuItemList';
const RestaurantMenu = () => {
    const [expantItems, setExpandItems]= useState(null);
    const {resId} = useParams();
    const individualResInfo = useRestaurantMenu(resId);
    const {name, costForTwoMessage, areaName,city, avgRating, cuisines} = individualResInfo?.data?.cards[2]?.card?.card?.info || {};
    // const itemCards =
    // individualResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    // console.log("--->", itemCards)
    // console.log("first", individualResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const restaurantMenuCategories = individualResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards


    const filteredMenu = Array.isArray(restaurantMenuCategories) 
  ? restaurantMenuCategories.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  : []; 
  

//   console.log("restaurantMenuCategories", filteredMenu)
  return (
    <div>
        <div className="my-3 menu p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h2 className="text-2xl font-bold text-black">{name}</h2>
    <p className="text-gray-500">{`Outlet - ${areaName} - ${city}`}</p>
    <p className="text-sm text-gray-600">
        {cuisines?.length ? cuisines.join(", ") : "Cuisines not available"}
    </p>
    <p className="flex items-center text-yellow-500">
        ⭐<span className="ml-1 text-lg font-semibold">{avgRating}</span>
    </p>
    
    
       </div>
       <h1 className='text-center font-semibold my-3'>CATEGORIES
       </h1>
       <div className=''>
        {
            filteredMenu.map((category, index) => 
                <RestaurantCategory 
             key={index}
             data={category?.card?.card}
             expantItems={index === expantItems ? true : false}
             setExpandItems={() => setExpandItems(index)}
             />
            )
        }
       </div>
    </div>
  )
}
export default RestaurantMenu;

