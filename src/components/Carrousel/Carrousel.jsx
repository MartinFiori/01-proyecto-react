import React from 'react';
import './Carrousel.css'
import Slider from 'infinite-react-carousel';

const Carrousel = () => {
	const images=[
        {
            id: 1,
            name: "Eva",
            url: "https://res.cloudinary.com/dax0wf30d/image/upload/v1644174587/eva_u3izty.jpg"
        },
        {
            id: 2,
            name: "Mandalorian",
            url: "https://res.cloudinary.com/dax0wf30d/image/upload/v1644174587/mandalorian_w8wljq.jpg"
        },
        {
            id: 3,
            name: "No Faces",
            url: "https://res.cloudinary.com/dax0wf30d/image/upload/v1644174587/nofaces_fy3ied.jpg"
        }
    ]
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        duration: 300,
        initialSlide: 1,
        pauseOnHover: false,
        swipe: false,
		className:'slider__content'
    };
	return (
		<section className='slider'>
			<Slider {...settings} >
				{images.map((image) => (
					<div key={image.id} className='slider__content--item'>
						<img src={image.url} alt={image.name} />
					</div>
				))}
			</Slider>
		</section>
	)
}

export default Carrousel 