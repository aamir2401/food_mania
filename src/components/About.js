import User from "./User"
import UserClass from "./UserClass";
const About = () =>
{
    return(
        <div>
            <h2>This is about page</h2>
            {/* <User name={"Name: Aamir Anwar"} location={"Delhi(functionalcom..)"}/> */}

            <UserClass name={"Name: Aamir Anwar "} contact={"@aamiranwar18 class comp..."}/>
        </div>
    )
};
export default About;