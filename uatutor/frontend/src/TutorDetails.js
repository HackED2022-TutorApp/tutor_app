import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const TutorDetails = () => {
    const { id } = useParams();
    const {data : tutor, isPending, error} = useFetch('http://localhost:8000/api/tutor/' + id + '/');

    return (
        <div className="tutor-details">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {tutor && <h1>Tutor Details</h1>}
            {tutor && <h2>{ tutor.FirstName }</h2> }
            {tutor && <p class='degree'>Degree: { tutor.degree }</p> }
            {tutor && <p class='major'>Major: { tutor.major }</p> }
            {tutor && tutor.minor && <p class="minor">Minor: { tutor.minor }</p> }
        
            {tutor && <p class="description">Courses: { tutor.subject }</p> } 
            {tutor && <p class="description">{ tutor.description }</p> }

        </div>
    );
}
 
export default TutorDetails;