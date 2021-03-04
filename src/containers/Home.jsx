//INITIALSTATE
import initialState from '../initialState'

//COMPONENETS
import Products from '../components/Products'

//HELEMT
import { Helmet } from 'react-helmet'



const Home = () => {
    return(
        <>
            <Helmet >
                <title>Platzi Conf -Products</title>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@TU_USER"/>
                <meta name="twitter:creator" content="@TU_USER"/>
                <meta name="twitter:title" content="Platzi Conf Store"/>
                <meta name="twitter:description" content="Platzi Conf Store"/>
                <meta
                name="twitter:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:title" content="Platzi Conf Store"/>
                <meta property="og:description" content="Platzi Conf Store"/>
                <meta
                property="og:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:url" content="platzi-conf-6a553.web.app" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />  

            </Helmet>
            
            <Products />  
        </>
    )
}

export default Home