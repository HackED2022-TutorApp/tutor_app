import {Link} from 'react-router-dom'
import useFetch from "./useFetch";

const Profile = () => {
    
    const {data : tutor, isPending, error} = useFetch('http://localhost:8000/api/tutor/' + 1 + '/');

    return ( 
        <div className="profile">
            <h2>Your Profile</h2>
            <h3>First Name: {tutor && tutor.FirstName}</h3>
            <h3>Last Name: {tutor && tutor.LastName}</h3>
            <h3>Degree: {tutor && tutor.degree}</h3>
            <h3>Major: {tutor && tutor.major}</h3>
            <h3>Minor: {tutor && tutor.minor}</h3>
            <h3>Subjects of Interest: {tutor && tutor.subject}</h3>
            <h3>Description: {tutor && tutor.description}</h3>


            <div className="links">
                <Link to="/editprofile">Edit Profile</Link>
            </div>

            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}

        </div>
     );
}
 
export default Profile;