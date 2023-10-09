
import NavBar from './../shared/NavBar';
import Footer from './../shared/Footer';
import { useLoaderData } from 'react-router-dom';
import bg from '../../public/document.jpg'
import { Helmet } from 'react-helmet-async';
const Trainer = () => {

    const trainers = useLoaderData()
 
    console.log(trainers);
    return (
        <div>
            <NavBar></NavBar>
            <Helmet>
        <title>Yoga vitalities | Trainers</title>
      </Helmet>
<div className='grid place-content-center py-16 bg-teal-50'>
<div className='' data-aos='fade-up'>

    <h1 className='text-4xl font-bold capitalize text-center 
    pt-5 bg-gradient-to-r text-transparent
     bg-clip-text from-cyan-500 to-blue-500'>
     Meet Our Dedicated Trainers  </h1>
        <p 
        
        className='
        text-center px-16 py-5
        '>

  

Our team of dedicated trainers is at the heart of what we do.

 Each member of our expert staff brings a unique blend of experience,
  passion, and expertise to guide you on your wellness journey.
   Whether you are seeking the tranquility of yoga, the energy of 
   fitness bootcamps, or the mindfulness of meditation, our trainers
    are here to support and inspire you. With their guidance,
     you will discover the path to a healthier, happier you.
      Get to know our trainers and let their knowledge and enthusiasm motivate you towards your goals.
        </p>
</div>
        <div className=" carousel carousel-center max-w-md lg:max-w-7xl p-4 space-x-4 bg-teal-200 rounded"
        data-aos='zoom-in'
        >
  <div className="carousel-item gap-7 ">
   {
   trainers.map(trainer=> <>
   <div key={trainer.id} className="card w-[16rem] hover:h-[20rem] hover:w-[20rem]  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={trainer.imageURL} alt={trainer.trainerName} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title
font-bold      bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500
    ">{trainer.trainerName}</h2>
    <p className='  font-semi-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500'
    
    >{trainer.trainerRole}</p>
    
  </div>
</div>
   </>
   )
 }
  </div> 
 
</div>


</div>


        <Footer></Footer>
        </div>
    );
};

export default Trainer;