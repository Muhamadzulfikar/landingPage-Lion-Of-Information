function Navbar() {
    return (
        <nav className="navbar">
            <div className="flex">
                <img src="./asset/Logo.jpg" />
                <h1 className="navbar-career">Career</h1>
            </div>
            <div className='right-content'>
                <a>About</a>
                <a>Program</a>
                <a>Vacancy</a>
                <a>Blog</a>
                <button>Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar