//ESTILOS
import '../style/containers/Checkout.scss'



const Checkout= () => {
    return(
        <section className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de Pedidos</h3>
                <article className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>ITEM name</h4>
                        <span>$18</span>
                    </div>
                        <button type='button'>Eliminar</button>
                </article>
            </div>
            <aside className="Checkout-sidebar">
                <h3>Precio Total: $10</h3>
                <button type='button'>Continuar</button>
            </aside>
        </section>
    )
}

export default Checkout