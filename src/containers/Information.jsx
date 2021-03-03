//estilos
import '../style/containers/Information.scss'


const Information = () => {
    return(
        <section className="Information">

            <article className="Information-content">
                <section className="Information-head">
                    <h2>Informacion de Contacto</h2>
                </section>
                <section className="Information-form">
                    <form action="">
                        <label htmlFor="name"> Nombre Completo
                            <input type="text" placeholder='Ingrese Nombre Completo' name='name'/>
                        </label>
                        <label htmlFor="email"> Correo Electronico
                            <input type="email" placeholder='Ingrese Correo Electronico' name='email'/>
                        </label>
                        <label htmlFor="address">Direccion
                            <input type="text" placeholder='Ingrese Direccion' name='address'/>
                        </label>
                        <label htmlFor="apto">Apto
                            <input type="text" placeholder='Apto' name='apto'/>
                        </label>
                        <label htmlFor="country">Pais
                            <input type="text" placeholder='Ingrese Pais' name='country'/>
                        </label>
                        <label htmlFor="state">Estado
                            <input type="text" placeholder='Ingrese Estado' name='state'/>
                        </label>
                        <label htmlFor="city">Ciudad
                            <input type="text" placeholder='Ingrese Ciudad' name='city'/>
                        </label>
                        <label htmlFor="cp">Codigo Postal
                            <input type="text" placeholder='Ingrese Codigo Postal' name='cp'/>
                        </label>
                        <label htmlFor="phone">Telefono
                            <input type="text" placeholder='Ingrese Telefono' name='phone'/>
                        </label>
                    </form>
                </section>
                <section className="Information-buttons">
                    <div className="Information-back">
                        Regresar
                    </div>
                    <div className="Information-next">
                        Pagar
                    </div>
                </section>
            </article>
            <aside className="Information-sidebar">
                <h3>Pedido</h3>
                <article className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM name</h4>
                        <span>$10</span>
                    </div>
                </article>
            </aside>
        </section>
    )

}

export default Information