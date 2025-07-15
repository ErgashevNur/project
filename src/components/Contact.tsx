import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, SendIcon } from "lucide-react";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "c78339936@email.com",
      subText: "Email orqalik murojat qilishingiz mumkin",
    },
    {
      icon: Phone,
      title: "Telefon raqam",
      details: "+998 (90) 395 14 09",
      subText: "Qong'iroq qilish vaqti 08.00 dan, 18.00 gacha",
    },
    {
      icon: SendIcon,
      title: "Telegram",
      details: "chxrseee",
      subText: "Mening Telegram akkauntim",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Keling, <span className="text-amber-400">Bog‘lanamiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              G'oyangizni hayotga tatbiq etishga tayyormisiz? Loyihangiz haqida
              suhbatlashaylik va birgalikda ajoyib loyhani yarataylik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-500 transform ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <info.icon className="text-gray-900" size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {info.title}
                        </h3>
                        <p className="text-amber-400 font-medium">
                          {info.details}
                        </p>
                        <p className="text-gray-400 text-sm">{info.subText}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-amber-400" size={20} />
                  <h3 className="text-white font-semibold">Javob vaqti</h3>
                </div>
                <p className="text-gray-300">
                  Odatda barcha murojaatlarga 24 soat ichida javob beraman. Agar
                  loyiha shoshilinch bo‘lsa, bemalol to‘g‘ridan-to‘g‘ri
                  qo‘ng‘iroq qilishingiz mumkin.
                </p>
              </div>
            </div>

            <div
              className={`bg-gray-800/50 rounded-xl p-8 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
