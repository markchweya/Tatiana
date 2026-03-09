export default function Header(){
  const path = window.location.pathname

  return (
    <header className="site-header">
      <div className="container">

        <h1 className="site-title">Tatiana's Blog Page</h1>

        <div className="divider"></div>

        <nav className="nav">
          {path !== '/' && (
            <>
              <a href="/">Home</a>
              <span>·</span>
            </>
          )}

          {path !== '/' && (
            <>
              <a href="/">Articles</a>
              <span>·</span>
            </>
          )}

          {path !== '/about' && (
            <>
              <a href="/about">About</a>
              <span>·</span>
            </>
          )}

          {path !== '/contact' && (
            <a href="/contact">Contact</a>
          )}
        </nav>

        <div className="divider"></div>

      </div>
    </header>
  )
}
