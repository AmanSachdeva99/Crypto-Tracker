import React from 'react'

const Pagination = ({totalPost,postPerPage,pagination}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i)
    }
  
    return (
    <div>
      {pageNumbers?.map((p)=>{
        return(
            <ul style={{listStyle:"none",display:'inline-block'}}>
                <li><a href="!#" onClick={pagination(p)} style={{marginRight:"10px"}}>{p}| </a></li>
            </ul>
        )
      })}
    </div>
  )
}

export default Pagination
