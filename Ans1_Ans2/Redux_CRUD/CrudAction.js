

export const ins = "INSERT"
export const upd = "UPDATE"
export const del = "DELETE"


export const InsertData = (data)=>{
    return{
        type:ins,
        payload:data
        
    }
}

export const UpdateData = (id,data)=>{
    return{
        type:upd,
        payload:{id,data}
    }
}

export const DelData = (id)=>{
    return{
        type:del,
        payload:id
    }
}