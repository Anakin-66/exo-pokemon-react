import Nav from "./Nav";

function Header () {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png";

    return (
        <header>
            <h1>Site de mon équipe Pokémon</h1>
            <Nav />
            <div className="myImage">
                <img src= {logo} />
            </div>
        </header>
    );
}

export default Header;
