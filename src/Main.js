import React,{useEffect,useState,useRef} from 'react';
import { Nav } from './Nav';
import './Main.css';



const API_KEY = process.env.REACT_APP_NEWS_API;
const BASE_URL = "https://content.guardianapis.com/search?api-key=";


export const Main = ()=>{

    const [news,setNews] = useState([]);
    const [query,setQuery] = useState("India");
    const [searchQuery,setSearchQuery] = useState("");
    const [activeCategory,setActiveCategory] = useState(null);


    const inputRef = useRef("");

  
      useEffect(()=>{
          fetchNews(query)
        },[query]);

 
    async function fetchNews(query){
        const res = await fetch(`${BASE_URL}${API_KEY}&q=${query}&show-fields=thumbnail,trailText`)
        const data = await res.json();
        console.log(data); 
        let val = data.response.results
        setNews(val);

      }
  

      const searchNewsByName = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
      };
      

      function load(){
        window.location.reload();
        setActiveCategory(null)
      }

      const handleCategoryClick=(category)=>{
          console.log("Clicked category:", category);
          setQuery(category);
          setActiveCategory(category);
      }

      function handleSearch(){
        if(searchQuery.trim()){
           setQuery(searchQuery)
           setActiveCategory(null)
        }
      }

    return(<>

        <Nav activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} handleSearch={handleSearch} 
        ref={inputRef} value={searchQuery}  
        onChange={searchNewsByName}  onClick={load}/>

        <div className='container flex'>
            {news?.map((item)=>(
                (<div className='card-container' key={item.id}  onClick={() => window.open(item.webUrl,"_blank")}>
                    <img src={item.fields?.thumbnail || "https://placehold.co/600x400&text=No+Image"} alt='card-img'/>
                    <div className='card-details'>
                            <h4>{item.webTitle}</h4>
                            <p>Category:{item.sectionName}</p>
                            <p>{item.fields?.trailText || "no discription available"}</p>
                 </div>     
                </div>) || "No News Available"
            ))}
        </div>

        
        {/* <template>
         <div className='card-container'>
                <img src='https://placehold.co/600x400' alt='card-img'/>
            <div className='card-details'>
                <h3>Title</h3>
                <p>Category</p>
                <p>Description</p>
            </div>     
        </div>
        </template> */}

    </>)
}
