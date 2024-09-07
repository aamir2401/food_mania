import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) =>
{
  const {resData} = props;
  const {loggedUserName } = useContext(UserContext)
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo
  } = resData?.info
  const {slaString} = resData.info.sla
  return(
  <div className="res-card animate p-5 bg-gradient-to-r from-gray-50  to-orange-50 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-900 ease-in-out w-64 h-72 ">
    <div className="food-image rounded-t-lg overflow-hidden shadow-sm">
        <img className="object-cover w-full h-32" src={CDN_URL + cloudinaryImageId} alt={name} />
    </div>
    <div className="mt-3 space-y-2 space-x-3">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{name}</h3>
        <div className="flex items-center justify-between text-sm">
            <h4 className="text-yellow-500">⭐ {avgRating}</h4>
            <h4 className="text-gray-600">{costForTwo}</h4>
        </div>
        <h4 className="text-gray-700 text-sm truncate">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-500 text-xs"> EAT: {slaString}</h4>
    </div>
</div>
)
}
export default RestaurantCard


export const RestauranIsOpen = () =>
{
   return(props) =>
   {
     return(
      <div>
        <label className="absolute">Open</label>
        <RestaurantCard {...props}/>
      </div>
     )
   }
}
