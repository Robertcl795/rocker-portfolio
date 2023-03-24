"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ subject, name, message, email}) => {
    window.location.href = `mailto:roberto_carrillo95@hotmail.com?subject=${subject}&body=Hi, my name is ${name}. \n ${message}. Please contact me at ${email}`
  }
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Ready to work together?
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s talk!
          </span>
          `
        </h4>
        <div>
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+52 3112048975</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">roberto_carrillo95@hotmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              {...register('name')}
              />
            <input
              placeholder="Email"
              className="contactInput"
              {...register('email')}
              />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            {...register('subject')}

          />
          <textarea
            placeholder="Message"
            className="contactInput"
            cols={30}
            rows={4}
            {...register('message')}
          />
          <button
            className="bg-[#F7AB0A]/70 py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
