import TutorList from "./TutorList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : tutors, isPending, error} = useFetch('http://127.0.0.1:8000/api/tutor/');
    return (
        <div className="Home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {tutors && <TutorList tutors={tutors}/>}
        </div>
    );
}

export default Home;