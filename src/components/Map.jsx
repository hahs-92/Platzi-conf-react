import { GoogleMap, LoadScript, Marker, Master } from '@react-google-maps/api'



const Map = () => {

    const mapStyle = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat:19.4267261, lng: -99.1718796
    }


    return (
        <LoadScript googleMapsApiKey= 'AIzaSyB3jDL20DNhPMIEcq9L2yB1-tYYLVBaT_o' >
            <GoogleMap  
                mapContainerStyle={ mapStyle }
                zoom={ 9 }
                center={ defaultCenter }
                >
                    <Marker position={ defaultCenter }/>

            </GoogleMap>
        </LoadScript>
    )
}

export default Map