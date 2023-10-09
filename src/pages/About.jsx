 
import NavBar from './../shared/NavBar';
import Footer from './../shared/Footer';

import aboutpic from '../../public/about.jpg'
import patternp from '../../public/pattern.svg'
import client1 from '../../public/client.jpg'
import client2 from '../../public/client2.jpg'
import client3 from '../../public/client3.jpg'
import { Helmet } from 'react-helmet-async';
const About = () => {
    return (
        <div className='mx-auto'>
         <NavBar></NavBar>
            <Helmet>
        <title>Yoga vitalities | About Us</title>
      </Helmet>
          <div  data-aos="fade-up" className='flex max-sm:block mx-auto py-16'>
        <div className='' >

<h1 className='text-4xl font-bold capitalize text-center 
pt-5 bg-gradient-to-r text-transparent max-sm:text-2xl
 bg-clip-text from-cyan-500 to-blue-500'>
      About Us </h1>
<p  className='
    text-left pl-5   py-5
    '> 
     
     We believe that the journey to a healthier, more balanced life begins with inner peace and physical well-being.
      Our mission is to provide you with transformative experiences through our Yoga and Fitness Retreats, helping you discover harmony in mind, body, and soul.

     </p>
   </div>

<img className='mask  mask-heart w-96' src={aboutpic} alt="aboutpic"
data-aos="zoom-in"
/>
          </div>
    

<section  data-aos="fade-up" className=' text-white  pt-5 text-center mb-10 mx-auto' style={{backgroundImage:`url(${patternp})`}}>

<h1 className='text-4xl font-bold capitalize text-center 
py-2  bg-gradient-to-r text-transparent  max-sm:text-2xl
 bg-clip-text from-cyan-500 to-blue-500'>
      Why Choose Us </h1>
<div className="radial-progress text-white p-8 text-center" style={{"--value":90}}>
    90% <br /> improved state of mind
</div>
<div className="radial-progress  p-8" style={{"--value":70}}>70%
less body fat
</div>
<div className="radial-progress  p-8" style={{"--value":60}}>60%
energy</div>
<div className="radial-progress  p-8" style={{"--value":99}}>99%
optimism
</div>
 
</section>
{/* testimoials */}
<section className='mx-auto grid place-content-center text-white  py-16 text-center mb-10'
  data-aos="fade-up" >

<h1 className='text-4xl font-bold capitalize text-center 
py-2  bg-gradient-to-r text-transparent  max-sm:text-2xl
 bg-clip-text from-cyan-500 to-blue-500'>
      testimonials from our clients </h1>
 <p>

</p>

<div className='flex max-sm:block pt-16 gap-5 space-y-7 mx-auto items-center justify-center '>
{/* client 1 */}
<div  className="card w-[20rem] hover:w-[19rem]  bg-base-100 shadow-xl">
  <figure className="  mask mask-star-2 rounded-full">
    <img  src={client1} alt='' className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" text-sm
font-bold      bg-gradient-to-r 
text-transparent bg-clip-text from-cyan-500
 to-blue-500
    ">I attended   Yoga and Fitness Retreat and 
    it was a life-changing experience. The yoga classes were invigorating, the meditation workshops brought me inner peace, and the nature hikes were simply breathtaking. The instructors were top-notch, and the whole retreat was well-organized. I left feeling rejuvenated and more in
     tune with my body and mind. Highly recommend!</h2>
    <p className='  font-semi-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500'
    
    >- Sarah Thompson</p>
    
  </div>
</div>
{/*  */}
<div  className="card w-[20rem] hover:w-[19rem]  bg-base-100 shadow-xl">
  <figure className="  mask mask-heart rounded-full">
    <img  src={client2} alt='' className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" text-sm
font-bold      bg-gradient-to-r 
text-transparent bg-clip-text from-cyan-500
 to-blue-500
    ">I've been on many fitness retreats, but Fahad's Fitness Bootcamp was on another level. The trainers pushed me to my limits, and the results were incredible. The nutrition consultation was an eye-opener, and the spa sessions were the perfect way to recover. If you're serious about fitness, this is the retreat for you!</h2>
    <p className='  font-semi-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500'
    
    >- David Anderson</p>
    
  </div>
</div>
{/*  */}
<div  className="card w-[20rem] hover:w-[19rem]  bg-base-100 shadow-xl">
  <figure className="  mask mask-star-2 rounded-full">
    <img  src={client3} alt='' className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" text-sm
font-bold      bg-gradient-to-r 
text-transparent bg-clip-text from-cyan-500
 to-blue-500
    ">The Ultimate Wellness Retreat at Fahad's was a true gift to myself. The combination of yoga, meditation, and fitness was exactly what I needed. The personalized wellness plan helped me make lasting changes to my lifestyle. The serene natural surroundings and the supportive community made this retreat unforgettable.</h2>
    <p className='  font-semi-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500'
    
    >-  Emily Roberts</p>
    
  </div>
</div>
</div>

</section>
            <Footer></Footer>
        </div>
    );
};

export default About;