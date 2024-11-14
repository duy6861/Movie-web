
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieProvider'

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext)
  return (
    <div className='text-white p-10 mb-10'>
      <h2 className='uppercase text-2xl mb-4'>{title}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
        {data && data.map((item) => (
          <div key={item.id} className='w-[200px] h-[300px] relative group overflow-hidden'
            onClick={() => handleTrailer(item.id)}
          >
            <div className='group-hover:scale-105 transition-all duration-300 ease-linear w-full h-full cursor-pointer'>
              <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-2 left-2'>
              <p className='uppercase text-md '>{item.title || item.original_title}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

MovieSearch.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}
export default MovieSearch