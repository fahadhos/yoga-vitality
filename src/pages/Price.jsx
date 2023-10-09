 
import NavBar from './../shared/NavBar';
import Footer from './../shared/Footer';
import { TiTick } from 'react-icons/ti';
import { Helmet } from 'react-helmet-async';
const Price = () => {
    return (
        <div>

            <NavBar></NavBar>
            

      <Helmet>
        <title>Yoga vitalities | Prices</title>
      </Helmet>
            <div className='grid place-content-center py-16 bg-teal-50'>
<div className='' data-aos='fade-up'>

    <h1 className='text-4xl font-bold capitalize text-center 
    pt-5 bg-gradient-to-r text-transparent
     bg-clip-text from-cyan-500 to-blue-500'>
   top courses price </h1>
<p  className='
        text-center px-16 py-5
        '>
Explore unbeatable value with our top course prices. Discover affordable wellness solutions that fit your budget while experiencing the highest quality instruction and guidance. Your journey to better health and vitality starts here
</p>
       </div>

<div className='flex max-sm:block gap-10 mx-auto space-y-10'>
{/* beginner */}
  <div  data-aos='fade-left'>
    <div className="card w-96 max-sm:[w-19rem] bg-base-100 shadow-xl hover:shadow-2xl hover:w-[23rem]">
   
  <div className="card-body items-center text-center"
 
  >
    <h2 className="card-title  bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500
    "> Beginners Bliss</h2>
    <p 
    className='  bg-gradient-to-r text-transparent bg-clip-text from-red-600 to-blue-500'
    > $99.99</p>
    <p><small> subscription</small></p>
    <p className='flex items-center font-serif'>
<TiTick className='text-red-600'></TiTick> 
3-Day Yoga and Meditation Retreat
    </p>
    <p className='flex items-center font-serif'>
<TiTick className='text-red-600'></TiTick> 
Daily Yoga Classes
    </p>
   
    <p className='flex items-center font-serif'>
<TiTick className='text-red-600'></TiTick> 
Meditation Workshops
    </p>
    <p className='flex items-center font-serif'>
<TiTick className='text-red-600'></TiTick> 
Access to Spa and Relaxation
    </p>
   
    <div className="card-actions">
      <button className="btn btn-primary border-2  border-teal-400 bg-white text-teal-600 font-bold hover:bg-inherit">Get Started</button>
    </div>
  </div>
</div>
    </div>
{/*  */}
    <div  data-aos='fade-right'>
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:w-[23rem]">
   
   <div className="card-body items-center text-center">
     <h2 className="card-title  bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500
     "> Fitness Enthusiast</h2>
     <p 
     className='  bg-gradient-to-r text-transparent bg-clip-text from-red-600 to-blue-500'
     > $149.99</p>
     <p><small> subscription</small></p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 5-Day Fitness Bootcamp
     </p>
    
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Daily Bootcamp Sessions
     </p>
    
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Yoga Classes for Flexibility
     </p>
    
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Nutrition Consultation
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Guided Nature Hikes
     </p>
    
     <div className="card-actions">
       <button className="btn btn-primary border-2  border-teal-400 bg-white text-teal-600 font-bold hover:bg-inherit">Get Started</button>
     </div>
   </div>
 </div>
  
    </div>
 {/*  */}
    <div  data-aos='fade-left'>


    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:w-[23rem]">
   
   <div className="card-body items-center text-center">
     <h2 className="card-title  bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500
     "> Ultimate Wellness Retreat</h2>
     <p 
     className='  bg-gradient-to-r text-transparent bg-clip-text from-red-600 to-blue-500'
     > $250.99</p>
     <p><small> subscription</small></p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 
 7-Day Comprehensive Retreat
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 
 Daily Yoga and Meditation Classes
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 
 Fitness Bootcamp Sessions
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Nutrition Consultation
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Guided Nature Hikes
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Spa and Relaxation Treatments
     </p>
     <p className='flex items-center font-serif'>
 <TiTick className='text-red-600'></TiTick> 
 Personalized Wellness Plan
     </p>
    
     <div className="card-actions">
       <button className="btn btn-primary border-2  border-teal-400 bg-white text-teal-600 font-bold hover:bg-inherit">Get Started</button>
     </div>
   </div>
 </div>
    </div>

</div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Price;