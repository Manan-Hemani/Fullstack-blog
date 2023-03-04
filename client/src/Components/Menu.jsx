import React from 'react';

const Menu = () => {

    const posts =[    
        {
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbbG0nw3LUFkD0ICxa-KoTFzZrIlX-2-sCCfhm8tPpQ&usqp=CAU&ec=48600112",
            "id": 1,
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, varius lorem non, hendrerit mi. Nam auctor enim id augue fringilla scelerisque. Morbi quis tortor malesuada, ullamcorper libero sed, dignissim felis.",        
            "title": "Post Title 1"    }
            ,    
            {        
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5YYCvvzh1k-9QItiTSEKcs2xhFRsmeKUIv6ZUIUzufg&usqp=CAU&ec=48600112",        
                "id": 2,        
                "desc": "Sed aliquam elit sed diam gravida, nec eleifend nisi lobortis. Aliquam at enim interdum, bibendum lectus eu, rutrum nibh. Duis euismod felis sit amet est euismod, sed aliquam enim mollis.",        
                "title": "Post Title 2"    
            },    
            {        
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmJ854SylxiYbD0s0YEVpJRLCFGuNgMbYR6KXXI9v8A&usqp=CAU&ec=48600112",        
                "id": 3,        
                "desc": "Vestibulum luctus purus id velit blandit, id congue dui sodales. Sed venenatis risus nec metus ullamcorper, sed dictum ipsum efficitur. Nullam ac tortor eget sapien maximus consectetur.",        
                "title": "Post Title 3"    
            }
        ]
        
    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className="post" id={post.id}>
                    <img src={post.img} alt=""/>
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu;
