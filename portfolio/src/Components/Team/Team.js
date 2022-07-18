import React from 'react'
import "./Team.css"

const Team = () => {
    const data =[
        {
            id:1,
            name: "John Doe",
            content: "Is our expert at Media Marketing. He has three cats and a hobby farm.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:2,
            name: "Jane Doe",
            content: "Is our Product Expert. She loves all things that are furry and outdoors.",
            img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:3,
            name: "Liz Owens",
            content: "She is the innovation guru. She likes to swim with sharks.",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:4,
            name: "Tammy Goodfella",
            content: "Is our go to for anything that has to do with technology. Has ten dogs.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:5,
            name: "William Smith",
            content: "He has a way with enviorment issues that put us at the lead for the department.",
            img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:6,
            name: "Janice Smith",
            content: "It is not every day that you come across a passionate and trustworthy financial advisor",
            img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },

    ]

  return (
    <div className="container team-members">
        <div className="section-title">
            <h5>Team Members</h5>
            <span className="line"></span>
        </div>

        <div className="row">
            {data.map((item,index) => (
                <div className="col-xl-4 col-lg-4 col-md-2 col-sm-12">
                    <div className="card team-members-item">
                        <img src={item.img} alt="team member" />
                        <div className="team-info">
                            <h6>{item.name}</h6>
                            <p>{item.content}</p>
                        </div>
                        <span className="line-for-team-members"></span>
                    </div>

                </div>
            ))};


        </div>
    </div>
  )
};

export default Team