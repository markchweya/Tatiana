export default function PostCard({title, excerpt, date}){
  return (
    <div style={{border:'1px solid #ddd', padding:'16px', marginBottom:'16px'}}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <small>{date}</small>
    </div>
  )
}
