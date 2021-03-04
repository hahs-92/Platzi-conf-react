import { Link } from 'react-router-dom'
import { useContext } from 'react'

//HELMET
import { Helmet } from 'react-helmet'

//CONTEXT
import AppContext from '../context/AppContext'

//ESTILOS
import '../style/containers/Checkout.scss'



const Checkout= () => {

    const { state:{ cart }, removeFromCart } = useContext(AppContext)
    // const { state, removeFromCart } = useContext(AppContext)
    // const { cart } = state

    //FUNCION ENCARGADA DE ELIMINAR LOS PRODUCTOS
    const handleRemove = (product,i) => () => {
        removeFromCart(product,i)
    }

    //FUNCION PARA CONTAR LOS ITEMS
    const HandleSummTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = cart.reduce(reducer, 0)
        return sum
    }


    return(
        <>
            <Helmet>
                <title>Platzi Conf -Products</title>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@TU_USER"/>
                <meta name="twitter:creator" content="@TU_USER"/>
                <meta name="twitter:title" content="Platzi Conf Store"/>
                <meta name="twitter:description" content="Platzi Conf Store"/>
                <meta
                name="twitter:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:title" content="Platzi Conf Store"/>
                <meta property="og:description" content="Platzi Conf Store"/>
                <meta
                property="og:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:url" content="platzi-conf-6a553.web.app" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />  
            </Helmet>
        
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
        </>
    )
}

export default Checkout