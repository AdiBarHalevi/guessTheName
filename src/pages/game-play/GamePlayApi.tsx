import Gameplay from "../GamePlay"
import axios from 'axios'
import { useEffect, useState } from "react"



const GamePlayApi =()=>{ 
    const [apiData,setApiData] = useState([{}])

    const processToNames = (data:any) => data.map((item:any )=> item.name)
    

    const fecthData = async ()=>{
        try{
            const localData = window.sessionStorage.getItem('APIdata')
        if(!localData){
            const res = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=61ad98babbd91d19f02d3fa65fd4f728&language=en-US&page=1')
            setApiData(res.data.results)
            window.sessionStorage.setItem('APIdata',JSON.stringify(res.data.results))
        }
        else{
            const localData = window.sessionStorage.getItem('APIdata')
            // @ts-ignore
            setApiData(JSON.parse(localData))
        }
        }catch(e){console.log(e)}
    }
    
    useEffect(()=>{
        fecthData()
    },[])

    if(apiData.length>1) return <Gameplay shows={processToNames(apiData)}/>
    return <div>loading</div>
    // return <Gameplay shows={['tomb raider', 'harry potter','I Am Not an Animal','The Promised Neverland','Mr. Queen']}/>

}

export default GamePlayApi