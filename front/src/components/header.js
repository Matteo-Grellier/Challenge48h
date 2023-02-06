import '../assets/Header.css'
function Header() {
    return (
        <div className="Header">
            <header className="Header-header">
                <ul className="nav">
                    <li id="home">
                        <a href="#"><img src="settings.png" /></a>
                    </li><li id="login">
                        <a href="#">Login/Connection</a>
                        <ul className="subnav">
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Connection</a></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </div>
    )
}
export default Header;

       