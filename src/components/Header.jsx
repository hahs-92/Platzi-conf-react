import { useContext } from 'react'
import { Link } from 'react-router-dom'

//CONTEXT
import AppContext from '../context/AppContext'

//ESTILOS
import '../style/component/Header.scss'


const Header = () => {
    // const { state } = useContext(AppContext)
    // const { cart } = state

    const { state: { cart } } = useContext(AppContext)//REEMPLAZA A LAS LINEAS DE ARRIBA
   
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
                
                {/* SI HAY ALGUN ELEMENTO EN CART ENTONCES MUESTRA EL DIV CON LA CUENTA */}
                { cart.length > 0 && <div className="Header-alert">{ cart.length }</div> }
            </div>
        </header>
    )
}

export default Header