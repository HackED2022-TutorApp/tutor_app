import TutorList from "./TutorList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : ts, isPending, error} = useFetch('http://127.0.0.1:8000/api/tutor/');
    return (
        <div className="Home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {ts && <TutorList ts={ts}/>}
        </div>
    );
}

export default Home;