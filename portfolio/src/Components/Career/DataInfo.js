import React from 'react'
import { FcCollapse,FcExpand } from 'react-icons/fc';

const DataInfo = ({title,body}) => {
  return (
    <div className="post-card">
        <div className="collapse-option">
            <h6>{title}</h6>
            <p><FcCollapse size={20}/></p>
        </div>
        <p>{body}</p>

    </div>
  )
}

export default DataInfo;