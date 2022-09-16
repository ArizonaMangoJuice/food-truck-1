
const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={require("../../images/logo.png")} alt="" />
            <nav className="header-nav">
                <a className="header-nav-link" href="/#">About</a>
                <a className="header-nav-link" href="/#">Menu</a>
                <a className="header-nav-link" href="/#">Location</a>
                <a className="header-nav-link highlight" href="/#">Call Us!</a>
            </nav>
        </header>
    );
}

export default Header;