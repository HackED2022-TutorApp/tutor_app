import TutorList from "./SiteUserList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : siteusers, isPending, error} = useFetch('http://127.0.0.1:8000/api/siteuser/');
    return (
        <div className="Home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {siteusers && <TutorList siteusers={siteusers}/>}
        </div>
    );
}

export default Home;