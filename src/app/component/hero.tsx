import Image from "next/image"
import "../style/hero.css"

 function Hero () {
    return (

<div className="header-container">

    <div className="header-boxes-con">
    {/* left */}
    <div>
      <img src="images/haseeb.jpeg"
      width={150}
      height={100}
      className="header-image"

       alt="Profile" />

    </div>

    

    {/* right */}
    <div className="hero-right-div">

<h1 className="title-hero">I'M Haseeb Abbasi
Front-end Developer 
</h1>

<p className="des-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<button className="hero-btn">HIRE ME</button>

    </div>

    </div>



</div>


    )



 }
 export default Hero