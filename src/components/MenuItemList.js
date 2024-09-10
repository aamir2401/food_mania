import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const MenuItemList = ({ items }) => {
//   console.log(items);
const dispatch = useDispatch();
const handleAddItemsCart = () =>
{
  
  dispatch(addItem(items))
}
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-slate-100">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="menu-item mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
        >
          {/* Menu Item Title, Price, and Image */}
          <div className="flex items-center justify-between mb-2">
  <div>
    <h3 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h3>
    <span className="text-lg font-medium text-green-500">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>
  </div>
  
  {/* Image Container */}
  <div className="relative w-36 h-16">
    {/* Image */}
    <img
      src={CDN_URL + item.card.info.imageId}
      alt={item.card.info.id}
      className="object-cover rounded-md w-full h-full"
    />
    
    {/* Button */}
    <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white to-purple-600 text-green-500 font-semibold py-0 px-2  rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105"
    onClick={() => handleAddItemsCart(item)}
    >
      ADD
    </button>
  </div>
</div>


          {/* Menu Item Description */}
          <div className="mt-2">
            <p className="text-gray-600 text-xs">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
