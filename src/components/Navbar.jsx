import './Navbar.css';

const links = [
    {id: 'about', label: 'About'},
    {id: 'skills', label: 'Skills'},
    {id: 'projects', label: 'Projects'},
    {id: 'experience', label: 'Experience'},
    {id: 'contact', label: 'Contact'}
]

function Navbar() {
    return ( 
       <header header className="navbar">
         <div className="container navbar__inner">
            <a href='#home' className="navbar__logo">
                 R<span>.</span>
            </a>
            <nav aria-label="Main navigation" >
              <ul className='navbar__links'>
                {links.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.label}</a>
                    </li>
                ))}
              </ul>
            </nav>
         </div>
        </header>
     )
}

export default Navbar