import { useParams } from "react-router-dom";
import useFetch from "../Repetitive Hooks/usefetch";
import { useState } from "react";


const Movviedetails = () => {

    const {id} = useParams()
    const [url, setUrl] = useState('https://api.tvmaze.com/shows/');

    const {data, isPending , Error} = useFetch(url + id);

    console.log(data);      

    


    return ( 
       <div>
        <p>details</p>
        {isPending && <div>is pending</div>}
        {Error && <div>is error</div>}
        {data && <div className="detailsdiv">
            <div> <img src={data.image.original} alt={data.name} width="400" /></div>
            <div><h2>{data.name}</h2>
            
             <table>
                <tr>
                    <td>Genres:</td>
                    <td>{data.genres.join(', ')}</td> 
                </tr>
                <tr>
                    <td>Language:</td>
                    <td>{data.language}</td> 
                </tr>
                <tr>
                    <td>Ended:</td>
                    <td>{data.ended}</td> 
                </tr>                
             </table></div>
            </div>} 


       </div>
    );
}
 
export default Movviedetails;