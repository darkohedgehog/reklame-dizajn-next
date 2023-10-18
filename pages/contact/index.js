import Circles from "/components/Circles";
import {BsArrowRight} from "react-icons/bs";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";





const Contact = () => {
    return (
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center">
          <div className="">
            {/* text */}
            <h2>
              Let`s <span>connect.</span>
            </h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;