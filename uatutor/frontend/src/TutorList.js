import { Link, Redirect } from "react-router-dom";

const TutorList = (props) => {
   
    const tutors = props.tutors;
    
    return (

        <div className="tutor-list">
            <h2>Tutor Lists</h2>
            {tutors.map((tutor) => (
                <Link to={"/tutors/"+tutor.id}>
                    <div className="tutor-preview" key={tutor.id}>
                        <h2>{ tutor.FirstName }</h2>
                        <h5>{ tutor.major }</h5>
                        <p>Courses: { tutor.subject }</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default TutorList;