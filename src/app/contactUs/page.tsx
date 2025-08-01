"use client";
// import Banner from "@/components/Banner";
// import Sidebar from "@/components/Sidebar";
// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import EmailSubmittedModal from "@/components/EmailSubmittedModal";
import Link from "next/link";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalOpen(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="bg-[#091b33] min-h-screen">
      <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] relative">
        <Image
          src="/about/car-1.png"
          alt="Account Banner"
          fill
          className="object-cover object-center "
        />
      </div>
      <div className="bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-4 py-6 p-4">

        {/* <div className="md:w-1/4">
        <Sidebar activeKey="" />
      </div> */}
        <div className="flex-1 flex-col gap-6">
          <div className="max-w-6xl mx-auto w-full">
            {/* Breadcrumb */}
            <div className="w-full max-w-6xl flex items-center gap-2 mb-6 md:mt-8">
              <Link href="/">
                <Image
                  src="/Images/HouseLine.png"
                  alt="Home"
                  width={20}
                  height={20}
                />
              </Link>
              <Image
                src="/Images/arrows (1).svg"
                alt=">"
                width={16}
                height={16}
              />
              <span className="text-white text-base font-medium">
                Contact us
              </span>
            </div>

            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-0 mb-0">
              {/* Left Column - Info */}
              <div className="flex flex-col gap-4 pb-0 mb-0">
                <div>
                  <p className="text-white font-semibold uppercase text-sm mb-2">
                    Have a question?
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold uppercase mb-4">
                    WE ARE HERE TO HELP
                  </h2>
                  <p className="text-base text-gray-200 leading-relaxed">
                    We value your questions, suggestions, and feedback. Please
                    use the form to get in touch with us. We&apos;ll strive to
                    respond to you as promptly as possible.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/Images/contact_us.png"
                      alt="Clock"
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-base font-semibold mb-0.5">
                        Working hours
                      </span>
                      <span className="text-gray-200 text-sm">
                        Mon–Fri: 8AM – 7PM EST
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/Images/contact_us (1).png"
                      alt="Phone"
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-base font-semibold mb-0.5">
                        Phone
                      </span>
                      <span className="text-gray-200 text-sm">
                        (888) 338-2540
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/Images/contact_us (3).png"
                      alt="Mail"
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-base font-semibold mb-0.5">
                        Email address
                      </span>
                      <a
                        href="mailto:partscentralus@gmail.com"
                        className="underline"
                      >
                        partscentralus@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/Images/contact_us (2).png"
                      alt="Location"
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-base font-semibold mb-0.5">
                        Office location
                      </span>
                      <span className="text-gray-200 text-sm">
                        76 Imperial Dr Suite E Evanston, WY 82930, USA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-[#091627] rounded-md shadow-sm p-6 mt-6 md:mt-2">
                <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-semibold mb-2">Name*</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full bg-[#091627] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Email*</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full bg-[#091627] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Text*</label>
                    <textarea
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={4}
                      className="w-full bg-[#091627] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-gray-500 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#00a3ff] hover:bg-blue-600 text-white rounded-lg py-2 mt-4 font-semibold transition-colors"
                  >
                    Submit Now
                  </button>
                </form>
                {modalOpen && (
                  <EmailSubmittedModal onClose={() => setModalOpen(false)} />
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
