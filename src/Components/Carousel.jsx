import  React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  goToPrevSlide = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + this.props.images.length) % this.props.images.length,
    }));
  };

  goToNextSlide = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % this.props.images.length,
    }));
  };
  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;

    return (
      
      <div id="animation-carousel" className="relative w-full" data-carousel="static">
        <div className="overflow-hidden relative h-56 rounded-t-lg md:h-96">
          {images.map((image, index) => (
            <div
              key={image}
              className={`duration-700 ease-linear transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'} absolute inset-0`}
              data-carousel-item
            >
              <img
                src={image}
                className="block object-cover absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={this.goToPrevSlide}
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={this.goToNextSlide}
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    );
  }
}
