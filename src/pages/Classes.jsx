 
import NavBar from './../shared/NavBar';
import Footer from './../shared/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';


const Classes = () => {
const {id}= useParams()
// console.log('class',id)
const [selectedClass , setSelectedClass]= useState([])

const { name, description,price,time, imageURL,buttonText}= selectedClass
useEffect(()=>{

    fetch('/services.json')
    .then(res=>res.json())
    .then(data =>setSelectedClass(data.find(service => service.id ==id)))
   
},[])
// console.log(selectedClass,'ha pelam');
    return (
        <div   >
             
            <NavBar></NavBar>
            <Helmet>
    <title>{`Yoga vitalities | Class ${selectedClass.name}`}</title>
      </Helmet>
            <ToastContainer></ToastContainer>
            <div className='h-32 
             mx-auto' 
      style={{
 
 backgroundImage: `url("https://img.freepik.com/free-photo/yoga-group-classes-inside-gym_1303-17162.jpg?t=st=1696770935~exp=1696771535~hmac=e7d5c8f83236ce419fb21bf395de118cde1e29c34f5704cb6b55f92397c4e7d2")`,
}}
       >
            <h2     className="text-4xl  font-cold uppercase
             text-center text-white py-5"> 
             join our clsses
             </h2>
           
            </div>




        <div  className='card grid grid-cols-2 py-10 mx-auto max-sm:block'>
        <img className="mask mask-squircle px-[5rem]"  src={imageURL} alt="" />
        <div className='space-y-10 pt-[10rem] max-sm:pl-10'>
        <h1 className='bg-gradient-to-r text-transparent 
        bg-clip-text from-cyan-500 to-blue-500 text-3xl'>
        {name}
        </h1>
        <p className='w-[30rem] bg-gradient-to-r text-transparent 
        bg-clip-text from-cyan-500 to-blue-500 max-sm:text-sm max-sm:w-[21rem] '>
        {description}
        </p>
        <p className='bg-gradient-to-r text-transparent 
        bg-clip-text from-cyan-500 to-blue-500 '>
        Timing: {time} 
        </p>
        <p className='bg-gradient-to-r text-transparent 
        bg-clip-text from-cyan-500 to-blue-500 '>
        Price: {price} $
        </p>

        <button onClick={()=>toast.success('Your Appointment has been taken successfully!')} className='btn border-teal-600 borer-2 bg-transparent hover:bg-teal-200 hover:text-black capitalize w-52 text-teal-600'>{buttonText}</button>
        </div>
        </div>

        <Footer></Footer>
        </div>
    );
};

export default Classes;