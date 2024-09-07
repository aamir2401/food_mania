import { useState, useState} from "react";

const useOnlineStatus = () =>
{
    const [onlineStatus, setOnlineStatus] = useState(true);
    useState(() =>
    {
        window.addEventListener("offline",(event)=>
            {
                setOnlineStatus(false);
            })
         window.addEventListener("online",()=>
            {
                 setOnlineStatus(true);
            })
    },[])
    
    return onlineStatus;
}
export default useOnlineStatus;