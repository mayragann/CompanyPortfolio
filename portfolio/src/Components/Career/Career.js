import React, { useState, useEffect } from "react";
import "./Career.css";
import DataInfo from "./DataInfo";

const Career = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  const loadPostData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
         
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadPostData();
  }, []);

  // for pagination

  const PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageClick = ({selected: selectedPage}) => {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE;
  const currentPageData =  data.slice(offset, offset+PER_PAGE);

  const pageCount = Math.ceil(data.length/PER_PAGE); //rounds number to full


  return (
    <div className="container career">
      <div className="section-title">
        <h5>Career</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data && currentPageData.map((item,index)=>(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" >
                <DataInfo key={index} {...item}/>
                

            </div>
        ))};


      </div>
    </div>
  );
};

export default Career;
