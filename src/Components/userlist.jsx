import useFetch from "../Repetitive Hooks/usefetch";


const UserList = () => {
    

    const {data, isPending , Error} = useFetch('http://localhost:3000/users');
    return ( 

        <div className="userlist">
            {isPending && <div>Loading...</div>}
            {Error && <div>Error fetching data: {Error.message}</div>}
            {data &&  data.map((user) =><div 
                    key={user.id} className="gallery-item" > 
                    <h3>{user.name}</h3>
                </div>)
                
            }
           </div>

       


     );
}
 
export default UserList;