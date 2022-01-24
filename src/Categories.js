import React from 'react';

const Categories = ({filterItems,categories}) => {
  return <div className='btn-container'>
    {
      categories.map((c,idx)=>{
       return <button key={idx} className='filter-btn' onClick={()=>filterItems(c)}>{c}</button>
      })
    }
  </div>;
};

export default Categories;
