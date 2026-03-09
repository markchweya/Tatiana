export default function PostCard({ id, title, description, cover_url }){
  const openPost = () => {
    window.location.href = `/post/${id}`
  }

  return (
    <div onClick={openPost} style={{cursor:'pointer', padding:'20px', marginBottom:'20px'}}>
      {cover_url && (
        <img
          src={cover_url}
          alt={title}
          style={{width:'100%', borderRadius:'10px', marginBottom:'10px'}}
        />
      )}

      <h3 style={{fontSize:'24px', marginBottom:'8px'}}>{title}</h3>

      {description && (
        <p style={{color:'#666'}}>{description}</p>
      )}
    </div>
  )
}
