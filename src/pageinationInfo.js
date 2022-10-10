/*
//pagination.js
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

//App.js


  pagination declaration
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage,setPostPerPage]=useState(10)

  const lastIndexOfPost=currentPage*postPerPage
  const firstIndexOfPost =lastIndexOfPost-postPerPage
  const postShowing=filterCoin.slice(firstIndexOfPost,lastIndexOfPost)

const pagination=(p)=>{
  setCurrentPage(p)
}

<Pagination totalPost={filterCoin.length} postPerPage={postPerPage} pagination={pagination}/>
         </div> 
*/