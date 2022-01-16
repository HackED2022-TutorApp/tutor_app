import {Link} from 'react-router-dom'

const EditProfile = () => {
    
    return ( 
        <div className="editprofile">
            <h2>Your Profile - Editing</h2>
            <form>
                <div className='editprofile'>
                    <h3>Name:</h3>
                        <input 
                            type="text"
                            required
                        />
                </div>
                <div className='editprofile'>
                    <h3>Degree:</h3>
                        <input 
                            type="text"
                            required
                        />
                </div>
                <div className='editprofile'>
                    <h3>Major:</h3>
                        <input 
                            type="text"
                            required
                        />
                </div>
                <div className='editprofile'>
                    <h3>Minor:</h3>
                        <input 
                            type="text"
                            required
                        />
                </div>
                <div className='editprofile'>
                    <h3>Subjects of Interest:</h3>
                        <input 
                            type="text"
                            required
                        />
                </div>
            </form>

            <div className="links">
                <Link to="/profile">Save</Link>
            </div>
        </div>
     );
}
 
export default EditProfile;