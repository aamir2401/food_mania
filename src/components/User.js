import { useEffect, useState } from "react";

const User = ({name, location}) =>
{
    const [count, setCount] = useState(0);
    function incrementTheCount()
    {
        setCount(count + 1);
    }
    const decTheCount = () =>
    {
        setCount(count - 1)
    }
    return(
        <div className="user-card">
            <h4>Heyy!!!</h4>
            <h1>count = {count}</h1>
            {/* <button onClick={incrementTheCount}>Incr. Count</button>
            <button onClick={decTheCount}> Decr. Count</button> */}
            <h4>{name}</h4>
            <h4>Contact: @aamir18</h4>
            <h4>Location: {location}</h4>
        </div>
    )
}
export default User;