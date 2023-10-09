 
import NavBar from './../shared/NavBar';
import Footer from './../shared/Footer';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import {AiOutlineHeart} from 'react-icons/ai'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {GiBodyBalance,GiLifeInTheBalance} from 'react-icons/gi'
import motivation from '../assets/motivation.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import ClassCard from './ClassCard';
import background from '../assets/background-1.jpg'

const Home = () => {

const {loading} = useContext(AuthContext)
    if(loading){
        return   ( <div className='relative items-center justify-center grid place-content-center'><span className="loading loading-spinner text-success items-center justify-center grid place-content-center"></span>
 </div> )    }


const classes = useLoaderData()
    return (
        <div className='mx-auto'>

      <Helmet>
        <title>Yoga vitalities | Home</title>
      </Helmet>

            <NavBar ></NavBar>
            <Banner></Banner>

{/* motivation */}
<section className='grid grid-cols-8 py-10 mx-auto place-content-center pl-12  '

>
<div className='col-span-5  space-y-10  '>


<h2 className="text-4xl text-center pb-12 text-teal-500 font-bold"
data-aos="fade-up"
data-aos-easing="ease-out-cubic"
data-aos-duration="1000"
>Body.Spirit.Mind</h2>

<img className='w-[20rem] lg:hidden md:hidden' src={motivation} alt=""  />
<div className='grid grid-cols-2 gap-2 p-5 max-sm:block'>
<div className='space-y-5'  data-aos="fade-left">
<AiOutlineHeart  className='rounded-full border-2 text-5xl p-1'> </AiOutlineHeart>
    <h2 className="text-xl">
    HEALTHY LIFE
    </h2>
    <p className="text-sm text-justify pr-7">
    Embark on a journey towards a healthier, happier you, where every day is a gift waiting to be unwrapped.
    </p>
</div>

<div className='space-y-5' data-aos="fade-right">
<GiBodyBalance className='rounded-full border-2 text-5xl p-1'> </GiBodyBalance>
    <h2 className="text-xl">
    STAY FIT
    </h2>
    <p className="text-sm text-justify pr-7">
    Discover the secret to staying fit and active, just like that unforgettable Christmas gift that keeps on giving.   
     </p>
</div>
</div>


<div className='grid grid-cols-2 p-5 max-sm:block' data-aos="fade-left">
<div className='space-y-5'>
<GiLifeInTheBalance  className='rounded-full border-2 text-5xl p-1'> </GiLifeInTheBalance>
    <h2 className="text-xl">
    BALANCED BODY
    </h2>
    <p className="text-sm text-justify pr-7">
    Achieve harmony and balance in your life, much like the perfect gift that brought joy and equilibrium on that special Christmas morning.   
    </p>
</div>
<div className='space-y-5'  data-aos="fade-right">
<RiAccountPinCircleLine  className='rounded-full border-2 text-5xl p-1'> </RiAccountPinCircleLine>
    <h2 className="text-xl">
    PERSONAL TRAINER
    </h2>
    <p className="text-sm text-justify pr-7">
    Unwrap the potential within yourself  with the guidance of a personal trainer, just as I unwrapped the gift that changed my life on that memorable Christmas day.      </p>
</div>  
</div>



</div>

<div className=' grid place-content-center col-span-3 max-sm:hidden '
 >
<img className='w-[20rem]' src={motivation} alt=""  />
</div>

</section>


{/* Classes Section*/}

<section  data-aos="fade-up" className='grid place-content-center pb-10  '>
 <div className='relative text-center justify-center items-center'>

<h2 className="text-4xl uppercase font-bold text-teal-400 pb-5"> Classes</h2>
<p className='  max-sm:text-[13px]   '>we invite you to embark on a journey of self-discovery, <br className='lg:hidden md:hidden' /> rejuvenation, and transformation. <br className='lg:hidden md:hidden' />Our carefully curated classes are designed <br />  to nurture your mind, body, and spirit, <br className='lg:hidden md:hidden' /> helping you achieve a harmonious balance in your life.</p>
  
<div className="carousel   my-10 carousel-center   w-[50rem] max-sm:w-[25rem]
 p-4 space-x-4   rounded-box   " 
 >
  
  <div className="carousel-item m-24 gap-10 ">

  {
classes.map(item => <ClassCard key={item.id} item={item}></ClassCard>)
} 
      </div>
</div>
 
 
 </div>


 

</section>

{/* Classes Section*/}


            <Footer></Footer>
        </div>
    );
};

export default Home;