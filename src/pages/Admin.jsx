import { useState } from 'react'

export default function Admin(){
  const [title,setTitle] = useState('')
  const [excerpt,setExcerpt] = useState('')
  const [content,setContent] = useState('')

  const publishPost = () => {
    const post = {
      title,
      excerpt,
      content,
      date: new Date().toLocaleDateString()
    }

    const existing = JSON.parse(localStorage.getItem('posts') || '[]')
    existing.unshift(post)
    localStorage.setItem('posts', JSON.stringify(existing))

    alert('Post published!')

    setTitle('')
    setExcerpt('')
    setContent('')
  }

  return (
    <div style={{maxWidth:'800px', margin:'40px auto'}}>
      <h2>Admin - Write Blog</h2>

      <input
        placeholder='Post Title'
        value={title}
        onChange={e=>setTitle(e.target.value)}
        style={{width:'100%', padding:'10px', marginBottom:'10px'}}
      />

      <input
        placeholder='Short Description'
        value={excerpt}
        onChange={e=>setExcerpt(e.target.value)}
        style={{width:'100%', padding:'10px', marginBottom:'10px'}}
      />

      <textarea
        placeholder='Write your blog content here...'
        value={content}
        onChange={e=>setContent(e.target.value)}
        rows='10'
        style={{width:'100%', padding:'10px', marginBottom:'10px'}}
      />

      <button onClick={publishPost} style={{padding:'10px 20px'}}>
        Publish Post
      </button>
    </div>
  )
}
