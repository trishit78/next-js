
const Navbar = () => {
  const links = [
    {
      title:'Guide',
      href:'#'
    },
    {
      title:'Pricing',
      href:'#'
    },
    {
      title:'Login',
      href:'#'
    }
  ]
  
  
  return (
    <div
      className='navbar-root'
    >
      <div className='logo'>Finta</div>
      <div className='link'>{links.map((link,idx)=>{
        return (
          <a key={idx} href="#" className='link-items'>{link.title}</a>
        )
      })}
      <button className="btn">Start trail</button>
      </div>
    </div>
  )
}

export default Navbar