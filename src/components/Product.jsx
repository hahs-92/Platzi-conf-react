
const Product = ( { product }) => {
    const { image,title,price,description } = product
    return(
        <article className="Products-item">
            <img src={ image } alt={ title }/>
            <section className="Products-item-info">
                <h2>{ title } <span>$ { price }</span></h2>
                <p>{ description }</p>
            </section>
            <button type='buttom'>Comprar</button>
        </article>
    )
}

export default Product