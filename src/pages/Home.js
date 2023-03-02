import { useEffect, useState } from "react"
import DirectionMap from "../components/DirectionMap"
import Map from "../components/Map"
import Map1 from "../components/Map1"

export default function Home(props){
    const [cookie, setCookie] = useState(props.token)
    useEffect(() => {
        console.log(props)

    })
    
    return (
        // <Map token = {cookie}/>
        <DirectionMap />
        // <Map1/>
    )
}