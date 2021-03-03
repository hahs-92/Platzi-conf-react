//COMPONENTES
import Product from './Product'

//ESTILOS
import '../style/component/Products.scss'



const Products = ( { products } ) => {
    return(
        <section className="Products">
            <div className="Products-items">
                { products.map( product => (
                    <Product key={ product.id } product= { product } />
                ))}
            </div>

        </section>
    )
}

export default Products