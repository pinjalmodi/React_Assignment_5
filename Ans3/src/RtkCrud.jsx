import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ins,del,upd } from '../RtkCrud/RtkReducer'

const RtkCrud = () => {
    const data = useSelector((state)=>state.Usercrud.data)
    const dispatch = useDispatch()
    const [allData,setAllData] = useState({
        name:'',
        age:''
    })
    const [id,setId] = useState('')

    const handleChange =(e)=>{
        const {name,value}= e.target
        setAllData({
            ...allData,
            [name]:value
        })
    }

    const savedata = (e)=>{
        e.preventDefault()
        if(id!=''){
            dispatch(upd({id,allData}))
        }
        else{
            dispatch(ins(allData))
            
        }
        setAllData({
            name:'',
            age:''
        })
        setId('')
    
   
}
    const editData = (id)=>{
       let res= data.find((i,index)=>{
            return index==id
        })
        setAllData(res)
        setId(id)
    }
  return (
    <div>
        <form action="#" method='POST' id='frm'onSubmit={savedata}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} value={allData.name}  /><br></br>
            <label htmlFor="">Age</label>
            <input type="number" name="age" id="age" onChange={handleChange} value={allData.age}/><br></br>
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
            {data.map((i,index)=>{
                return(
                <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td><button onClick={()=>editData(index)}>Edit</button></td>
                    <td><button onClick={()=>dispatch(del(index))}>Delete</button></td>

                </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default RtkCrud
