export default function Contact(){
  return (
    <section className="container" style={{padding:'40px 20px'}}>
      <h2 style={{fontSize:'32px', marginBottom:'20px'}}>Contact</h2>

      <form style={{maxWidth:'600px'}}>
        <div style={{marginBottom:'15px'}}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            style={{width:'100%', padding:'10px', marginTop:'5px'}}
          />
        </div>

        <div style={{marginBottom:'15px'}}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
            style={{width:'100%', padding:'10px', marginTop:'5px'}}
          />
        </div>

        <div style={{marginBottom:'15px'}}>
          <label>Description</label>
          <textarea
            placeholder="Write your message..."
            rows="6"
            style={{width:'100%', padding:'10px', marginTop:'5px'}}
          ></textarea>
        </div>

        <button type="submit" style={{padding:'10px 20px'}}>
          Send Message
        </button>
      </form>

    </section>
  )
}
