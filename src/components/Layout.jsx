import { children } from 'react'

//COMPONNETS
import Header from './Header'
import Footer from './Footer'

//ESTILOS
import '../style/component/Layout.scss'

// ---------------------------------------------------------------------

const Layout = ( { children }) => {
    return (
        <section className="Main">
            <Header />
            { children }  
            <Footer />
        </section>
    )
}

export default Layout