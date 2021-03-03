//ESTILOS
import '../style/containers/Success.scss'


const Success = () => {
    return(
        <section className="Success">
            <div className="Success-content">
                <h2>Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
            </div>
            <section className="Success-map">
                Google Map
            </section>

        </section>
    )
}

export default Success