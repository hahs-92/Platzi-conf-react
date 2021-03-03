import { Link } from 'react-router-dom'

//ESTILOS
import '../style/component/Header.scss'


const Header = () => {
    return (
        <header className="Header">
            <h1 className='Header-title'>
                <Link to='/'>
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-basket fa-3x" title='checkout' />  
                </Link>
            </div>
        </header>
    )
}

export default Header