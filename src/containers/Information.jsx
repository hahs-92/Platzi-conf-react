import { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

//CONTEXT
import AppContext from '../context/AppContext'

//estilos
import '../style/containers/Information.scss'

// _-------------------------------------------------------------------------------


const Information = () => {

    const { state: { cart}, addToBuyer } = useContext(AppContext)

    //USEREF
    const form = useRef(null)

    const handleSubmit = () => {

        //FORM DATE //FUNCION PARA CUANDO EL UUSARIO PAGUE
        //FORMDATE LEE CADA UNO DE LOS INPUTS
        const formData = new FormData(form.current)
    
        const buyer = {
            "name": formData.get("name"),//cada uno de los input tiene un name
            "email": formData.get("email"),
            "address": formData.get("adress"),
            "apto": formData.get("apto"),
            "city": formData.get("city"),
            "country": formData.get("country"),
            "state": formData.get("state"),
            "cp": formData.get("cp"),
            "phone": formData.get("phone")
        }

        addToBuyer(buyer)
    }


    return(
        <section className="Information">

            <article className="Information-content">
                <section className="Information-head">
                    <h2>Informacion de Contacto</h2>
                </section>
                <section className="Information-form">

                    <form ref= { form }>
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
                        <Link to='/checkout'>Regresar</Link>
                    </div>
                    <div className="Information-next">
                        <button type='button' onClick={ handleSubmit }>Pagar</button>
                    </div>
                </section>
            </article>
            <aside className="Information-sidebar">
                <h3>Pedido</h3>

                { cart.map( item => (
                    <article className="Information-item" key={ item.title }>
                        <div className="Information-element">
                            <h4>{ item.title }</h4>
                            <span>{ item.price }</span>
                        </div>
                    </article>
                ))}

            </aside>
        </section>
    )

}

export default Information