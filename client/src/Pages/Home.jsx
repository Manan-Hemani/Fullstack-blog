import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        
        <div className="home">
            <div className="posts">
                {posts.map( post => (
                    <div className="post" id={post.id}>
                        <div classNmae="img">
                            <img src={post.img} alt="img"/>
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.item}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Home;
