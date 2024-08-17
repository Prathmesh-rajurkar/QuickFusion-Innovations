import React,{useState} from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "71b1bb7e-9c51-46d3-94bf-b46426ae71d6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div id='contact'>
            <section className=" ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -80 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4 text-4xl tracking-tight font-bold text-center text-slate-950">
                        Contact Us
                    </motion.h2>
                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -80 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 lg:mb-16 font-light text-center text-slate-900 sm:text-xl">
                        Got any issue related to it? Want to send feedback about our service? Need details about our the service provided? <br /> Let us know.
                    </motion.p>
                    <form className="space-y-8" onSubmit={onSubmit}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            <label for="name" className="block mb-2 text-sm font-medium text-slate-900">Name</label>
                            <input type="text" name='name' id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 80 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <label for="phone" className="block mb-2 text-sm font-medium text-slate-900">Phone</label>
                            <input type="tel" name="phone" id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="78456XXXXX" pattern="[0-9]{10}" required />
                            <small className="text-red-500 hidden" id="phone-error">Please enter a valid 10-digit phone number.</small>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-slate-900">Your message</label>
                            <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </motion.div>
                        <motion.button
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1}}
                            className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-500 hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
                            type='submit'
                        >
                            Submit
                        </motion.button>
                    </form>
                    <span className=' block my-5 text-[#b3afaf]'>{result}</span>
                </div>
            </section>
        </div>
    )
}

export default Contact
