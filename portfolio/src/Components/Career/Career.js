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

  return (
    <div className="container career">
      <div className="section-title">
        <h5>Career</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data && data.map((item,index)=>(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" >
                <DataInfo key={index} {...item}/>
                

            </div>
        ))};


      </div>
    </div>
  );
};

export default Career;
