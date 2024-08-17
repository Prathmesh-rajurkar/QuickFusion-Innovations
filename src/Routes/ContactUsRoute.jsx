import React, { useState } from "react";
import Contact from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import Button from '../Components/Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsRoute = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "71b1bb7e-9c51-46d3-94bf-b46426ae71d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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

  const openLink = (URL) => {
    window.open(URL);
  }

  return (
    <>
      <div className="bg-slate-950 pt-24">
        <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen mx-auto mt-10 gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="flex flex-col gap-4 w-full lg:w-2/5 xl:w-1/3">
            <div className="flex gap-4 flex-wrap mb-8">
              <Button text="VIA SUPPORT CHAT" icon={<MdMessage className="text-xl" />} onClick={() => openLink("https://api.whatsapp.com/send/?phone=7057347707&text&type=phone_number&app_absent=0")} />
              <Button text="VIA CALL" icon={<FaPhoneAlt className="text-xl" />} onClick={() => openLink("https://api.whatsapp.com/send/?phone=7057347707&text&type=phone_number&app_absent=0")} />
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 pb-5">
              <div className="relative flex flex-col w-full">
                <label
                  htmlFor="name"
                  className="text-sm absolute -top-3 left-2 bg-gray-900 px-1 text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full h-10 px-2 border border-gray-600 rounded bg-gray-700 text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-sm absolute -top-3 left-2 bg-gray-900 px-1 text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-10 px-2 border border-gray-600 rounded bg-gray-700 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative flex flex-col w-full">
                <label
                  htmlFor="text"
                  className="text-sm absolute -top-3 left-2 bg-gray-900 px-1 text-white"
                >
                  Message
                </label>
                <textarea
                  name="Message"
                  rows="8"
                  className="w-full px-2 border border-gray-600 rounded bg-gray-700 text-white resize-y"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className="flex-col justify-end">
                <Button text="SUBMIT" />
                <span className="block my-5 text-[#b3afaf]">{result}</span>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center w-full lg:w-[80%] xl:w-1/3">
            <img
              src="/images/contact.svg"
              alt="contact image"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto rounded-md"
            />
          </div>
        </section>
        <div className="flex flex-col justify-center mt-20">
          <h1 className="mb-20 text-3xl sm:text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
            You can contact us through
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-around px-4 sm:px-10 lg:px-20 mb-28 gap-10 sm:gap-16">
            <div className="flex flex-col justify-center items-center" onClick={() => openLink("https://www.facebook.com/profile.php?id=61564141566008")}>
              <IoLogoFacebook className="text-white text-5xl flex justify-center hover:text-blue-500" />
              <p className="text-neutral-100 flex justify-center mt-2">Facebook</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => openLink("https://www.instagram.com/quickfusion_innovations/")}>
              <FaInstagram className="text-white text-5xl flex justify-center hover:text-pink-600" />
              <p className="text-neutral-100 flex justify-center mt-2">Instagram</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => openLink("https://www.linkedin.com/company/quickfusion-innovations")}>
              <FaLinkedin className="text-white text-5xl flex justify-center hover:text-blue-500" />
              <p className="text-neutral-100 flex justify-center mt-2">LinkedIn</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => openLink("https://api.whatsapp.com/send/?phone=7057347707&text&type=phone_number&app_absent=0")}>
              <RiWhatsappFill className="text-white text-5xl flex justify-center hover:text-green-600" />
              <p className="text-neutral-100 flex justify-center mt-2">Whatsapp</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUsRoute;
