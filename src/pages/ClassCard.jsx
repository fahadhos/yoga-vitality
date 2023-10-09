 
import { Link } from "react-router-dom";
 
const ClassCard = ({item}) => {
 

    // const {id,imageURL,name}=item

    return (
        <div>
      <div className="card w-[20rem] hover:shadow-2xl  hover:w-[20rem] bg-base-100 shadow-xl">
  <figure><img src={item.imageURL} alt={item.name}/></figure>
  <div className="card-body">
    <h2 className="card-title bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500">
     {item.name}
         </h2>
   
    
    {item.description.length>50? <p className="text-left font-sm bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500"> 
      {item.description.slice(0,50)}... 
               <br /> 
           <Link to={`/classes/${item.id}`} className='bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-red-500 font-bold hover:text-yellow-700 hover:text-xl'>Read More</Link>
                </p>: <p className=" text-left font-sm bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-blue-500">{item.description}</p>
           
           }
             
    
    
    <div className="card-actions justify-center pt-3">
      <div className="badge badge-outline border-2 py-3 text-teal-600   border-teal-400">{item.time}</div>  
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;