import PostCard from './PostCard.jsx'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function PostGrid(){
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending:false })

      if(!error && data){
        setPosts(data)
      }

      setLoading(false)
    }

    fetchPosts()
  },[])

  if(loading){
    return (
      <section className="container" style={{padding:'40px 20px'}}>
        <p style={{textAlign:'center'}}>Loading posts...</p>
      </section>
    )
  }

  if(posts.length === 0){
    return (
      <section className="container" style={{padding:'40px 20px'}}>
        <p style={{fontSize:'18px', color:'#666', textAlign:'center'}}>
          The author hasn't published a post yet.
        </p>
      </section>
    )
  }

  return (
    <section className="container" style={{padding:'40px 20px'}}>
      {posts.map((post)=>(
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  )
}
