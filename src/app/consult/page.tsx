import Heading from '@/components/Heading';
import React from 'react';

const ConsultingPage = () => {
  return (
    <div>
      <div className="pl-10 pb-4">
        <Heading>Tech Consulting Services</Heading>
        <p>Innovative solutions for your business needs</p>
      </div>
      <nav className='text-center m-10 space-x-5'>
        <a href="#webapps" className='text-rose-700'>Web Apps</a>
        <a href="#cloud" className='text-rose-700'>Cloud Infrastructure</a>
        <a href="#hosting" className='text-rose-700'>Hosting</a>
      </nav>
      <section className="flex flex-col w-full m-auto rounded-md space-y-10">
        <div id="webapps" className='bg-gradient-to-b  from-red-600 p-10'>
          <h3 className='text-red-500 text-semibold text-4xl'>Creating Web Applications</h3>
          <p>We specialize in developing scalable, user-friendly web applications tailored to your business requirements. From concept to deployment, we ensure seamless integration and performance.</p>
        </div>
        <div id="cloud" className='bg-gradient-to-b  from-green-600 p-10'>
          <h3 className='text-red-500 text-semibold text-4xl'>Automating Cloud Infrastructure</h3>
          <p>Leverage our expertise in cloud technologies to automate your infrastructure. We design, implement, and manage solutions that boost efficiency and reduce costs.</p>
        </div>
        <div id="hosting" className='bg-gradient-to-b  from-blue-600 p-10'>
          <h3 className='text-red-500 text-semibold text-4xl'>Hosting Pages</h3>
          <p>Need reliable and fast hosting? We've got you covered with secure hosting solutions, ensuring your website remains accessible and performant around the clock.</p>
        </div>
      </section>
      {/* <section className="flex flex-col w-full m-auto rounded-md space-y-10">
        <h2>Contact Us</h2>
        <form action="/api/contact" method="post">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section> */}
    </div>
  );
};

export default ConsultingPage;
