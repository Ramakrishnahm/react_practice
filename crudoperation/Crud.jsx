import { useState,useEffect } from "react"
import axios from 'axios'
const Crud = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/students").then(
            res => setData(res.data)
        )


    },[])
    return(
        <div>
            {JSON.stringify(data)}
            <h4>Fetch Data</h4>
            {data.map((item) => <div key = {item}>{item}</div>)}
        </div>
    )
}

export default Crud