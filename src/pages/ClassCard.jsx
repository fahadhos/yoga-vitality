 
import { Link } from "react-router-dom";
 
const ClassCard = ({item}) => {
 

    // const {id,imageURL,name}=item

    return (
        <div>
      <div className="card w-[20rem] hover:w-[22rem] bg-base-100 shadow-xl">
  <figure><img src={item.imageURL} alt={item.name}/></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
         </h2>
   
    
    {item.description.length>50? <p className="text-left font-sm"> 
      {item.description.slice(0,50)}... 
               <br /> 
           <Link to={`/classes/${item.id}`} className='text-teal-400'>Read More</Link>
                </p>: <p>{item.description}</p>
           
           }
             
    
    
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;