import React, { Fragment ,useState} from "react";

const EditTodo = ({todo}) => {
  
  console.log(" csvscscs "+ todo);
  const [description,setDescription]=useState(todo.description)
  
  //edit description function

  const updateDescription = async e=>{
    e.preventDefault();
    try {
  
    const body ={description}
    const response=await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    })
    console.log(response);
    window.location="/"
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return <Fragment>
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target={`#id${todo.todo_id}`}
    >
      Edit
    </button>

    <div className="modal fade" id={`id${todo.todo_id}`}  tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="myModalLabel">Edit Todo</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setDescription(todo.description)}></button>
          </div>

          <div className="modal-body">
            <input type="text" className="form-control" value={description} onChange={e=>setDescription(e.target.value)}/>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e=>updateDescription(e)}>
              Edit
            </button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

  </Fragment>
}

export default EditTodo;