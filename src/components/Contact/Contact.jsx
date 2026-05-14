import React from 'react';
import Form from '../ui/Form';
import ScrollFloat from '../ui/ScrollFloat';
import ContactAnimation from '../FormAnimation/formAnimation';


const Contact = () => {
  return (
    <div>
        <div className='text-purple-500'>
             <ScrollFloat
            animationDuration={1.5}
            stagger={1}
            ease='power3.out'
            scrollStart='top bottom-=10%'
            scrollEnd='bottom center'
          >
           Contact With Me
          </ScrollFloat>
        </div>
   
    <div className='flex justify-between w-11/12 my-10'>
      <div>
        <ContactAnimation/>
      </div>
      <div>
        <Form/>
      </div>





    </div>
     </div>
  );
};

export default Contact;