import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//COMPONENTES
import Product from './Product'

//ESTILOS
import '../style/component/Products.scss'


//USO DE USECONTEXT
const Products = () => {

    // const { state, addToCart } = useContext(AppContext)
    // const { products } = state

    const { state:{ products }, addToCart } = useContext(AppContext) //REEMPLAZA A LA LINEAS DE ARRIBA
    

    //FUNCION PARA AGREGAR AL CARRITO CUANDO EL USUARIO HAGA CLICK(CLOUSURE)
    //SE LA PASAMOS A PRODUCT POR PROPS
    const handleAddToCart = product => () => {
        addToCart(product)
    }

    return(
        <section className="Products">
            <div className="Products-items">
                { products.map( product => (
                    <Product key={ product.id } product={ product } handleAddToCart={ handleAddToCart } />
                ))}
            </div>

        </section>
    )
}


// const Products = ( { products } ) => {
//     return(
//         <section className="Products">
//             <div className="Products-items">
//                 { products.map( product => (
//                     <Product key={ product.id } product= { product } />
//                 ))}
//             </div>

//         </section>
//     )
// }

export default Products