const SiteUserList = (props) => {
   
    const siteusers = props.siteusers;

    return (
        <div className="site-user-list">
            <h2>Site User Lists</h2>
            {siteusers.map((siteuser) => (
                <div className="site-user-preview" key={siteuser.id}>
                    <h2>{ siteuser.FirstName }</h2>
                    <h5>{ siteuser.major }</h5>
                    <p>Courses: { siteuser.subject }</p>
                </div>
            ))}
        </div>
    );
}
 
export default SiteUserList;