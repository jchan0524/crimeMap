import { useEffect, useState } from "react"
import Map from "../components/Map"

export default function Home(props){
    const [cookie, setCookie] = useState(props.token)
    useEffect(() => {
        console.log(props)

    })
    
    return (
        <Map token = {cookie}/>
    )
}