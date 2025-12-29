import { useState } from "react";
import useFetch from "../Repetitive Hooks/usefetch";
import { Link } from "react-router-dom";

const Moviegallery = () => {

    const [url, setUrl] = useState('https://api.tvmaze.com/shows');
    const [searchTerm, setSearchTerm] = useState('');
    
    const { data, loading, error } = useFetch(url);


    const isSearchData = url.includes('/search/');


    const getShowData = (item) => {
        return isSearchData ? item.show : item;
    };


const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    
    const query = e.target.elements.search.value.trim();
    
    if (query) {
        setSearchTerm(query);
        setUrl(`https://api.tvmaze.com/search/shows?q=${query}`);
        
        e.target.elements.search.value = '';
        
    } else {
        setSearchTerm('');
        setUrl('https://api.tvmaze.com/shows');
    }
};

    return ( 
        <div className="mainside-Container">   
            <div className="searchbar-container">
                <div className="search-bar">
                    <form onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            name="search"
                            placeholder="e.g., The Office, Girls, Batman" 
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
                
                <p>
                    **Currently Showing:** {isSearchData 
                        ? `Results for "${searchTerm}"` 
                        : 'All Shows'
                    }
                </p>
            </div>       
           <div className="gallery">
            {loading && <div>Loading...</div>}
            {error && <div>Error fetching data: {error.message}</div>}

            
            {data && data.length > 0 ? (
                data.map((item) => {
                    const movie = getShowData(item); 
                    
                    if (!movie || !movie.id) return null;

                    return (
                        <div key={movie.id} className="gallery-item" > 
                            <h3>{movie.name}</h3>
                            {movie.image?.medium && (
                                <Link to ={`/shows/${movie.id}`}>
                                    <img src={movie.image.medium} alt={movie.name}  />
                                </Link>
                            )}
                            <p>Status: {movie.status}</p>
                        </div>
                    );
                })
            ) : (
                !loading && !error && 
                <div>
                    No results found for **"{searchTerm}"**.
                </div>
            )}

        </div>
           </div>
           
    );
}
 
export default Moviegallery;