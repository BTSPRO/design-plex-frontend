import React, { useState } from 'react'
import Reveal from '../Reveal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const basicForm = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
};


const HomeForm = () => {
    const [formData, setFormData] = useState(basicForm);
    const [errors, setErrors] = useState({});

    const toastCustom = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        for (const field in formData) {
            if (!formData[field].trim()) {
                newErrors[field] = "This field is required!";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log(errors);
            toast.error("Please fill in all required fields.", toastCustom);
            return false;
        }

        setErrors({});
        return true;
    }


    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await fetch(`http://localhost:3001/api/submit-form`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(formData),
                });


                if (response.ok) {
                    toast.success("Form submitted successfully", toastCustom);
                    setFormData(basicForm);
                } else {
                    toast.error("Failed to submit form", toastCustom);
                }
            } catch (error) {
                toast.error("Something went wrong!", toastCustom);
                console.log('Error submitting form:', error);
            }
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='my-28 py-3 mx-3'>
                <Reveal>
                    <p className='text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center'>Let’s Stay <span className='primary-text'>Connected</span></p>
                    <p className='sm:text-xs md:text-lg lg:text-xl xl:text-3xl mx-10 md:mx-40 font-medium text-center'>Even when we are apart, we can stay <span className='primary-text'>connected </span>through phone calls and messages.</p>
                </Reveal>






                <div className='mx-2 sm:mx-10 md:mx-20 mt-20'>
                    <form>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label className='ms-2.5 text-xs md:text-xl lg:text-2xl font-medium' htmlFor="firstName">First Name*</label>
                                <input type="text" id="firstName" className='rounded-lg bg-black text-white px-2.5 py-2 font-medium text-xs md:text-2xl lg:text-3xl' value={formData.firstName} onChange={handleInputChange} required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='ms-2.5 text-xs md:text-xl lg:text-2xl font-medium' htmlFor="lastName">Last Name*</label>
                                <input type="text" id="lastName" className='rounded-lg bg-black text-white px-2.5 py-2 font-medium text-xs md:text-2xl lg:text-3xl' value={formData.lastName} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4 mt-3'>
                            <div className='flex flex-col'>
                                <label className='ms-2.5 text-xs md:text-xl lg:text-2xl font-medium' htmlFor="phoneNumber">Phone Number*</label>
                                <input type="text" id="phoneNumber" className='rounded-lg bg-black text-white px-2.5 py-2 font-medium text-xs md:text-2xl lg:text-3xl' value={formData.phoneNumber} onChange={handleInputChange} required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='ms-2.5 text-xs md:text-xl lg:text-2xl font-medium' htmlFor="email">Email*</label>
                                <input type="email" id="email" className='rounded-lg bg-black text-white px-2.5 py-2 font-medium text-xs md:text-2xl lg:text-3xl' value={formData.email} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col mt-3'>
                                <label className='ms-2.5 text-xs md:text-xl lg:text-2xl font-medium' htmlFor="subject">Subject*</label>
                                <input type="text" id="subject" className='rounded-lg bg-black text-white px-2.5 py-2 font-medium text-xs md:text-2xl lg:text-3xl' value={formData.subject} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col mt-3'>
                                <label className='ms-2.5 text-xs md:text-xl lg:text-2xl font-medium' htmlFor="message">Message*</label>
                                <textarea id="message" rows={4} className='rounded-lg bg-black text-white px-2.5 py-2 font-medium text-xs md:text-2xl lg:text-3xl' value={formData.message} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className='rounded-lg mt-7 flex justify-center py-3 primary-bg-color'>
                            <button className='text-base md:text-4xl lg:text-5xl font-bold w-full' type='button' onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HomeForm