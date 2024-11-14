import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieProvider';

// Carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 720 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 2
  }
};
const MovieList = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext)
  return (
    <div className="text-white p-10 mb-10">
      <h2 className='uppercase text-2xl mb-4'>{title}</h2>
      <Carousel responsive={responsive} className='flex items-center space-x-4'>
        {data && data.length > 0 && data.map(item => (
          <div key={item.id} className='w-[200px] h-[300px] relative group overflow-hidden' onClick={() => handleTrailer(item.id)}>
            <div className='group-hover:scale-105 transition-all duration-300 ease-linear w-full h-full cursor-pointer'>
              <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
              <img src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-2 left-2'>
              <p className='uppercase text-md '>{item.title || item.original_title}</p>
            </div>
          </div>
        ))}
      </Carousel>

    </div>
  )
}
MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array

}
export default MovieList