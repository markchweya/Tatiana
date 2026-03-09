import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Admin(){
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [content,setContent] = useState('')
  const [coverFile,setCoverFile] = useState(null)
  const [uploading,setUploading] = useState(false)

  const handleImage = (e) => {
    const file = e.target.files[0]
    if(!file) return
    setCoverFile(file)
  }

  const publishPost = async () => {
    if(!title || !content){
      alert('Title and article are required')
      return
    }

    setUploading(true)

    let cover_url = null

    // Try upload if image exists
    if(coverFile){
      const fileName = `${Date.now()}_${coverFile.name}`

      const { error: uploadError } = await supabase.storage
        .from('covers')
        .upload(fileName, coverFile)

      if(!uploadError){
        const { data } = supabase.storage
          .from('covers')
          .getPublicUrl(fileName)

        cover_url = data.publicUrl
      }
    }

    const { error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          description,
          content,
          cover_url
        }
      ])

    if(error){
      console.error('Insert error:', error)
      alert('Publish failed: ' + error.message)
      setUploading(false)
      return
    }

    alert('Article published successfully!')

    setTitle('')
    setDescription('')
    setContent('')
    setCoverFile(null)

    setUploading(false)
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

          <input type="file" accept="image/*" onChange={handleImage} />

          <textarea
            placeholder="Write your article here..."
            rows="12"
            value={content}
            onChange={e=>setContent(e.target.value)}
            style={{padding:'16px', fontSize:'16px', border:'none', background:'#f4f4f4', borderRadius:'8px'}}
          ></textarea>

          <button
            onClick={publishPost}
            disabled={uploading}
            style={{padding:'14px', fontSize:'16px', border:'none', borderRadius:'8px', background:'#222', color:'#fff', cursor:'pointer'}}
          >
            {uploading ? 'Publishing...' : 'Publish Article'}
          </button>

        </div>
      </div>
    </section>
  )
}
