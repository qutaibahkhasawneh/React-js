import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import './single.css'
const Film = ()=>{

    const {id} = useParams();
    const [film , setFilm] = useState([]);
 
    useEffect (()=>{
        const fetchData = async ()=>{
            const api = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7');
            const allData = await api.json();
            allData.results.filter((data)=>{
				if(data.id==id){
					return setFilm(data)
				}
			})
			

        }
        fetchData();
    } , [])

	console.log(film)
    return(
        <div className  ="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={'https://image.tmdb.org/t/p/w500/'+film.backdrop_path}  /></div>
						</div>

						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{film.title}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">Rate : {film.vote_average}</span>
						</div>
						<p className="product-description">{film.overview}</p>
						<h4 className="price">Generate Date: <span>{film.release_date}</span></h4>


		
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">Watch</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Film;