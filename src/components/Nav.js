import './Nav.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Nav = () => {
    return (
    <nav>
        <div className="links">
            <div className="logo">
            <MenuRoundedIcon className="menu"/>
            </div>
            <p className="navLink">HOME</p>
            <p className="navLink">SHOP</p>
            <p className="navLink">MAGAZINE</p>
        </div>
        <div className="actions">
            <ShoppingCartIcon className="cart"/>
            <p className="navLink">LOGIN</p>
        </div>
    </nav>
    )
}

export default Nav;