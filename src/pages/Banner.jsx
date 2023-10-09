 import { BsChevronRight} from 'react-icons/bs'

const Banner = () => {
    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000">

 <div className="hero min-h-screen max-sm:w-[425px] " style={{backgroundImage: 'url(https://i.ibb.co/mbKr6TV/background-1.jpg)'}}
 
 >
    <div className="hero-overlay bg-opacity-80 bg-slate-600"></div>
  <div className="hero-content relative text-left -left-[16rem] items-start text-neutral-content max-sm:w-[425px]">
    <div className="max-w-md  max-sm:pl-[20rem]  ">
      <h1 className="mb-5 text-xl border-2 w-[18rem] px-5  relative uppercase font-bold">Yoga Fitness club</h1>
      <p className="mb-5 text-3xl"> 
    <span>Elevate Your  </span>   <br />
    <span className='text-teal-400 '>   Fitness Challenge </span> 
    <br />
<span>Alongside Us </span>
      </p>
      <button className="btn bg-teal-300 capitalize hover:bg-yellow-200  font-bold">Join Us <BsChevronRight></BsChevronRight> </button>
    </div>
  </div>
</div>   

        </div>
    );
};

export default Banner;