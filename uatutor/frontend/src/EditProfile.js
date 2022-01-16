import {Link} from 'react-router-dom'
import useFetch from "./useFetch";

const EditProfile = () => {
    
    /*Need to get current logged in user's info, currently hardcoded*/
    /*const { id } = useParams();*/
    const {data : tutor, isPending, error} = useFetch('http://localhost:8000/api/tutor/' + 1 + '/');

    return ( 
        <div className="editprofile">
            <h2>Your Profile - Editing</h2>
            <form>
                <div className='editprofile'>
                    <h3>First Name:</h3>
                        <input 
                            type="text"
                            defaultValue={tutor && tutor.FirstName}
                            maxLength="20"
                            required
                            />
                </div>
                <div className='editprofile'>
                    <h3>Last Name:</h3>
                        <input 
                            type="text"
                            defaultValue={tutor && tutor.LastName}
                            maxLength="20"
                            required
                            />
                </div>
                <div className='editprofile'>
                    <h3>Degree:</h3>
                        <select>
                            {tutor && <option value={tutor.degree}>{tutor.degree}</option>}
                        </select>
                </div>
                <div className='editprofile'>
                    <h3>Major:</h3>
                        <select>
                        {tutor && <option value={tutor.major}>{tutor.major}</option>}
                        </select>
                </div>
                <div className='editprofile'>
                    <h3>Minor:</h3>
                        <input 
                            type="text"
                            defaultValue={tutor && tutor.minor}
                            maxLength="20"
                            required
                            />
                </div>
                <div className='editprofile'>
                    <h3>Subjects of Interest:</h3>
                        <input 
                            type="text"
                            defaultValue={tutor && tutor.subject}
                            maxLength="20"
                            required
                            />
                </div>
                <div className='editprofile'>
                    <h3>Description:</h3>
                        <textarea
                            type="text"
                            defaultValue={tutor && tutor.description}
                            rows="4"
                            cols="50"
                            maxLength="150"
                            
                            required
                            />
                </div>
            </form>

            <div className="links">
                <Link to="/profile">Save</Link>
            </div>

            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}

        </div>
     );
    }
    
    export default EditProfile;