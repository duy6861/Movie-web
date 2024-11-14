import IconRating from "../assets/rating.png"
import IconRatingHalf from "../assets/rating-half.png"
import ImgTemp from "../assets/phim-truong-ca-hanh-poster-dich-le-nhiet-ba.jpg"
import IconPlay from "../assets/play-button.png"
import Modal from 'react-modal';
import YouTube from 'react-youtube'
import { useState } from 'react';
const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 9999
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// youtube
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="w-full h-[600px] bg-banner bg-no-repeat bg-cover bg-center relative">
      <div className="absolute w-full h-full bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex space-y-5 items-baseline flex-col basis-1/2">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 px-4 py-[6px] text-lg">TV Show</p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white font-bold text-4xl">Trường Ca Hành</h2>
          </div>
          <div className="flex items-center space-x-3">
            <img src={IconRating} alt="rating" className="h-8 w-8" />
            <img src={IconRating} alt="rating" className="h-8 w-8" />
            <img src={IconRating} alt="rating" className="h-8 w-8" />
            <img src={IconRating} alt="rating" className="h-8 w-8" />
            <img src={IconRatingHalf} alt="rating" className="h-8 w-8" />
          </div>
          <p className="text-white">Trong phim Địch Lệ Nhiệt Ba đóng vai một cô công chúa xinh đẹp và tài giỏi.
            Bi kịch gia đình đã buộc cô phải giấu kín thân phận và sống cuộc đời bình thường.
            Thế nhưng trong lòng cô vẫn luôn nung nấu ngọn lửa báo thù cho người cha quá cố.
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-white bg-black hover:bg-gray-800 rounded-md text-sm font-bold">
              Chi Tiết
            </button>
            <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md text-sm font-bold">
              Xem Phim
            </button>
          </div>
        </div>
        <div className=" basis-1/2 flex items-center justify-center">
          <div className="w-[300px] h-[500px] relative group cursor-pointer" onClick={() => setModalIsOpen(true)}>
            <img src={ImgTemp} alt="Img Temp" className="w-full h-full object-contain object-center " />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
              <img src={IconPlay} alt="play" className="h-16 w-16 relative z-20 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      > <YouTube videoId={'H4psSzNlcFI'} opts={opts} /></Modal>
    </div>
  )
}

export default Banner