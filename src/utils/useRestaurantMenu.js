import { useEffect, useState } from "react";
import { RES_API } from "./constants";
const useRestaurantMenu = (resId) =>
{
    const [individualResInfo, setIndividualResInfo] = useState(null);  
  useEffect( () =>
{
    fetchData();
}, [])
  const fetchData = async () =>
  {
    const data = await fetch(RES_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    setIndividualResInfo(json)
  }
  
   return individualResInfo;
}
export default useRestaurantMenu;