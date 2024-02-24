import "./css/Navbar.css";
function navbar(){
    return(<div className="container">
        <div className="left">
        <a>Amit Om Kashyap</a>
        </div>

        <div className="right">
        <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        </ul>
        </div>
        
    </div>
    )
}
export default navbar;