import {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const api = axios.create({
    baseURL: `http://localhost:5000/Users`
})

const api_1 = axios.create({
    baseURL: `http://localhost:5000/ShootingGame`
})

const api_2 = axios.create({
    baseURL: `http://localhost:5000/KartGame`
})

const api_3 = axios.create({
    baseURL: `http://localhost:5000/TankGame`
})



const UseForm = (callback,callbackAuth,validate) => {
    var [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
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
    var shootId,TankId,kartId,parentid;
    const CreateUser = async () => {
        let res = await api.post('/',{userName: values.username,email: values.email,password: values.password})
        .then((x)=>{
            console.log(x.data);
            parentid = x.data._id;
            api_1.post('/',{ParentId:x.data._id,Wins:"0,0",Loose:"0,0"}).then((x1)=>{
                console.log(x1.data);
                shootId = x1.data._id;
                api_2.post('/',{ParentId:x.data._id,Wins:"0,0",Loose:"0,0"}).then((x2)=>{
                    console.log(x2.data);
                    kartId = x2.data._id;
                        console.log(shootId+" : "+kartId+" : "+parentid);
                        
                        api_3.post('/',{ParentId:x.data._id,Player1:"0,0",Player2:"0,0"}).then((x3)=>{
                            console.log(x3.data);
                            TankId = x3.data._id;
                                console.log(shootId+" : "+kartId+" : "+parentid);
                                 
                                UpdateUser();
                        });
                });
            });
        }).catch((err)=>{
            console.log(err);
        });
        
        //this.GetPosts()
    }

    const UpdateUser = async () =>{
        let res = await api.put('/'+parentid,
        {
            userName: values.username,
            email: values.email,
            password: values.password,
            ShootingGameID: shootId,
            KartGameID:kartId,
            TankGameID:TankId
        }).then((x)=>{
            api.get('/'+parentid).then((x1)=>{
                console.log(x1);
                callback();
                history.push("/home/"+x1.data.userName+"-"+x1.data._id);
            }).catch((err)=>{
                console.log(err);
            });
            
        })
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitted)
        {
            callbackAuth();
            // place to Authenticate
            CreateUser();
        }
    }, [errors]);

    return {handleChange, values,handleSubmit,errors};

};

export default UseForm;


