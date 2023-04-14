import {useCounterStore} from "./store";
import ButtonAppBar from "./header";
import {useNavigate} from "react-router-dom"

function equalsCheck(a, b) {
    // check the length
    
    // console.log("a",a)
    // console.log("b",b)
    let count =0;
    if (a.length !== b.length) {
        return false;
        
    } else {
        let result = false;
        

        // comparing each element of array 
        for (let i = 0; i < a.length; i++) {

            if (a[i] === b[i]) {
                result = true;
                count =count+1
                console.log(count)
            }
        }
        // reset()
        
    }
    return count;
}

function Results(){
    // const counterNumber = useCounterStore(state => state.topic)
    // const actualHTMLans =useCounterStore(state => state.HTML_ans)
    // const actualCSSans =useCounterStore(state => state.CSS_ans)
    // const actualJSans =useCounterStore(state => state.JS_ans)
    // const reset=useCounterStore(state => state.reset);
    const data=useCounterStore(state => state.questions);
    // const ans = useCounterStore(state => state.answers)
    const ans = useCounterStore(state => state.ans)
    const navigate=useNavigate()
    // const result
    // console.log("results",ans)
    // console.log("data",data[0])
    const actualans=data[0].map(val=> (val.answer).toString())
    const answers=ans.map(val=> (val.value))
    console.log("actualans",actualans)
    console.log("answers",answers)
    let result=''
    result = equalsCheck(actualans, answers);
    console.log("result",result)
    const handleClick=()=>{
        navigate('/')

    }


    return(
        <>
        <div className="result">
            {/* <ButtonAppBar>
            </ButtonAppBar> */}
            <div className="con">
            <h2>Your score : {result}</h2>
            <h2>Your percentage : {Math.ceil((result/ans.length)*100)}%</h2>
            </div>
            <div className="con2">
            <button style={{"textTransform": "capitalize"}} onClick={handleClick}>close</button>
            </div>
        </div>
        
        </>
    )
}
export default Results