import React from 'react'
// conditionalList rendring
// export default function Item(props) {
    
//         return (
//          <ul className="list-group">
//             {
//                 props.todos.length > 0 ?props.todos.map((value,index,Arr)=>{
//                     return <li className='list-group-item' key={index}>{value}</li>
//                 }):<li className='list-group-item'>item</li>
//             }
          
//         </ul>
//     )
// }

export default function Item(props) {
    
    return (
     <ul className="list-group">
        {
            props.todos.length > 0 ?props.todos.map((value,index) =>
             <li className='list-group-item d-flex justify-content-between' key={index}>
                <div>{value}</div>
                <div>
                    <button className='btn btn-warning mx-2 '
                    onClick={()=>props.editTodo(value,index)}>Edit</button>
                    <button className='btn btn-danger' 
                    onClick={()=>props.deleteTodo(value)}
                    >Delete</button>
                </div>
                </li>
            ):<li className='list-group-item'>no item</li>
        }
      
    </ul>
)
}

// edit remove
// local storage save
// todo done
// restore
// cross