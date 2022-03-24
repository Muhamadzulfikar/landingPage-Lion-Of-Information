import './navbar.css';

function Navbar() {
    return(
        <nav className="navbar flex">
            <img src="./asset/Logo.jpg" alt="logoCompany"/>
            <div className="right-content flex">
                <img src="./asset/Rectangle 456.svg" alt="language" />
                <a href="#">About</a>
                <a href="#">Program</a>
                <a href="#">Vacancy</a>
                <a href="#">Blog</a>
                <button className="bg-darkblue">Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar