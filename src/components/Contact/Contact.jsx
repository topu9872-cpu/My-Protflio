import React from "react";
import Form from "../ui/Form";
import ScrollFloat from "../ui/ScrollFloat";
import ContactAnimation from "../FormAnimation/formAnimation";

const Contact = () => {
  return (
    <div>
      <div className="text-purple-500">
        <ScrollFloat
          animationDuration={1.5}
          stagger={1}
          ease="power3.out"
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
        >
          Contact With Me
        </ScrollFloat>
      </div>

  <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto md:my-10 md:gap-6">
  
  {/* Left side */}
  <div className="w-full md:w-1/2 ">
    <ContactAnimation />
  </div>

  {/* Right side */}
  <div className="w-full md:w-1/2 mb-5 md:mb-0">
    <Form />
  </div>

</div>
    </div>
  );
};

export default Contact;
