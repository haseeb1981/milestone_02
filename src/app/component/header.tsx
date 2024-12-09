import "../style/header.css";
import Link from "next/link";

function  Header(){
return (

<div className="header">
    { /* left */}
     <div>

        <h1 className="logo">H.A</h1>
     </div>


    { /* right */}

    <div className="header-right-div">

    <ul className="header-links">

    <li className="header-links-li">
        <Link className="nav-links" href={"/"}> Home</Link>
    </li>


    <li className="header-links-li">
        <Link className="nav-links" href={"/"}> About</Link>

    </li>


    <li className="header-links-li">
    <Link className="nav-links" href={"/"}> Contact</Link>
    </li>


    </ul>

    </div>

</div>


)


 }
 export default Header