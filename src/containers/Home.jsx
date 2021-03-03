//INITIALSTATE
import initialState from '../initialState'

//COMPONENETS
import Products from '../components/Products'



const Home = () => {
    return(
        <Products products={ initialState.products } />
    )
}

export default Home