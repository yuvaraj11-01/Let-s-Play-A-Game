import {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const api = axios.create({
    baseURL: `http://localhost:5000/Users`
})


const UseForm = (callback,callbackAuth,validate) => {
    var [values, setValues] = useState({
        
        email: '',
        password: '',
        
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false)

    let history = useHistory();

    const handleChange = e => {
        const {name,value} = e.target;

        values = Object.assign({}, values)
       
        setValues({
            ...values,
            [name] : value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();


        setErrors(validate(values))
        setIsSubmitted(true)
    }

    //Axios Calls
     
    const GetUser = async () => {
        let res = await api.get('/').then((x)=>{
            console.log(x);
            var datas = x.data;
            //console.log(x.data[0]._id);
            for(var i=0;x.data[i]._id !== null;i++)
            {
                if((x.data[i].password === values.password) && (x.data[i].email === values.email))
                {
                    console.log("Player Name :"+x.data[i].userName);
                    console.log("Player Id :"+x.data[i]._id);
                    history.push("/home/"+x.data[i].userName+"-"+x.data[i]._id);
                    break;
                }
            }

        }).catch((err)=>{
            console.log(err);
        });
        console.log(res);
        //this.GetPosts()
    }


    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitted)
        {
            callback();
            //callbackAuth();
            // place to Authenticate
            GetUser();
        }
    }, [errors]);

    return {handleChange, values,handleSubmit,errors};

};

export default UseForm;


