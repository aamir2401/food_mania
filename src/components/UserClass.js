import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            userInfo: "default",
            location: "Default delhi"
        };
    }
    async componentDidMount()
    {
        const data = await fetch("https://apri.github.com/users/aamir18");
        const json = await data.json();
        this.setState(
            {
                userInfo: json,
            }
        )
        console.log("heyy aamir", json)
    }
    render()
    {
        const {login, location, avatar_url} = this.state.userInfo
        // debugger;
        return(
            <div className="user-card">
                <h4>Heyy class!!!</h4>
                <p>{login}</p>
                <h4>{location}...</h4>
                <img src={avatar_url}/>
            </div>
        )
    }
}

export default UserClass;