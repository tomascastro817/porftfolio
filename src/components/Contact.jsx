import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser'; // Importa EmailJS

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
      );
      setIsSubmitted(true);
      setErrorMessage("");
      reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrorMessage("Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <section id="contact" className="py-16 ">
  <div className="container mx-auto px-8 md:px-16 lg:px-32">
    <p className="text-lg text-gray-600 mb-6 text-center">
      Si tienes alguna pregunta, inquietud o sugerencia, no dudes en enviarme un mensaje.
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12" data-aos="fade-up">
      ¡Contáctame!
    </h2>

    {isSubmitted && (
      <div className="bg-green-100 p-4 mb-4 rounded-md mt-6 text-center shadow-lg">
        <p className="text-green-700">¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes posible.</p>
      </div>
    )}

    {errorMessage && (
      <div className="bg-red-100 p-4 mb-4 rounded-md mt-6 text-center shadow-lg">
        <p className="text-red-700">{errorMessage}</p>
      </div>
    )}

    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl space-y-6 max-w-3xl mx-auto" data-aos="fade-up">
      <div>
        <label htmlFor="name" className="block text-gray-800 font-semibold text-lg">Nombre</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'El nombre es obligatorio' })}
          className={`w-full mt-2 p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-800 font-semibold text-lg">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } })}
          className={`w-full mt-2 p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-800 font-semibold text-lg">Teléfono</label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'El teléfono es obligatorio', pattern: { value: /^[0-9]{10,15}$/, message: 'Número inválido' } })}
          className={`w-full mt-2 p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-800 font-semibold text-lg">Asunto</label>
        <input
          type="text"
          id="subject"
          {...register('subject', { required: 'El asunto es obligatorio' })}
          className={`w-full mt-2 p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-800 font-semibold text-lg">Mensaje</label>
        <textarea
          id="message"
          {...register('message', { required: 'El mensaje es obligatorio' })}
          className={`w-full mt-2 p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          rows="4"
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>

      <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Enviar Mensaje
      </button>
    </form>

    {/* Información adicional */}
    <div className="mt-8 text-center">
      <p className="text-lg text-gray-800">¿Prefieres contactarme directamente?</p>
      <p className="text-gray-600 mb-8">Llama al <a href="tel:+543863512795" className="text-blue-500 hover:text-blue-600">+54 3863 512795</a> o escribe a <a href="mailto:tomascastro817@gmail.com" className="text-blue-500 hover:text-blue-600">tomascastro817@gmail.com</a></p>
    </div>
  </div>
</section>

  );
};

export default Contact;
