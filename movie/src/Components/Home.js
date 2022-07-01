
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Home = ()=>
{
    const [data , setData] = useState([]);
    useEffect (()=>{
        const fetchData = async ()=>{
            const api = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7');
            const allData = await api.json();
            setData(allData.results);

        }
        fetchData();
    } , [])
  
    return (

        <div className="row m-5 p-3">
            {data.map((user)=>{
                return(
                    <div key={user.id} className="col-lg-4 mb-3 d-flex align-items-stretch">
                        <div className="card">
                            <img src={'https://image.tmdb.org/t/p/w500/'+user.backdrop_path} className="card-img-top" alt="Card Image"/>
                            <div className="card-body d-flex flex-column">
                             <h4 className="card-title ">{user.title}</h4>
                            <p className="card-text mb-4 my-2">{user.overview}</p>
                            <Link to={'/Single/'+user.id} className="btn btn-primary mt-auto align-self-start">overview</Link>
                      </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;