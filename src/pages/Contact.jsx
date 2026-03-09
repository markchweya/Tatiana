export default function Contact(){
  return (
    <section className="container" style={{padding:'60px 20px'}}>
      <div style={{maxWidth:'720px', margin:'0 auto', background:'#ffffff', padding:'40px', border:'1px solid #ddd'}}>

        <h2 style={{fontSize:'34px', marginBottom:'10px', textAlign:'center'}}>Contact</h2>
        <p style={{textAlign:'center', marginBottom:'30px', color:'#555'}}>
          Feel free to send a message.
        </p>

        <form>

          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block', marginBottom:'6px'}}>Name</label>
            <input
              type="text"
              placeholder="Your name"
              style={{
                width:'100%',
                padding:'12px',
                border:'1px solid #ccc',
                fontSize:'16px'
              }}
            />
          </div>

          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block', marginBottom:'6px'}}>Email</label>
            <input
              type="email"
              placeholder="Your email"
              style={{
                width:'100%',
                padding:'12px',
                border:'1px solid #ccc',
                fontSize:'16px'
              }}
            />
          </div>

          <div style={{marginBottom:'25px'}}>
            <label style={{display:'block', marginBottom:'6px'}}>Message</label>
            <textarea
              placeholder="Write your message..."
              rows="6"
              style={{
                width:'100%',
                padding:'12px',
                border:'1px solid #ccc',
                fontSize:'16px',
                resize:'vertical'
              }}
            ></textarea>
          </div>

          <div style={{textAlign:'center'}}>
            <button
              type="submit"
              style={{
                padding:'12px 28px',
                fontSize:'15px',
                border:'1px solid #333',
                background:'#333',
                color:'#fff',
                cursor:'pointer'
              }}
            >
              Send Message
            </button>
          </div>

        </form>

      </div>
    </section>
  )
}
