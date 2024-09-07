import RestaurantCard, {RestauranIsOpen} from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";
const Body = () => {
  
  const onlineStatus = useOnlineStatus();
  const [resList, setResList] = useState([]);
  
  const RestaurantOpenHai = RestauranIsOpen(resList)
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // 🔴🔴🔴🔴 Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  //   console.log(searchInput);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    // console.log("json",response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    console.log("response", response);
    
    
    setResList(
      response?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      
    );
    setFilteredRestaurant(
      response?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      if(onlineStatus === false)
        return <h3>Check your Internet connection and try again later!</h3>
  };
 
  return resList.length === 0 ? (
    [...Array(10)].map((_, index) => <ShimmerCard key={index} />)
  ) : (
    <div className="">
            <div className="flex gap-6 font-semibold cursor-pointer search-container mx-3 my-4">
              <input className="w-50% p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none "
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                    
                  }
              }
              ></input>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={() => {
                console.log("check",searchInput);
                const filteredList = resList.filter((res) => res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                setFilteredRestaurant(filteredList)
              }}>
                Search
              </button>
              <button
            className="filter-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top-Restaurants
          </button>
            </div>
            <div className="flex gap-6 font-semibold cursor-pointer search-container mx-3 my-4">
              <h1>{}</h1>
            </div>
            <div className="flex flex-wrap justify-evenly gap-y-8">
              {(filteredRestaurant.length > 0 ? filteredRestaurant : resList).map(
                (restaurant) => (
                  <Link className="restaurant-link" key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
                    {/* {**    *} */}
                    {
                      resList[13].info.isOpen ? <RestaurantOpenHai resData={restaurant} /> : 
                      <RestaurantCard  resData={restaurant} />
                    }
                  
                  </Link>
                  
                )
              )}
            </div>

            <Footer/>
    </div>
  );
};
export default Body;














