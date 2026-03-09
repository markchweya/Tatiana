import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PostGrid from './components/PostGrid.jsx'
import Admin from './pages/Admin.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Post from './pages/Post.jsx'

export default function App(){
  const path = window.location.pathname

  if(path === '/admin'){
    return <Admin />
  }

  if(path.startsWith('/post/')){
    return (
      <div>
        <Header />
        <Post />
      </div>
    )
  }

  if(path === '/about'){
    return (
      <div>
        <Header />
        <About />
      </div>
    )
  }

  if(path === '/contact'){
    return (
      <div>
        <Header />
        <Contact />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Hero />
      <PostGrid />
    </div>
  )
}
