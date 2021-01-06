import React, {useEffect} from 'react';
import pic from '../Images/anim.gif';
import ring from '../Images/ring.jpg';
import jewels from '../Images/jewels.jpg';
import handbags from '../Images/handbags.jpg';
import gold from '../Images/gold.jpg';
import watches from '../Images/watches.jpg'
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import  Typical from 'react-typical';
import Service from './Service';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Images from './Images';


function Home() {

    useEffect(()=> {
            Aos.init({duration: 2000});
    }, [])
    const setFrame = 
     [
         //transform: "rotate3d(0, 1, 0.5, 3.142rad)"
        {transform: "rotate(360deg)"},
        {transform: "rotate(-360deg)"},
        //{transform: "rotate(360deg)"}
     ]
    
        

        
   

    const setTime = {
          
        duration: 5000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      }

      
    const imgMovement = useWebAnimations({
        keyframes: setFrame,
        timing: setTime
    });
    return (
        <div>
            <section id="header">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>
                                We are one of the world’s largest <strong className="brand-name">diamond sellers</strong>
                                     
                                </h1>
                                <h2 className="my-3">
                                    Selling{' '} 
                                
                                <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'diamonds', 1000,
                                    'luxury jewels', 1000,
                                    'watches', 1000,
                                    'handbags', 1000
                                ]}
                                />
</h2>
                                <div className="mt-3">
                                    <a href="" className="btn-get-started">Get Started </a>
                                </div>

                                
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <div> 
                                    <img src={pic} className="img-fluid animated" ref={imgMovement.ref}></img>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h1  className="ser">Services</h1>
            <div data-aos="fade-right" className="services">
            <Service heading= "Diamond Sellers" body="We are the biggest diamond sellers. Avail our services to get the best rates in the market" />               
            <Service heading= "Hand bags" body="Shop the latest styles of popular handbags for women." />               
            <Service heading= "Luxury Jewels" body="We have a huge collection of luxury jewels fdr our customers" />               

           
            </div>
            <div data-aos="fade-left" className="services-bottom">
            <Service heading= "Watches" body="Shop from our collection of stylish and modern watches" />               
            <Service heading= "Gold" body="We deal in gold jewelry as well" />               
                

           
            </div>

            <div data-aos="fade-right" className="images">
              <Images image={ring} /> 
              <Images image={handbags} />
              <Images image={jewels} />                 

           
            </div>
            <div data-aos="fade-left" className="services-bottom">
            <Images image={watches} /> 
              <Images image={gold} />
            </div>
           
        </div>
    )
}

export default Home
