import "./App.css";
import {useState} from "react";
// import {User} from './User.js'

// function App() {

//   return (
//     <div className="App">welcome
/* /* <User name="iqra" age={21} email="iqra123@gmail.com"/>
    <User name="laibaa" age={19} email="laiba123@gmail.com"/>
    <User name="ali" age={2} email="ali123@gmail.com"/> */
/*       
    exercise
      
      <Job salary="40k" position="labour" company="kfc" />
      <Job salary="70k" position="ceo" company="mac d" />
      <Job salary="90k" position="labour" company="kjfc" />
   
    </div>
  );
} */
// const User=(props)=>{
//   return(
//   <div>
//   <h1>{props.name}</h1>
//   <h1>{props.age}</h1>
//   <h1>{props.email}</h1></div>)
// }

                                      //episode 2 eercise components and props)
// const Job=(props)=>{
//   return(
//     <div>
//      <h1>{props.salary}</h1>
//      <h1>{props.position}</h1>
//      <h1>{props.company}</h1>

//     </div>
//   )

// }
// export default App;
//episode 3

                              // TOPIC:RENDERING CONDITION & CSS IN REACT

// function App() {
//   const age=28;
//   const isGreen=true;

//  return (
// <div className="App">
//  {age<18? <h1>under-age</h1>:<h1>over-age</h1>}
//   <h1 style={{color: isGreen? "pink": "yellow",backgroundColor:"blue"}}>i have a colour</h1>
//   {isGreen&&<button>click Me</button>}</div>)};
// export default App;
                                  //epsiode 3 
                               //TOPIC LISTS IN REACT

// function App() {
// // const items=["mobile","car","button","rock","choclate","laptop","cars"]
// const users=[{name:"iqra",age:21},{name:"laiba" ,age:18},{name:"Sara",age:19}];
// return (
// <div className="App">
// {/* {items.map((value,key)=>{
//   return<h1>{key}[{value}]</h1>
// })} */}

// {users.map((value,key)=>{
//   return <div> {value.name}  {value.age} </div>
// })}
// </div>)};
// export default App;



                                 //map function and list 
// function App() {
//  let  array= [{name:"iqraa", position:"worker",age:21},{name:"laibaaa", position:"manager",age:17},{name:"sara", position:"Md",age:28}];
 
//  return(
//     <div className="App">
//         {array.map((value,key)=>{
//           return(
//           <User name={value.name} age={value.age} position={value.position}/> )
        

//         })}
//       </div>)
// };
//   export default App;
                               //exercise of episode 3 
                               //(only display those planets whose isGas is true)


    // function App() {
    //   const planets = [
    //     { name: "a", isGas: false },
    //     { name: "b", isGas: false },
    //     { name: "c", isGas: true }
    //   ];
    
    //   return (
    //     <div className="App">
    //       {planets.map((planet, key) => (
    //         // Use a ternary operator to check if isGas is true
    //         // planet.isGas ? <div key={key}>{planet.name}</div> : null   //line by gpt
    //         planet.isGas?<h1>{planet.name}</h1>:null
    //       ))}
    //     </div>
    //   );
    // }
    
    // export default App; 



                                          //episode 4 
                                  // USESTATE HOOK AND STATES IN REACT
    
    // function App(){
    //   let age=22;
    //   const incAge = ()=>{
    //     age=age+1
    //     console.log(age);
        
    //   }
    //   return(
    //     < div className="App">{age}<button onClick={incAge}>Increase age </button></div>
    //   )
    // }
    // export default App; 
    // in react pagle is render once so this code is not diplaying changing the value of increase age instead we can see change in console window . so for this we use states now lets do the same work with the help of states.
                                        

                                          //  with states
    // function App(){
    //   const [age,setAge] = useState(0);
    //   const incAge = ()=>{
    //    setAge(age + 1);
    //   }
    //   return(
    //     < div className="App">{age}<button onClick={incAge}>Increase age </button></div>
    //   )
    // }
    // export default App; 
                                   //inputs in states 
      
    //   function App(){
    //   const[inputValue,setInputValue]=useState("");
    //   const handleInput=(event)=>{
    //    setInputValue(event.target.value);
    //   }
    //   return(
    //     < div className="App"><input type="text" placeholder="enter name" onChange={handleInput}></input>    
    //     {inputValue}</div>
    //   )
    // };
    //  export default App;
                                    //hiding showing text on clicking 

      // function App(){
      // const [showText,setShowText]=useState(true);
      // let ToggleText=()=>{
      //   setShowText(!showText);
     
      // }
      // return(
      //   < div className="App">
      //     <button onClick={ToggleText}>show/hide text</button>
      //    {showText &&<h1 style={{color:"pink"}}>hello this is me iqra ..!!</h1>}</div>
      //  )
      // };
  
      // export default App;
                                  //exercise of episode 4


      // function App(){
      // let [count,setCount] = useState(0);
      // let increase=()=>{
      //   setCount(count+1);}
      // let decrease=()=>{
      //   setCount(count=count-1);
      // }
      // let zero=()=>{
      //   setCount(count=0)

      // };
  
      // return(
      //   <div div className="App">
      //     <button onClick={increase}>increase</button>
      //     <button onClick={decrease}>decrease</button>
      //     <button onClick={zero}>set to zero</button>
      //     {count}
      //   </div>
      //     )
      // };
  
      // export default App;
                          // epsiode 5 has done in projects repo
                     

                    //  episode 6(life cycle of component)
function App(){

  return(
    <div className="App">

    </div>
  )

};
export default App;

