import { useState } from 'react';
import RevealOnScroll from '../RevealOnScroll'
import emailjs from 'emailjs-com'

const Contact = () => {

    const [formData, setFormData] = useState({
      name:"",
      email:"",
      message:""
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) =>{ 
        alert("Oops! Something went wrong. Please try again.")
    });
  };

  return (
    <section
      id='contact'
      className='min-h-screen py-10 px-2 sm:px-4 w-full bg-transparent overflow-x-hidden'
    >
      <RevealOnScroll>
        <div className='w-full max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto my-6 sm:my-0'>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >Get In Touch</h2>
          <form className='space-y-6 w-full px-0 sm:px-4 md:px-8' onSubmit={handleSubmit}>
            <div className='relative'>
              <input
                type="text"
                id="name"
                name='name'
                required
                value={formData.name}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder='Name...'
                onChange={(e)=> setFormData({...formData, name:e.target.value})}
              /> 
            </div>

            <div className='relative'>
              <input
                type="email"
                id="email"
                name='email'
                required
                value={formData.email}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder='example@gmail.com'
                onChange={(e)=> setFormData({...formData, email:e.target.value})}
              /> 
            </div>

            <div className='relative'>
              <textarea
                id="message"
                name='message'
                required
                rows={5}
                value={formData.message}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none'
                placeholder='Your Message...'
                onChange={(e)=> setFormData({...formData, message:e.target.value})}
              /> 
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:cursor-pointer'
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll> 
    </section>
  )
}

export default Contact