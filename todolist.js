import { type } from "os";
import React from "react";
export const todolist= ({todoos,settodoos, setEditTodo}) => {
    const handlecomplete = (todo)=> {
        settodoos(
            todos.map((item)=>{
                if (item.id === todo.id){
                return {...item,completed: !item.completed};
                }
                return item;
            })
        );     
}};

const handleEdit = ({id }) => {
    const findTodo=todos.findTodo((todo) => todo.id === id);
    setEditTodo(findTodo);
};
const handledelet = ({id }) => {
    setTodo(todos.filter((todo) => todo.id === id));
   
};

return (
   <button
        className="tik-complet task-button"
        onClick={()=> handlecomplete(todo)}
        >
            <i className="fa fa-check-circle"></i>
            </button> 
        ) (
            <div>
                <input 
                type="text" 
                value={todo.title} 
                className="space" />
            </div>
        )
            
