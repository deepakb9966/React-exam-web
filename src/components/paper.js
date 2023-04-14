import {useCounterStore} from "./store";
import React from "react"
import ButtonAppBar from "./header"
// import IconlessRadio from "./temp"
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
import {toast, Toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Results from "./Results"
import {useEffect} from "react";
import {useState} from "react";
// import ButtonAppBar from "./header";
function Exampage(props){
    console.log("paper",props.quetions.length)
    let ans = useCounterStore(state => state.ans)
    const reset=useCounterStore(state => state.getquetions);
    const answer=useCounterStore(state => state.getans);
    const state = {value: 'coconut'};
    // const [style, setStyle] = useState("def");

    

   
    const navigate=useNavigate()
    const save=(e)=>{
        // reset()
        const name=e.target.name
        // if name===e.target.name
        console.log("hgfxgchgvjhb",e.target.value)
    }
    const evaluate=(e)=>{
        e.preventDefault()
        console.log(ans)
        if (ans.length<props.quetions.length){
            console.log("Answer all quetions")
            toast.error("Answer all quetions",{
                position:"top-center"
              })

        }
        else{
            navigate('/Results')

        }
        
        

    }
    const handleChange=(e)=>{
        console.log("opt",e.target.value)
        console.log(ans)
        
        if (ans.length===0){
            answer(e.target.value,e.target.name)
        }
        else{
            
            const check=ans.map(val=>{
                if (val.name===e.target.name){
                    console.log("changing option not allowed")
                    toast.error("changing option not allowed",{
                        position:"top-center"
                      })
                    //   setStyle("def2")
                    
                    return 1
    
                }
                else{
                    // answer(e.target.value,e.target.name)
                    console.log("continue....")
                    return 0
    
                }
            })
            if (!check.includes(1)){
                answer(e.target.value,e.target.name)
            }
            console.log("check",check)
        }
        
        // console.log("check",check)
        
        // 
    }
    return(
        <>
        <ButtonAppBar>
        </ButtonAppBar>
        <div  className="content">
        <form onSubmit={evaluate} >
        {     
        props.quetions.map((value,index)=>
        // console.log(value)
        <div style={{"textAlign":"left","border": "1px solid #d2d2d2","margin":"4px","padding":"10px","margin":"15px"}} id={value.id} >
            <div className="card"id={props.topic} >
                <div className="card-body" id={value.id} >
                    {/* <h1 id={value.answer}>{value.quetion}</h1> */}
                    <h4 className="card-title" style={{"textTransform": "capitalize"}}id={value.id}>{index+1}.{value.quetion}</h4>
                    {/* <div onChange={save}> */}
                    <div onChange={handleChange} >
                        <input type="radio" value="0" name={value.id} /> <span id={value.id}>{value.options[0]}</span> <br/>
                        <input type="radio" value="1" name={value.id} /> <span id={value.id}>{value.options[1]}</span> <br/>
                        <input type="radio" value="2" name={value.id} /> <span id={value.id}>{value.options[2]}</span> <br/>
                        <input type="radio" value="3" name={value.id} /> <span id={value.id}>{value.options[3]}</span> <br/>
                    </div>
                    <ToastContainer/>
                </div>
            </div>   
             
        </div>
        )
        }
        <button style={{"marginRight":"-100px","textTransform": "capitalize"}}>submit</button>      

        
        <ToastContainer/>
        </form>
        
        </div>
        </>
        
    )

}
export default Exampage