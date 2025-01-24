import React from 'react';
import logo from '../src/Images/Logo.png';
import './Nav.css';

const categories = [
    { id: "ipl", label: "IPL" },
    { id: "finance", label: "Finance" },
    { id: "politics", label: "Politics" },
  ];

export const Nav =({activeCategory,
                    handleCategoryClick,
                    handleSearch,
                    ref,value,
                    onChange,
                    onClick})=>{

     return(<>
        <div className='nav-container flex'>
            <div className='nav-logo'>
               <img src={logo} alt='logo' onClick={onClick} />
            </div>
            <div className='nav-items'>
                <ul className='flex'>
                {categories.map((cat) => (
                <li
                    key={cat.id}
                    id={cat.id}
                    className={activeCategory === cat.id ? "active" : ""}
                    onClick={() => handleCategoryClick(cat.id)}
                >
                    {cat.label}
                </li>
              ))}
            
                </ul>
            </div>
            <div className='search-text flex'>
                <input type='text' placeholder='Enter Here...' 
                 ref={ref} value={value} onChange={onChange}></input>
                <button onClick={handleSearch}>Search</button>
            </div>
         </div>
     </>)
}


