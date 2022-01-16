import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const TutorDetails = () => {
    const { id } = useParams();
    const {data : tutor, isPending, error} = useFetch('http://localhost:8000/api/tutor/' + id + '/');

    return (
        <div className="blog-details">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {tutor && <h2>Tutor Details</h2>}
            {tutor && <h2>{ tutor.FirstName }</h2> }
        </div>
    );
}
 
export default TutorDetails;