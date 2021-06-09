import React from 'react'

function Map() {
    const posts = [
        {
          title: "Primer Posteo",
          body: "Mi primer curso de JS",
          id: 1,
        },
        { 
          title: "Segundo Posteo",
          body: "Mi primer curso de React",
          id: 2,
        },
      ];
    return (
        <div>
            {
                posts.map((post, index)=>{ return (
                  <div>
                    <p id={index}>{post.title}</p>
                    <p id={index}>{post.body}</p>
                    <hr/>
                  </div>
                ) })
            }
        </div>
    )
}

export default Map
