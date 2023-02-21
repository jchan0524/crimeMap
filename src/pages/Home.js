import { useEffect, useState } from "react"
import DirectionMap from "../components/DirectionMap"
import Map from "../components/Map"

export default function Home(props){
    const [cookie, setCookie] = useState(props.token)
    useEffect(() => {
        console.log(props)

    })
    
    return (
        <Map token = {cookie}/>
        // <DirectionMap />
    )
}