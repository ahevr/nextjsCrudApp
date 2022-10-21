import React from 'react'
import { useReducer } from 'react'
// import Bug from './bug'
import Success from './success'

const formReducer = (state,event)=>{
    return{
            ...state,
            [event.target.name]:event.target.value
    }
}

const updateUserForm = () => {

    const[formData,setFromData] = useReducer((formReducer),{})


    const handleSubmit = (e)=> {
            e.preventDefault();
            if(Object.keys(formData).length == 0) return console.log("Yapacağın işi sikim");
            console.log(formData)
    }

    if(Object.keys(formData).length > 0) return <Success message={"Müşteri Kaydı Eklendi Kanks.dd"}></Success>
    // if(Object.keys(formData).length == 0) return <Bug message={"Yapacağın işi sikim"}></Bug>


  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-4' onSubmit={handleSubmit}>
        <div className="input-type">
            <input type="text" onChange={setFromData} name='firstname' className='border w-full px-5 py-3 focus:outline-lime-400 rounded-md ' placeholder='Ad'/>
        </div>
        <div className="input-type">
            <input type="text" onChange={setFromData} name='lastname' className='border w-full px-5 py-3 focus:outline-lime-400 rounded-md ' placeholder='Soyad'/>
        </div>
        <div className="input-type">
            <input type="text" onChange={setFromData} name='email' className='border w-full px-5 py-3 focus:outline-lime-400 rounded-md ' placeholder='E Posta Adresi'/>
        </div>
        <div className="input-type">
            <input type="text" onChange={setFromData} name='salary' className='border w-full px-5 py-3 focus:outline-lime-400 rounded-md ' placeholder='Satış Ücreti'/>
        </div>
        <div className="input-type">
            <input type="date" onChange={setFromData} name='date' className='border-px-5 py-3 focus:outline-lime-400 rounded-md' placeholder='Doğum Tarihi'/>
        </div>

        <div className='flex gap-10 items-center'>
            <div className="form-check">
                <input 
                type="radio" 
                value="Active" 
                name="status"  
                id='radioDefault1'
                className='form-check-input appearance-none rounded-full h-4 w-4 border border-lime-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-lime-500 transiton duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer' />
                <label htmlFor="radioDefault1" className='inline-block text-gray-500' >Aktif</label>
            </div>
            <div className="form-check">
                <input 
                type="radio" 
                value="Inactive" 
                name="status"  
                id='radioDefault2'
                className='form-check-input appearance-none rounded-full h-4 w-4 border border-orange-600 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-orange-500 transiton duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer' />
                <label htmlFor="radioDefault2" className='inline-block text-gray-500'>Pasif</label>
            </div>
        </div>

        <button className='flex justify-center text-md w-2/3 bg-lime-300 text-white px-4 py-2 border rounded-full hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>Ekle</button>

    </form>
  )
}

export default updateUserForm