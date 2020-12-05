import React,{useState} from 'react'

function Sample() {
    const [isGotdata, setGotdata] = useState(false)

    function submitForm(){
        setGotdata(true)
    }
}

export default Sample
