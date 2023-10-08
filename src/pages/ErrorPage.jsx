import {useRouteError} from 'react-router-dom';
import errorbg from '../../src/assets/errorpage.svg';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  const error = useRouteError ();
  console.error (error);
  return (

    <div

    className="grid place-content-center bg-black text-center text-white h-[40rem]"
      // style={{
      
      //   backgroundImage: `url("https://i.ibb.co/9NB0WNP/errorpagebg.png")`,
      // }}
    >
        
    <Helmet>
        <title>Yoga Vitality | 404 Error</title>
    </Helmet>
      <div className='relative -top-10'>
        <h1 className='text-4xl m-5'>Oops!</h1>
        <p className='m-5'>Sorry, an unexpected error has occurred.</p>
        <p className='m-5'>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn capitalize bg-teal-400 text-black">Go Back Home</button>
        </Link>
      </div>
      </div>
  );
};

export default ErrorPage;
