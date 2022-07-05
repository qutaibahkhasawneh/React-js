import { useParams,useLocation } from 'react-router-dom';
const Home = () => {
    
   const urlInfo = new URLSearchParams(useLocation());
   console.log(urlInfo.get('pathname'))
   console.log(urlInfo.get('search'))
   const urlInfoSearch = new URLSearchParams(useLocation().search);
   console.log(urlInfoSearch.get('userId'))
    let location = useLocation();
    
    return (
        <div>
            <h1>HomePage</h1>
            {/* <p>{message}</p> */}
        </div>
    )
}
export default Home;