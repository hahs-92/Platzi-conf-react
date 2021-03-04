import { Link } from 'react-router-dom'
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//ESTILOS
import '../style/containers/Checkout.scss'



const Checkout= () => {

    const { state:{ cart }, removeFromCart } = useContext(AppContext)
    // const { state, removeFromCart } = useContext(AppContext)
    // const { cart } = state

    const handleRemove = (product,i) => () => {
        removeFromCart(product,i)
    }

    //FUNCION ENCARGADA DE ELIMINAR LOS PRODUCTOS
    const HandleSummTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = cart.reduce(reducer, 0)
        return sum
    }


    return(
        <section className="Checkout">
            <div className="Checkout-content">

                { cart.length > 0 
                    ? <h3>Lista de pedidos</h3>
                    : <h3>Sin pedidos</h3>
                }

                { cart.map((item, i) => (
                    
                    <article key={ item + i } className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{ item.title }</h4>
                            <span>${ item.price }</span>
                        </div>
                            <button type='button' onClick={ handleRemove(item,i)}>
                                <i className='fas fa-trash-alt' title='eliminar'></i>
                            </button>
                    </article>
                ))}
            </div>

            { cart.length > 0 && (

                <aside className="Checkout-sidebar">
                    <h3>{ `Precio Total: $ ${ HandleSummTotal()}`}</h3>
                    <Link to='/checkout/information'>
                        <button type='button'>Continuar</button>
                    </Link>
                </aside>
            )}
        </section>
    )
}

export default Checkout