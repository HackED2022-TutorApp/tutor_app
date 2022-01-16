const TutorList = () => {
    const ts = [
        {
            "name":"Brad",
            "Major":"Computing science",
            "courses": "CMPUT 174, CMPUT 175, CMPUT 201",
            "id":1
        },
        {
            "name":"Xuanhao",
            "Major":"Computing science",
            "courses": "CMPUT 174, CMPUT 175, CMPUT 201",
            "id":2
        },
        {
            "name":"Yuchen",
            "Major":"Computing science",
            "courses": "CMPUT 174, CMPUT 175, CMPUT 201",
            "id":3
        },
        {
            "name":"Harish",
            "Major":"Computing science",
            "courses": "CMPUT 174, CMPUT 175, CMPUT 201",
            "id":4
        },
        {
            "name":"Glenn",
            "Major":"Computing science",
            "courses": "CMPUT 174, CMPUT 175, CMPUT 201",
            "id":5
        }
    ]
    return (
        <div className="tutor-list">
            <h2>Tutors Lists</h2>
            {ts.map((tutor) => (
                <div className="tutor-preview" key={tutor.id}>
                    <h2>{ tutor.name }</h2>
                    <h5>{ tutor.Major }</h5>
                    <p>Courses: { tutor.courses }</p>
                </div>
            ))}
        </div>
    );
}
 
export default TutorList;