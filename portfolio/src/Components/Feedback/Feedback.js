import React from "react";
import "./Feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful project manager",
      name: "John Doe",
      position: "Project Manager",
    },
    {
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Alexies Doe",
      position: "Designer",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Jane Smith",
      position: "Javascript Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1519704917829-68da6d72c5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Alex",
      position: "Node.js Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Janey",
      position: "Next.JS Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Liz",
      position: "React.js Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1533421808550-58f0128fe66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Alfred",
      position: "React.js Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1526417067504-c10772fb68a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Alex",
      position: "Node.js Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Daniel",
      position: "Node.js Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Daniel",
      position: "Node.js Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
      content:
        "It's not every day that I come across a super friendly and helpful designer",
      name: "Daniel",
      position: "Node.js Developer",
    }


  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows:1,
    slidesPerRow:1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container feedback-slider" id="feedback" >
      <div className="section-title">
        <h5>Feedback</h5>
        <span className="line"></span>
      </div>

        <div className="feedback-slide">
      <Slider {...settings}>
          {data.map((item, index) => (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
              <div className="content-slider" >
                <img src={item.img} alt="slider" className="center-image" />
                <p>{item.content}</p>
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
      </Slider>
        </div>
    </div>
  );
};

export default Feedback;
