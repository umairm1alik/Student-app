import React, {useState} from "react"

import data from "./Data.js"

export default function Students(){

const [students, setStudents]= useState(data)
const [name, setName]= useState("")
const [rollNo, setRollNo]= useState("")
const [stuClass, setStuClass]= useState("")
const [batch, setBatch]= useState("")
const [flag, setflag]= useState(false)
const [updatedIndex, setUpdatedIndex]= useState(0)


// console.log(students);

const onSubmitHandler=()=>{
    if(name !="" && rollNo !="" && stuClass !="" && batch !="" ){
        let newStudent={
            name,
            rollNo,
            stuClass,
            batch
        }
        // console.log(newStudent)
        setStudents([...students, newStudent])
    
        // For clearing input fields after registration
        setName("")
        setRollNo("")
        setStuClass("")
        setBatch("")
    }
    else{
        alert("All fields are required!")
    }
    
}

const deleteHandler=(index)=>{
    console.log(index)
    let updatedList= students.filter((student, i)=>{
        if(index !== i){
            return student;
        }
    });

    setStudents([...updatedList]);
    console.log(updatedList)
}

const updateHandler=(item, index)=> {
        // alert("Clicked")
        setUpdatedIndex(index)
        setName(item.name)
        setRollNo(item.rollNo)
        setStuClass(item.stuClass)
        setBatch(item.batch)
        setflag(true)
}

const ctaUpdateHandler=()=>{

    if(name !="" && rollNo !="" && stuClass !="" && batch !="" ){
        let newStudent={
            name,
            rollNo,
            stuClass,
            batch
        }
        // console.log(newStudent)
        

        let updatedStudents=students.map((stu, index)=>{
            if(updatedIndex === index){
                return newStudent;
            }
            else{
                return stu;
            }
        })

        setStudents([...updatedStudents])
    
        // For clearing input fields after registration
        setflag(false)
        setName("")
        setRollNo("")
        setStuClass("")
        setBatch("")
    }
    else{
        alert("All fields are required!")
    }
}


    return(
        <div>
            <h1>Student Registration</h1>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Roll No" value={rollNo} onChange={(e)=>setRollNo(e.target.value)}/>
            <input type="text" placeholder="Enter Class" value={stuClass} onChange={(e)=>setStuClass(e.target.value)}/>
            <input type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>

            {flag ?
            <button onClick={ctaUpdateHandler}>Update</button>
            :
            <button onClick={onSubmitHandler}>Submit</button>
            }
            

            <hr/>
            <h1>List of Students</h1>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Class</th>
                    <th>Batch</th>
                </tr>
                {students.map((item, index)=>{
                    return(
                    <tr>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.stuClass}</td>
                    <td>{item.batch}</td>
                    <td>
                        <button onClick={()=>deleteHandler(index)}>Delete</button>
                    </td>

                    <td>
                        <button onClick={()=>updateHandler(item, index)}>Update</button>
                    </td>
                </tr>
                    )
                })}
                
            </table>
        </div>
    )
}