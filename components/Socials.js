import Link from "next/link";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";



const Socials = () => {
    return (
      <div className="flex items-center gap-x-5 text-lg">
        <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaFacebookF />
        </Link>
        <Link href={""} className="hover:text-accent transition-all duration-300"> 
        <FaInstagram />
        </Link>
        <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineMail />
        </Link>
        <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlinePhone />
        </Link>

      </div>
    );
  };
  
  export default Socials;