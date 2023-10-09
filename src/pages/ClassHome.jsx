 
import NavBar from './../shared/NavBar';
import Footer from './../shared/Footer';
import cls from '../assets/yoga classes.jpg' 
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ClassHome = () => {
const showClass = useLoaderData()
console.log(showClass);
 
    return (
        <div>  
            <NavBar></NavBar>
            <Helmet>
        <title>Yoga vitalities | Classes</title>
      </Helmet>
<div data-aos="fade-up" className='space-y-5 pt-5 text-center bg-slate-100 '>
<h1 className='bg-gradient-to-r text-transparent    max-sm:text-2xl  
      bg-clip-text from-cyan-500 to-blue-500 text-3xl  font-bold' >
      
Explore Our Invigorating Classes
</h1>
<p className='  max-sm:text-sm '>
We invite you to embark on a journey of self-discovery,
 <br />
 rejuvenation, and transformation. Our carefully curated 
 <br />
 classes are designed to nurture your mind, body, and spirit,
 <br />
  helping you achieve a harmonious balance in your life.
</p>

</div>

<div className='space-y-10 bg-teal-50'>
<h1 className='pt-10 text-center bg-gradient-to-r text-transparent  
      bg-clip-text from-cyan-500 to-blue-500 text-3xl 
       max-sm:text-2xl font-bold' >
 
Discover a World of Wellness
</h1>
<div className='flex flex-wrap   card ' data-aos="fade-up">

{ 
showClass.map(show=> <>
 <div className='flex gap-5 pl-10'>
  
    <img className='mask mask-parallelogram w-32' src={show.imageURL} alt="" />
  
  <div>
       <h1  className='  bg-gradient-to-r text-transparent  
      bg-clip-text from-cyan-500 to-blue-500 text-xl  font-bold'>
{  show.name}
    </h1>
    <p className='   bg-gradient-to-r text-transparent   
     bg-clip-text from-cyan-600 to-red-500 text-sm 
   '>

   {show.description}
    </p> 
  </div>

 </div>  </>
 
 )

 }

</div>

 
</div>

<div className='bg-slate-50 'data-aos="fade-up">
<h1 className=' py-14
max-sm:text-2xl
text-center
bg-gradient-to-r text-transparent  
bg-clip-text from-cyan-500
 to-blue-500 text-3xl  font-bold
     ' >
 
Why Choose Our Classes
</h1>



<p className='text-white space-y-12 w-[30rem] max-sm:w-[20rem] mx-auto'
 data-aos="fade-left">
<div className="collapse collapse-plus   bg-gradient-to-r from-cyan-500 to-blue-500">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
         
Expert Guidance </div>
  <div className="collapse-content"> 
    <p>
         Our certified instructors and wellness experts bring a wealth of knowledge to every class, ensuring a safe and enriching experience.
</p>
  </div>
</div>


<div className="collapse collapse-plus
 bg-gradient-to-r from-cyan-500 to-blue-500">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Holistic Approach 
  </div>
  <div className="collapse-content"> 
    <p>
    We believe in nurturing both body and mind, fostering a holistic sense of well-being that goes beyond physical fitness.


    </p>
  </div>
</div>
<div className="collapse collapse-plus 
 bg-gradient-to-r from-cyan-500 to-blue-500">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
   
Tailored for You
 </div>
  <div className="collapse-content"> 
    <p>
        
    Whether you are a beginner or an experienced practitioner, our classes are tailored to meet your individual needs and goals.
    </p>
  </div>
</div>


<div className="collapse collapse-plus 
 bg-gradient-to-r from-cyan-500 to-blue-500">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  
  Community
 </div>
  <div className="collapse-content" > 
    <p>
    Join our supportive community of like-minded individuals who share your passion for well-being and self-improvement. 
 
    </p>
  </div>
</div>
 
</p>
</div>


<div className='bg-slate-50 py-10 ' data-aos="fade-up">

<h1 className=' text-center bg-gradient-to-r text-transparent   
      bg-clip-text from-cyan-500 to-blue-500 text-3xl  font-bold' data-aos="fade-down
      ">
 
    Start Your Journey Today
    </h1>

    <p 
     className='
     p-10
     bg-gradient-to-r text-transparent   
     bg-clip-text from-cyan-600 to-red-500 text-sm 
     
     '
     data-aos="fade-up"
     >

    Browse our classes, explore our schedules, and take the first step towards a healthier, happier you. At Fahad's Yoga and Fitness Retreats, we're here to support your pursuit of wellness and vitality.
<br />
Join us in embracing a life filled with balance, energy, and mindfulness. Namaste!
    </p>
</div>
<Footer> </Footer>
        </div>
    );
};

export default ClassHome;