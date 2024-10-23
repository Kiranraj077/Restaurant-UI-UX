import React from 'react'

const Navbars = ({ catgiver, Menulist } ) => {
  return (
    <>
    
    <nav className="navbar">
        <div className="btn-group">
          {Menulist.map((curElem)=>{
            return(
          <button className="btn-group__item" onClick={()=>catgiver(curElem)}>{curElem}</button>);
          })
        }
          
        </div>
      </nav>
    </>
  )
}
  



export default Navbars
