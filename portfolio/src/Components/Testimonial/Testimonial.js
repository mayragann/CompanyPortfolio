import React, { useState } from 'react'
import "./Testimonial.css"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Testimonial = () => {
    const data = [
        {
            "img":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "content": "It's not every day that I come across a super friendly and helpful project manager",
            "name": "John Doe",
            "position": "Project Manager"
        },
        {
            "img":"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Alexies Doe",
            "position": "Designer"
        },
        {
            "img":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Jane Smith",
            "position": "Javascript Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1519704917829-68da6d72c5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Alex",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Janey",
            "position": "Next.JS Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Liz",
            "position": "React.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1533421808550-58f0128fe66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Alfred",
            "position": "React.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1526417067504-c10772fb68a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Alex",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        
        {
            "img":"https://images.unsplash.com/photo-1528375646295-6d6fdd3ba742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80",
            "content": "It's not every day that I come across a super friendly and helpful designer",
            "name": "Daniel",
            "position": "Node.js Developer"
        },
        
        

    ]

    const [showMorePost,setShowMorePost] = useState(9)
    const loadMore = () => {
        setShowMorePost((prev) => prev + 3);
    };
  return (
    <div className='container testimonial-section'>


        <div className="section-title" id="testimonials">
            <h5>Testimonials</h5>
            <span className="line"></span>
        </div>

        <div className="row">

            {data.slice(0,showMorePost).map((item,index)=> (
                <Fade right>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}> 
                   
                    <div className={index===0 ? "marked-content-card":"content-card"}>
                        <img src={item.img} alt="Designer"/>
                        <p>{item.content}</p>
                        <p><span className="name">{item.name}</span></p>
                        <p>{item.position}</p>
                    </div>
                </div>
                </Fade>
            ))}


       
        </div>
        {showMorePost>=data.length ? null : (
             <Bounce left>
                 <span className="load-more-button" onClick={loadMore}> Load More</span> </Bounce>
            )}
    </div>
  )
}

export default Testimonial;