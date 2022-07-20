import React from "react";
import "./Video.css";
import ReactPlayer from "react-player";
import Zoom from 'react-reveal/Zoom';

const Video = () => {
  const data = [
    {
      id: 1,
      url: "https://youtu.be/nTf2p36NAi8",
      title: "Speed Run of Coding in process",
      content:
        "Check out this pretty cool video of a screen of a coding professional.",
    },
    {
      id: 2,
      url: "https://youtu.be/SRec90j6lTY",
      title: "Explanation of design",
      content:
        "This is all very helpful information to learn more about designing.",
    },
    {
      id: 3,
      url: "https://youtu.be/8Sj2tbh-ozE",
      title: "Marketing 101",
      content:
        "Very helpful information on a little more information about marketing.",
    },
    {
      id: 4,
      url: "https://youtu.be/dFSia1LZI4Y",
      title: "Graphic design",
      content: "Graphic design is a very helpful tool.",
    },
    {
      id: 5,
      url: "https://youtu.be/JA9BqmqqhsI",
      title: "Design trends of the year",
      content: "These are some pretty nifty designs.",
    },
    {
      id: 6,
      url: "https://youtu.be/_2LLXnUdUIc",
      title: "An explanation on color theory",
      content:
        "Very useful information for anyone that wants to learn more about color theory.",
    },
  ];
  return (
    <div className="container video">
      <div className="section-title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>

      <div className="row" >
        {data.map((item, index) => (
          <Zoom>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index} id="video">
            <div className="video-details">
              <ReactPlayer
                url={item.url}
                loop={true}
                playing={false}
                controls
                width="auto"
                height="250px"
              />
              <div className="video-content">
              <h6>{item.title}</h6>
              <p>{item.content}</p>
              </div>
            </div>
          </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Video;
