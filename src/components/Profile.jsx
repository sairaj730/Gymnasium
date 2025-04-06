export const Profile = () => {
    const name = "sai raj";
    return (
        <ProfileCard
    name={name}
    age={25}
    gender="male"
    greetings= {
        <div>
            Hello, my name is {name}
        </div>
    }>
        <p>Hobbies: reading, painting, coding</p>
        <button>submit!</button>
    </ProfileCard>
    );
}

function ProfileCard({name,age,gender,greetings,children}) {
    return (
        <>
            <h2>Name : {name}</h2>
            <h3>Age: {age}</h3>
            <h3>Gender : {gender}</h3>
            <p>{greetings}</p>
            <div>{children}</div>
        </>
    );
}