'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const metadata = {
  title: 'ssss',
  description: 'Genddddddp',
};

export default function Contactos() {
  const form = useRef();
  const SERVICEID = process.env.NEXT_PUBLIC_SERVICIO;
  const TEMPLATEID = process.env.NEXT_PUBLIC_TEMPLATE;
  const PUBLICKEYID = process.env.NEXT_PUBLIC_PUBLICKEY;

  const [successMessage, setSuccessMessage] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form.current);
    const name = formData.get('Nombre');
    const email = formData.get('Email');
    const message = formData.get('Mensaje');

    // Perform basic form validation
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsFormDisabled(true); // Disable the form fields and submit button during submission

    emailjs.sendForm(SERVICEID, TEMPLATEID, form.current, PUBLICKEYID)
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Message sent successfully.');
        form.current.reset(); // Reset the form fields
        setIsFormDisabled(false); // Re-enable the form fields and submit button after success
      })
      .catch((error) => {
        console.log(error.text);
        alert('An error occurred while sending the message. Please try again later.');
        setIsFormDisabled(false); // Re-enable the form fields and submit button after an error
      });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
      {successMessage ? (
        <div className="mt-4 text-green-500 font-bold">{successMessage}</div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nombre">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="Nombre"
              required
              disabled={isFormDisabled} // Disable the field when the form is being submitted
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="Email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              disabled={isFormDisabled} // Disable the field when the form is being submitted
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Mensaje">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Mensaje"
              required
              rows={4} // Set the number of visible rows to 4
              disabled={isFormDisabled} // Disable the field when the form is being submitted
            />
          </div>
          <div className="flex justify-center">
            <input
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer ${
                isFormDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              type="submit"
              value="Send"
              disabled={isFormDisabled} // Disable the button when the form is being submitted
            />
          </div>
        </form>
      )}
    </div>
  );
}
