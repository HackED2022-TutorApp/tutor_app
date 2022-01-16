import {Link} from 'react-router-dom'

const Profile = () => {
    
    return ( 
        <div className="profile">
            <h2>Your Profile</h2>
            <h3>Name:</h3>
            <h3>Degree:</h3>
            <h3>Major:</h3>
            <h3>Minor:</h3>
            <h3>Subjects of Interest:</h3>


            <div className="links">
                <Link to="/editprofile">Edit Profile</Link>
            </div>
        </div>
     );
}
 
export default Profile;