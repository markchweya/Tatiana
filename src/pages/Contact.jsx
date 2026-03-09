export default function Contact(){
  return (
    <section className="container" style={{padding:'80px 20px'}}>
      <div style={{maxWidth:'680px', margin:'0 auto'}}>

        <h2 style={{fontSize:'36px', marginBottom:'8px', textAlign:'center'}}>Contact</h2>
        <p style={{textAlign:'center', marginBottom:'40px', color:'#666'}}>
          Feel free to send a message.
        </p>

        <form style={{display:'flex', flexDirection:'column', gap:'22px'}}>

          <input
            type="text"
            placeholder="Your name"
            style={{
              width:'100%',
              padding:'14px 16px',
              fontSize:'16px',
              border:'none',
              borderRadius:'8px',
              background:'#f4f4f4',
              outline:'none'
            }}
          />

          <input
            type="email"
            placeholder="Your email"
            style={{
              width:'100%',
              padding:'14px 16px',
              fontSize:'16px',
              border:'none',
              borderRadius:'8px',
              background:'#f4f4f4',
              outline:'none'
            }}
          />

          <textarea
            placeholder="Write your message..."
            rows="6"
            style={{
              width:'100%',
              padding:'14px 16px',
              fontSize:'16px',
              border:'none',
              borderRadius:'8px',
              background:'#f4f4f4',
              resize:'vertical',
              outline:'none'
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              marginTop:'10px',
              padding:'14px',
              fontSize:'16px',
              border:'none',
              borderRadius:'8px',
              background:'#222',
              color:'#fff',
              cursor:'pointer'
            }}
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}
