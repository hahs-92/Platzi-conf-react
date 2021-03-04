import { useContext } from 'react'

//CONTEXT APP
import AppContext from '../context/AppContext'

//IMPORT MAP
import Map from '../components/Map'

//ESTILOS
import '../style/containers/Success.scss'


const Success = () => {

    const { state: { buyer } } = useContext(AppContext)

    return(
        <section className="Success">
            <div className="Success-content">
                <h2>{ `${ buyer.name } Gracias por tu compra` } </h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
            </div>
            <section className="Success-map">
                <Map />
            </section>

        </section>
    )
}

export default Success