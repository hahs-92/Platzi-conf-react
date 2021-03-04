import { useHistory } from 'react-router-dom'

//PAYPALBUTTON
import { PayPalButton } from 'react-paypal-button'

//CONTEXT
import { useContext } from 'react'

//
import AppContext from '../context/AppContext'

//ESTILOS
import '../style/containers/Payment.scss'


// -------------------------------------------------------------------------------------


const Payment = () => {

    const { state: { cart, buyer }, addNewOrder } = useContext(AppContext)

    const history = useHistory()

    //CONFIFG PAYPAL
    const paypalOptions = {
        clientId: 'AYcNsu9c8vRV5X36uWW86emKG1epnpQJlCpiFbpusnSmbVLP8QbVyuWKxsyuOcyTPqgazom-Qpi7TeeF',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }


    const handlePaySuccess = data => {
        console.log(`data: ${ data }`)
        
        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }

            addNewOrder(newOrder)
            history.push('/checkout/success')
        }  
    }

    //ESTA FUNCION TAMBIEN SE UTILIZA EN CHECKOUT.JSX//SE PODRIA HACER UNA UTILIDAD
    const HandleSummTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = cart.reduce(reducer, 0)
        return sum
    }


    return(
        <section className="Payment">
            <article className="Payment-content">
                <h3>Resumen del Pedido:</h3>

                { cart.map( item => (
                    <article className="Payment-item" key={ item.title}>
                        <div className="Payment-element">
                            <h4>{ item.title }</h4>
                            <span>{ `$ ${ item.price }` }</span>
                        </div>
                    </article>
                ))}

                <div className="Payment-button">

                    <PayPalButton  
                        paypalOptions ={ paypalOptions }
                        buttonStyles = { buttonStyles }
                        amount = { HandleSummTotal() }
                        onPaymentStart = { () => console.log('start payment') } 
                        onPaymentSuccess = { data => handlePaySuccess(data) }
                        onPaymentError = { error => console.log(error) }
                        onPaymentCancel = { data => console.log(data) }
                    />
                
                </div>
            </article>

            <aside>
                
            </aside>
        </section>
    )
}

export default Payment