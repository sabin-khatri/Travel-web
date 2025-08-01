import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";

const Contact = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className="min-h-screen flex flex-col justify-center md:px-32 px-5 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
        {/* Contact Form */}
        <form className="w-full lg:w-2/5 space-y-6 bg-[#f2f2f2] p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-semibold text-center text-darkBackground">Contact Form</h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="userName" className="font-medium">Full Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your name"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="userEmail" className="font-medium">Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="userMessage" className="font-medium">Message</label>
            <textarea
              id="userMessage"
              name="userMessage"
              rows="4"
              placeholder="Enter your message"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor transition-all"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button title="Submit" backgroundColor={backgroundColor} />
          </div>
        </form>

        {/* Image & Message */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          <img src={img} alt="Contact" className="rounded-lg shadow-lg w-full max-h-[400px] object-cover" />
          <p className="mt-6 text-sm text-[#898888]">
            We hadd love to hear from you! Whether you have questions, feedback, or need assistance with your travel plans, 
            please do not hesitate to reach out. Our team is here to help you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
