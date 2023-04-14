import {useCounterStore} from "./store";
import Exampage from './paper'
import axios from 'axios';

function Paper({route}){
    const topic = useCounterStore(state => state.topic)
    const quetions = useCounterStore(state => state.questions)
    // const reset=useCounterStore(state => state.getquetions);
    // const res =
    // axios.get('http://localhost:8082/Exam/topic/?id=1')
    // .then(response => {
    //     // Handle response
    //     console.log("quetions",response.data.items);
    //     reset(response.data.items);

    // })
    // .catch(err => {
    //     console.error(err);
    // }); 

    // console.log("gyrsdtfguhluyfutdyr",counterNumber)
    // console.log("hi quetions",quetions[0])
    // console.log("variable",quetions)
    // if (counterNumber[0]==="HTML"){
        
    //     return(
            
    //         <Exampage quetions={quetions[0]} topic="HTML"/>
    //         // <Exampage/>
    //     )
    // }
    // else if (counterNumber[0]==="CSS"){
        
    //     return(
    //         <Exampage quetions={quetions[0]} topic="CSS"/>
    //     )
    // }
    // else{
    //     return(
    //         <Exampage quetions={quetions[0]} topic="JS"/>
    //     )

    // }
    return(
                <Exampage quetions={quetions[0]} topic={topic[0]}/>
            )
    
}
export default Paper