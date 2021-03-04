
const Product = ( { product, handleAddToCart }) => {

    const { image,title,price,description } = product
    
    return(
        <article className="Products-item">
            <img src={ image } alt={ title } loading='lazy'/>
            <section className="Products-item-info">
                <h2>{ title } <span>$ { price }</span></h2>
                <p>{ description }</p>
            </section>
            <button type='buttom' onClick={ handleAddToCart(product)}>Comprar</button>
        </article>
    )
}

export default Product