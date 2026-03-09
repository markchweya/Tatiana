import { useState } from 'react'

export default function Admin(){
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [content,setContent] = useState('')
  const [cover,setCover] = useState(null)

  const handleImage = (e) => {
    const file = e.target.files[0]
    if(!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setCover(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const publishPost = () => {
    const post = {
      title,
      description,
      content,
      cover,
      date: new Date().toLocaleDateString()
    }

    const existing = JSON.parse(localStorage.getItem('posts') || '[]')
    existing.unshift(post)
    localStorage.setItem('posts', JSON.stringify(existing))

    alert('Post published!')

    setTitle('')
    setDescription('')
    setContent('')
    setCover(null)
  }

  return (
    <section className="container" style={{padding:'60px 20px'}}>

      <div style={{maxWidth:'800px', margin:'0 auto'}}>

        <h2 style={{fontSize:'34px', marginBottom:'30px'}}>Write Article</h2>

        <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>

          <input
            type="text"
            placeholder="Article Title"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            style={{padding:'14px', fontSize:'18px', border:'none', background:'#f4f4f4', borderRadius:'8px'}}
          />

          <input
            type="text"
            placeholder="Article Description"
            value={description}
            onChange={e=>setDescription(e.target.value)}
            style={{padding:'14px', fontSize:'16px', border:'none', background:'#f4f4f4', borderRadius:'8px'}}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            style={{fontSize:'16px'}}
          />

          {cover && (
            <img
              src={cover}
              alt="cover preview"
              style={{width:'100%', borderRadius:'10px'}}
            />
          )}

          <textarea
            placeholder="Write your article here..."
            rows="12"
            value={content}
            onChange={e=>setContent(e.target.value)}
            style={{padding:'16px', fontSize:'16px', border:'none', background:'#f4f4f4', borderRadius:'8px'}}
          ></textarea>

          <button
            onClick={publishPost}
            style={{
              padding:'14px',
              fontSize:'16px',
              border:'none',
              borderRadius:'8px',
              background:'#222',
              color:'#fff',
              cursor:'pointer'
            }}
          >
            Publish Article
          </button>

        </div>

      </div>

    </section>
  )
}
