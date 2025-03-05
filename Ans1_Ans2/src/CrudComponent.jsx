import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DelData, InsertData, UpdateData } from '../Redux_CRUD/CrudAction'

const CrudComponent = () => {
    const allData = useSelector ((state)=>state.data)
    const dispatch = useDispatch()
    const [data,setData] = useState ({
        
        name: "",
        age:""
    })
    const [id,setId] = useState("")

    const handleChange= (e)=>{
        const {name,value} =e.target
        setData ({
            
            ...data,
          
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.PreventDefault()
        if(id!=''){
            dispatch(UpdateData(id,data))
        }
        else{
            
            dispatch(InsertData(data))
        }
        
        setData ({
           
            name:'',
            age:''
        })
        setId('')
    }

    const editData =(id)=>{
let res = allData.find((i,index)=>{
    return index == id
})
setData(res)

setId(id)
    }
  return (
    <div>

      <form action="#" method='POST' id='frm' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name"  onChange={handleChange} value={data.name}/><br></br>
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age"  onChange={handleChange} value={data.age}/><br></br>
        <input type="submit" value="Save Data" />
      </form>
      <table border={'2'}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {allData.map((i,index)=>{
                return(
                    <tr key={i.id}>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td><button onClick={()=>dispatch(DelData(index))}>Delete</button></td>
                        <td><button onClick={()=>editData(index)}>Edit</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default CrudComponent
