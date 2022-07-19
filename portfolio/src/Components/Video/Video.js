import React from 'react'
import "./Video.css"
import ReactPlayer from 'react-player'

const Video = () => {

    const data =[
        {
            id:1,
            url:"https://youtu.be/nTf2p36NAi8",
            title:"Speed Run of our Coding in process"
        },
        {
            id:2,
            url:"https://youtu.be/SRec90j6lTY",
            title:"Explanation of design"
        },
        {
            id:3,
            url:"https://youtu.be/8Sj2tbh-ozE",
            title:"Marketing 101"
        },
        {
            id:4,
            url:"https://youtu.be/dFSia1LZI4Y",
            title:"Graphic design"
        },
        {
            id:5,
            url:"https://youtu.be/JA9BqmqqhsI",
            title:"Design trends of the year"
        },
        {
            id:6,
            url:"https://youtu.be/_2LLXnUdUIc",
            title:"An explanation on color theory"
        }

    ]
  return (
    <div className="container video">
        <div className="section-title">
            <h5>Video</h5>
            <span className="line"></span>
        </div>
        
        <div className="row">
            {data.map((item,index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="video-details">
                    <ReactPlayer url={item.url} controls width="auto" height="300px"/>

                    </div>


                </div>

            ))}


        </div>

    </div>
  )
}

export default Video