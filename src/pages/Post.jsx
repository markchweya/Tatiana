import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Post(){
  const [post,setPost] = useState(null)

  const id = window.location.pathname.split('/post/')[1]

  useEffect(()=>{
    const fetchPost = async () => {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

      if(data) setPost(data)
    }

    fetchPost()
  },[id])

  if(!post) return <p style={{padding:'40px'}}>Loading article...</p>

  return (
    <section className="container" style={{padding:'40px 20px'}}>
      {post.cover_url && (
        <img src={post.cover_url} style={{width:'100%', borderRadius:'10px', marginBottom:'20px'}} />
      )}

      <h1 style={{fontSize:'36px', marginBottom:'10px'}}>{post.title}</h1>

      {post.description && (
        <p style={{fontSize:'18px', color:'#666', marginBottom:'20px'}}>{post.description}</p>
      )}

      <div style={{fontSize:'18px', lineHeight:'1.7'}}>
        {post.content}
      </div>
    </section>
  )
}
