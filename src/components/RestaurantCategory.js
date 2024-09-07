import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";
import MenuItemList from "./MenuItemList";
import { useState } from "react";
const RestaurantCategory = ({data, expantItems, setExpandItems}) =>
{

  const handleClick = () =>
  {
    setExpandItems()
    // console.log("clicked")
    // setExpandItems(!expantItems)
  }
   return(
    <div className="flex justify-center">
    <div className="w-10/12 md:w-8/12 lg:w-6/12 my-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
      <div onClick={handleClick} className="flex justify-between items-center">
        {/* Accordion Title and Count */}
        <div  className="flex items-center space-x-2">
          <span  className="font-semibold text-lg font-sans text-gray-800">{data.title}</span>
          <p className="text-sm text-gray-600">({data?.itemCards.length})</p>
        </div>
  
        {/* Arrow Icon */}
        
        {
          expantItems ? <BsArrowUpCircleFill className="text-gray-600 text-2xl hover:text-gray-950 transition duration-300 ease-in-out" />  : <BsArrowDownCircleFill className="text-gray-600 text-2xl hover:text-gray-950 transition duration-300 ease-in-out"/>
        }
      </div>
      <div>
        {expantItems &&  <MenuItemList items={data.itemCards}/>}
      </div>
    </div>
  </div>
  
   )
}
export default RestaurantCategory;
