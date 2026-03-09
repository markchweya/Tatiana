export default function PostCard({ id, title, description, cover_url }){
  const openPost = () => {
    window.location.href = `/post/${id}`
  }

  return (
    <div onClick={openPost} style={{cursor:'pointer', marginBottom:'40px'}}>

      <div
        style={{
          width:'100%',
          height:'220px',
          borderRadius:'6px',
          marginBottom:'12px',
          backgroundImage: cover_url ? `url('${cover_url}')` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: cover_url ? 'transparent' : '#e9e9e9',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        {!cover_url && (
          <span style={{fontSize:'20px', color:'#777', fontFamily:'Georgia, serif'}}>
            Tatiana's Blog
          </span>
        )}
      </div>

      <h3 style={{fontSize:'22px', marginBottom:'6px'}}>{title}</h3>

      {description && (
        <p style={{color:'#666', marginBottom:'8px'}}>{description}</p>
      )}

    </div>
  )
}
