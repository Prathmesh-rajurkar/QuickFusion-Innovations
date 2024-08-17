import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("Pratik Patel");
  const [email, setEmail] = useState("quickfusioninnovations@gmail.com");
  const [text, setText] = useState("");

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
    <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen mx-auto mt-10 gap-44 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:w-2/5 xl:w-1/3">
        <motion.div className="flex gap-4 flex-wrap mb-12"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage className="text-xl" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt className="text-xl" />} />
        </motion.div>
        {/* <Button
      isOutline={true}
      text="VIA EMAIL FORM"
      icon={<HiMail className="text-xl" />}
    /> */}
        <motion.form onSubmit={onSubmit} className="flex flex-col gap-4 pb-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex flex-col w-full">
            <label htmlFor="name" className="text-sm absolute -top-3 left-2 bg-gray-900 px-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              className="w-full h-10 px-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="email" className="text-sm absolute -top-3 left-2 bg-gray-900 px-1 text-white">Email</label>
            <input
              type="email"
              name="email"
              className="w-full h-10 px-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="text" className="text-sm absolute -top-3 left-2 bg-gray-900 px-1 text-white">Text</label>
            <textarea
              name="Message"
              rows="8"
              className="w-full px-2 border border-gray-600 rounded bg-gray-700 text-white resize-y"
            />
          </div>
          <div className="flex-col justify-end">
            <Button text="SUBMIT BUTTON" />
            <span className=' block my-5 text-[#b3afaf]'>{result}</span>
          </div>
        </motion.form>
      </div>
      <motion.div className="flex justify-center items-center lg:w-[80%] xl:w-1/3"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/contact.svg" alt="contact image" className="w-4/5 h-auto rounded-md" />
      </motion.div>
    </section>


  );
};

export default ContactForm;
