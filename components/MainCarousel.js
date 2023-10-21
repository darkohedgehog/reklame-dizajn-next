import React, { useEffect, useState, useRef } from "react";
import IMG1 from "../public/assets/Boutique_BG_vracar4.jpg";
import IMG2 from "../public/assets/Boutique_BG_vračar.jpg";
import IMG3 from "../public/assets/Restoran_DI_Hilton.jpg";
import IMG4 from "../public/assets/cmana1.jpg";
import IMG5 from "../public/assets/fototapet.jpg";
import IMG6 from "../public/assets/gallery1.jpg";
import IMG7 from "../public/assets/gallery2.jpg";
import IMG8 from "../public/assets/gallery3.jpg";
import Image from "next/image";

const MainCarousel = () => {
  const [tX, setTX] = useState(0);
  const [tY, setTY] = useState(10);
  const [desX, setDesX] = useState(0);
  const [desY, setDesY] = useState(0);

  const odragRef = useRef(null);

  // You can change global variables here
  const radius = 310; // how big is the radius
  const autoRotate = true; // auto rotate or not
  const rotateSpeed = -60; // unit: seconds/360 degrees
  const imgWidth = 120; // width of images (unit: px)
  const imgHeight = 220; // height of images (unit: px)

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 1000);
  }, []);

  const init = (delayTime) => {
    const ospin = document.getElementById("spin-container");
    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    const ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  };

  const applyTranform = () => {
    // Constrain the angle of the camera (between 0 and 180)
    let newY = tY;
    if (newY > 180) newY = 180;
    if (newY < 0) newY = 0;

    // Apply the angle
    odragRef.current.style.transform = `rotateX(${-newY}deg) rotateY(${tX}deg)`;
  };

  const playSpin = (yes) => {
    const ospin = document.getElementById("spin-container");
    ospin.style.animationPlayState = yes ? "running" : "paused";
  };

  // auto spin
  useEffect(() => {
    if (autoRotate) {
      const ospin = document.getElementById("spin-container");
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
  }, [autoRotate, rotateSpeed]);

  // setup events
  const handlePointerDown = (e) => {
    clearInterval(odragRef.current.timer);
    e = e || window.event;
    let sX = e.clientX;
    let sY = e.clientY;

    document.onpointermove = (e) => {
      e = e || window.event;
      const nX = e.clientX;
      const nY = e.clientY;
      setDesX(nX - sX);
      setDesY(nY - sY);
      setTX((prevTX) => prevTX + desX * 0.1);
      setTY((prevTY) => prevTY + desY * 0.1);
      applyTranform();
      sX = nX;
      sY = nY;
    };

    document.onpointerup = (e) => {
      odragRef.current.timer = setInterval(() => {
        setDesX((prevDesX) => prevDesX * 0.95);
        setDesY((prevDesY) => prevDesY * 0.95);
        setTX((prevTX) => prevTX + desX * 0.1);
        setTY((prevTY) => prevTY + desY * 0.1);
        applyTranform();
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odragRef.current.timer);
          playSpin(true);
        }
      }, 17);
      document.onpointermove = document.onpointerup = null;
    };

    return false;
  };

  return (
    <div className="carousel">
      <div id="drag-container" ref={odragRef} onPointerDown={handlePointerDown}>
        <div id="spin-container">
          {/* Add your images (or video) here */}
          <Image
            src={IMG1}
            alt=""
          />
           <Image
            src={IMG2}
            alt=""
          />
           <Image
            src={IMG3}
            alt=""
          />
           <Image
            src={IMG4}
            alt=""
          />
           <Image
            src={IMG5}
            alt=""
          />
           <Image
            src={IMG6}
            alt=""
          />
           <Image
            src={IMG7}
            alt=""
          />
           <Image
            src={IMG8}
            alt=""
          />
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};

export default MainCarousel;
