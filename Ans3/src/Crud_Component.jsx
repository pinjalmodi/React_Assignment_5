import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delData, insData,updData } from '../Crud_Redux/CrudAction'

const Crud_Component = () => {
const allData = useSelector((state)=>state.data)
const [data,setData] = useState({
    name:"",
    age:""
})
const [id,setId] = useState('')
const dispatch = useDispatch()


const handleChange = (e)=>{
    const {name,value} = e.target
    setData ({...data,
    [name]:value
})}

const saveData= (e)=>{
    e.preventDefault()
    if(id!=''){
        dispatch(updData(id,data))
    }

    else{
        dispatch(insData(data))
    }
    setData({
        name:'',
        age:''
    })
    setId('')
}

const editData =(id)=>{
    let res = allData.find((i)=>{
        
        return i.id==id
   
    })
    setData(res)
    setId(id)
    
}
  return (
    <div>
      <form action="#" method="POST" id='frm' onSubmit={saveData}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={data.name}/><br></br>
        <label htmlFor="">Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={data.age}/><br></br>
        <input type="submit" value="Save Data" />
      </form>
      <table border={'2'}>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAme</th>

                <th>Age</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {allData.map((i,index)=>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td><button onClick={()=>dispatch(delData(index))}>Delete</button></td>
                        <td><button onClick={()=>editData(i.id)}>Edit</button></td>

                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Crud_Component
