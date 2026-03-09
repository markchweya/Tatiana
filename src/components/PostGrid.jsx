import PostCard from './PostCard.jsx'
import { useEffect, useState } from 'react'

export default function PostGrid(){
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem('posts') || '[]')
    setPosts(stored)
  },[])

  return (
    <section style={{padding:'20px'}}>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map((post,i)=>(
        <PostCard key={i} {...post} />
      ))}
    </section>
  )
}
