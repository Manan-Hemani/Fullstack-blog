import React from 'react';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu';

const Single = () => {
    return (
    <div className="single">
        <div className="content">
            <img src="" alt=""/>
            <div className="user">
                <img src="" alt=""/>
                <div className="info">
                    <span>John</span>
                    <p>Posted 2 days ago</p>
                </div>
                <div className="edit">
                    <Link to={`/write?edit=2`}>
                        <img src={Edit} alt="edit"/>
                    </Link>
                    <img src={Delete} alt="delete"/>
                </div>
            </div>
            <h1></h1>
            <p></p>
        </div>
        <Menu />
    </div>
    )
}

export default Single;
