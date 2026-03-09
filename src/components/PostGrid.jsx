import PostCard from './PostCard.jsx'
import { useState } from 'react'

export default function PostGrid(){
  const [posts] = useState([])

  return (
    <section className="container" style={{padding:'40px 20px'}}>
      {posts.length === 0 && (
        <p style={{fontSize:'18px', color:'#666', textAlign:'center'}}>
          The author hasn't published a post yet.
        </p>
      )}

      {posts.map((post)=>(
        <PostCard key={post.id || post.title} {...post} />
      ))}
    </section>
  )
}
