// const heading = React.createElement("h1" , {} , "hello world from react");
// //react dom library used 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)



// {}=> attributes

// const heading = React.createElement("h1" , {id:"heading" , syx:"abc"} , "hello world from react");
// //react dom library used 
// const root = ReactDOM.createRoot(document.getElementById("root")); //c o/p
// root.render(heading)




// add style
// const heading = React.createElement("h1" , {id:"heading" , syx:"abc"} , "hello world from react");
// //react dom library used 
// const root = ReactDOM.createRoot(document.getElementById("root")); //c o/p
// root.render(heading) // passing react element 
// console.log("h1" , heading) // object //React.createElement is object




// CREATE THIS TYPE OF STRUCTURE ==== Nested
{    /* <div  id="parent">
        <div id="child">
           <h1></h1>
        </div>
     </div>   
    
    React element is object => becomes html that  browser understands 
    child also object , h1 tag is also object

    */}


//      const parent = React.createElement('div' , 
//         {id:"parent"} , 
//         React.createElement('div' , {id:"child"} , 
//             React.createElement('h1' , {} ," im an h1"  )
//         )
//      )

//      const root = ReactDOM.createRoot(document.getElementById("root")); //c o/p
// root.render(parent) // passing react element 



// CREATE THIS TYPE OF STRUCTURE ====siblings=> convert to an array 
{    /* <div  id="parent">
    <div id="child">
       <h1>1</h1>
        <h1>2</h1>
    </div>
 </div>   

React element is object => becomes html that  browser understands 
child also object , h1 tag is also object

*/}
// ERROR:
// react.development.js:199 Warning: Each child in a list should have a unique "key" prop.

// Check the top-level render call using <div>. See https://reactjs.org/link/warning-keys for more information.
//     at h1

//  const parent = React.createElement('div' , 
//     {id:"parent"} , 
//     React.createElement('div' , {id:"child"} , 
//        [ React.createElement('h1' , {} ," im an h1"  ),  React.createElement('h1' , {} ," im an h2"  )]
//     )
//  )

//  const root = ReactDOM.createRoot(document.getElementById("root")); //c o/p
// root.render(parent) // passing react element 





// CREATE THIS TYPE OF STRUCTURE ====siblings=> convert to an array 
{    /* <div  id="parent">
    <div id="child">
       <h1>1</h1>
        <h1>2</h1>
    </div>
     <div id="child">
       <h1>1</h1>
        <h1>2</h1>
    </div>
 </div>   

React element is object => becomes html that  browser understands 
child also object , h1 tag is also object

*/}
// ERROR:
// react.development.js:199 Warning: Each child in a list should have a unique "key" prop.

// Check the top-level render call using <div>. See https://reactjs.org/link/warning-keys for more information.
//     at h1

 const parent = React.createElement('div' , 
    {id:"parent"} , [ React.createElement('div' , {id:"child"} , 
        [ React.createElement('h1' , {} ," im an h1"  ),  React.createElement('h1' , {} ," im an h2"  )]
     ),  React.createElement('div' , {id:"child2"} , 
        [ React.createElement('h1' , {} ," im an h1"  ),  React.createElement('h1' , {} ," im an h2"  )]
     )]
   
 )

 const root = ReactDOM.createRoot(document.getElementById("root")); //c o/p
root.render(parent) // passing react element 
//THIS CODE LOOKS MESS 
//  SO {
//     JSX => MAKES EASY 
//  }

//  REACT 18 


// go to html 