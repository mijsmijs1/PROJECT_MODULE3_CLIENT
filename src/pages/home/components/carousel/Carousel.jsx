import React, { useState, useEffect } from 'react';
import './carousel.scss';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [timer, setTimer] = useState(null);
  
    const images = [
        'https://lh3.googleusercontent.com/c_v8ALAEjl-cDu1YaiqJ1qNUJYTMzrxNP6n4yvnhvN4MpxNZQ1TRmrqQoJwy_Nnoji-fz69un1Br2Ty6LQ1xjXonot_IWgE=w1920-rw',
        'https://lh3.googleusercontent.com/KAsF2RoDkK0FrFqcERfdyY2jYBN0p1_41bLSVXVltHbxaNljmZoX8L-LUmkk67Bk0UXIuUJNpNAMeNOrHqiGbzo4mFo-RGNs=w1920-rw',
        'https://lh3.googleusercontent.com/ryKnRM6pBr5ZGqtuLq8Quys5eiwxBFtnNlKSOwPFCDY0kJY46D6NofSl-71_LpfDNqHptA9DGjJLHwNKp7qukpSFy9GUEoti=w1920-rw',
        'https://lh3.googleusercontent.com/UcXIbS71xYYaIF6Xu6dn_z0gQl3SXPvW86ohYBLTQxzWejRbHl41EqVrZ4Yc_r3ChywN3Z3dBYAQz8UwaFaIBRlk2bpf1t3RUA=w1920-rw',
        'https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw'
    ];
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleHover = () => {
      setIsHovered((prevState) => !prevState);
    };
  
    useEffect(() => {
      if (!isHovered) {
        setTimer(
          setInterval(() => {
            goToNextSlide();
          }, 3000)
        );
      } else {
        clearInterval(timer);
      }
  
      return () => {
        clearInterval(timer);
      };
    }, [isHovered]);
  
    return (
      <div
        className="carousel"
        style={{ width: '100%', height: '640px' }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img src={images[currentIndex]} alt="carousel slide" />
  
        {isHovered && (
          <div className="navigation">
            <button type="button" className="btn btn-outline-secondary" onClick={goToPrevSlide}><ion-icon name="chevron-back-outline"></ion-icon></button>
            <button type="button" className="btn btn-outline-secondary" onClick={goToNextSlide}><ion-icon name="chevron-forward-outline"></ion-icon></button>
          </div>
        )}
  
        <div className="mydots">
          {images.map((image, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <div className='pic_right'>
            <img src='https://lh3.googleusercontent.com/zEsg8YHLcM21VtypL8QupWgB8Vj-nzm3GX-dUnsT5JfVe59O1QzwDldup8ZXIHayLAm658-W1F4S8_gT3MCe3UHUO-sG5awQ=w300-rw'></img>
            <img src='https://lh3.googleusercontent.com/9V_zby1_B-tjpUPAuqZmNpm0X7phAPHgL9NQsdzPkCdXTT6nqTsstvdBJljkZbPOdYZomcfNFYYCE-PsoHpQIPzI5OeExDU=w300-rw'/>
        </div>
        <div className='pic_bottom'> 
            {["https://lh3.googleusercontent.com/FMvwLWtdOm6kvQImR6yMcKpgKvKPrYc9iNRxgMc1JswHG3UUBv9rSd5i_GWGt5z7QjiW5jJLE3FTzm3DXejb2KO-AqiiyslB=w308-rw",
            "https://lh3.googleusercontent.com/aFOL7Xkk8-ChlGdNpPBBCIc5P5hy1jLabPjnbQ3STpM4DvSShVbhppKGW_2rG5kESx7h0kFWedoMn5vNIVISuxN3V957Z8Nh=w308-rw",
            "https://lh3.googleusercontent.com/HyXAYFqZ69x8ELsYmGnWK7d23C1N9EBaF8kme8XzAa0zOTEbM1X3D-ZgL4Zfbuy9vWwvTEmGD5cDyU4zireOm53Pw-v5ndWlZg=w308-rw",
            "https://lh3.googleusercontent.com/kjSAlfZweXIMjGvEZnPY6_cWAj03360wFYSj6dj6IYLTVTV3YYHhPr3NNJrB0KLe4gSULbCp3gCGZGoXeqhSJm-F8I2q8w8=w308-rw"].map(item => (
                <div key={Date.now()*Math.random()}>
                <img src={item} ></img>
                </div>
            ))}
        </div>
      </div> 
    );
  };
  
  export default Carousel;
