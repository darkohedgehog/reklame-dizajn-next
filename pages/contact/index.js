import Circles from "/components/Circles";
import {BsArrowRight} from "react-icons/bs";
import {SlLocationPin} from "react-icons/sl";
import {FaMobileAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";





const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errSubject, setErrSubject] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)      
  };
   // ================= Email Validation End here =================

   const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
    setErrSubject(false);
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!subject) {
      setErrSubject(true);
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && subject && messages) {
      axios.post(process.env.NEXT_PUBLIC_API_URL, {
        name: clientName,
        email: email,
        subject: subject,
        message: messages,
      });
      setSuccessMsg(
        `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`
      );
      setClientName("");
      setEmail("");
      setSubject("");
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    }
  };

    return (
      <div className="h-full bg-primary/30 overflow-y-auto">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center">
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2 
             variants={fadeIn('up', 0.2)}
             initial='hidden'
             animate='show'
             exit='hidden'
             className="h2 text-center mb-12">
              Let`s <span className="text-accent">connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            action="https://getform.io/f/3cd28497-19f2-4dfb-909e-4afe90f1943f" 
            method="POST" 
            id="form"
            className="flex-1 flex flex-col gap-6 w-full mx-auto">
              {/* input group */}
              <div className="flex gap-x-6 w-full">
               <input 
               type="text" 
               placeholder="name"
               required
               onChange={handleName}
               value={clientName}
               className={`${
                errClientName
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } input`} />
               <input 
               type="email" 
               placeholder="email@example.com"
               required 
               onChange={handleEmail}
               value={email}
               className={`${
                errEmail
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } input`} />
              </div>
              <input 
              type="text"
               placeholder="subject" 
               onChange={handleSubject}
               value={subject}
               className={`${
                errSubject
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } input`} />
              <textarea 
              placeholder="message" 
              required
              onChange={handleMessages}
              value={messages}
              className="textarea"></textarea>
              <button 
              onClick={handleSend}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group`}>
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Povežimo se</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              <div className="text-accent">{successMsg}</div>
            </motion.form>
          <motion.div 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex-1 flex flex-col mx-auto container gap-6 w-full justify-center items-center">
            <div className="flex flex-1 flex-row-reverse items-center justify-center gap-4 group hover:text-accent cursor-pointer transition-all duration-300 mx-auto"> 
            <span>nino05dizajn@gmail.com</span>
            <Link 
            href="mailto:nino05dizajn@gmail.com"
            aria-label="Naš email"
            title="Naš email"
            ><AiOutlineMail />
            </Link>           
            </div>
            <div className="flex-1 flex flex-row-reverse items-center justify-center gap-4 group hover:text-accent cursor-pointer transition-all duration-300 mx-auto">
              <span>+381641706370</span>
              <Link
               href="tel:+381641706370"
               aria-label="Naš telefon"
               title="Naš telefon"
              ><FaMobileAlt />
              </Link>              
            </div>
            <div className="flex-1 flex flex-row-reverse items-center justify-center group hover:text-accent cursor-pointer transition-all duration-300 mx-auto">
              <h3 className="flex flex-1 gap-2">Žikice Damnjanovića 15
              <span className="flex gap-2"> Smederevska Palanka</span>
              </h3>              
              <Link 
              href="https://www.google.com/maps/place/%C5%BDikice+Damnjanovi%C4%87a+15,+Smederevska+Palanka,+Srbija/@44.3705003,20.9535582,19z/data=!3m1!4b1!4m6!3m5!1s0x4750cf04b55f7a3f:0x772beb770fe5759a!8m2!3d44.3704993!4d20.9542019!16s%2Fg%2F11syyv_18j?authuser=0&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Naša adresa"
              title="Naša adresa"
              className="flex gap-4 mx-4">
              <SlLocationPin />
              </Link>
            </div>
          </motion.div>
          </div>
        </div>
        <Circles />
        </div>
    );
  };
  
  export default Contact;