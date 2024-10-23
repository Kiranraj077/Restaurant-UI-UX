import React,{useState} from 'react';
import "./style.css";
import Menu from './menuApi';
import Menucardy from './Menucardy';
import Navbars from './Navbars';

const Hotel = () => {

  const uniqueList=[...new Set(Menu.map((curElem)=>{
    return curElem.category;
  }))];

  console.log(uniqueList);

  const [Menudata,setMenudata]=useState(Menu);
  const [Menulist,setMenulist]=useState(uniqueList);

  const catgiver=(categ)=>{
     
      let updatedlist=Menu.filter((curElem)=>{
        return curElem.category===(categ.toLowerCase());
      });
      if(categ==="All")
        {
          updatedlist=Menu;
        }
     setMenudata(updatedlist);
  };
  
  return (
    <>
      <Navbars catgiver={catgiver} Menulist={Menulist}/>
      <Menucardy Menudata={Menudata}  />
    </>
  );
};

export default Hotel;
