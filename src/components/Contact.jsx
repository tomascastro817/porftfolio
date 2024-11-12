import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulario enviado con éxito");
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        
        {/* Introducción al formulario */}
        <p className="text-lg text-gray-600 mb-6 text-center">
          Si tienes alguna pregunta, inquietud o sugerencia, no dudes en enviarme un mensaje.
        </p>

        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          ¡Contáctame!
        </h2>

        
        

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl space-y-5 max-w-xl mx-auto" data-aos="fade-up">
          
          <div>
            <label htmlFor="name" className="block text-gray-800 font-semibold text-lg">Nombre</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'El nombre es obligatorio' })}
              className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold text-lg">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } })}
              className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-800 font-semibold text-lg">Teléfono</label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'El teléfono es obligatorio', pattern: { value: /^[0-9]{10,15}$/, message: 'Número inválido' } })}
              className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-800 font-semibold text-lg">Asunto</label>
            <input
              type="text"
              id="subject"
              {...register('subject', { required: 'El asunto es obligatorio' })}
              className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-800 font-semibold text-lg">Mensaje</label>
            <textarea
              id="message"
              {...register('message', { required: 'El mensaje es obligatorio' })}
              className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              rows="4"
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>

          <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
            Enviar Mensaje
          </button>
        </form>

        {/* Confirmación de envío */}
        {isSubmitted && (
          <div className="bg-green-100 p-4 rounded-md mt-6 text-center">
            <p className="text-green-700">¡Gracias por tu mensaje! Me pondre en contacto contigo lo antes posible.</p>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-800">¿Prefieres contactarme directamente?</p>
          <p className="text-gray-600">Llama al <a href="tel:+543863512795" className="text-blue-500 hover:text-blue-600">+54 3863 512795</a> o escribe a <a href="tomascastro817@gmail.com" className="text-blue-500 hover:text-blue-600">tomascastro817@gmail.com</a></p>
        </div>
       

        {/* Preguntas Frecuentes */}
        <section className="mt-12 p-6 rounded-md">
          <h3 className="text-2xl text-center text-gray-800 font-semibold">Preguntas Frecuentes</h3>
          <ul className="mt-4 text-gray-600">
            <li className="mb-3">
              <strong>¿Cuánto tiempo tarda en responderme?</strong>
              <p>Me comprometo a responder todas las consultas en un máximo de 24 horas.</p>
            </li>
            <li className="mb-3">
              <strong>¿Puedo obtener soporte técnico por teléfono?</strong>
              <p>Sí, puedes llamar al número proporcionado para soporte inmediato.</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Contact;
