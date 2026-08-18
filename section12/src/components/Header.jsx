import "./Header.css"

const Header = ({ title, leftChild, rightChild }) => {
    return (
    <div>
        <header className="Header">
            <div className= "header_left">{leftChild}</div>
            <div className= "header_center">{title}</div>
            <div className= "header_right">{rightChild}</div>
        </header>
    </div>
    );
}

export default Header;