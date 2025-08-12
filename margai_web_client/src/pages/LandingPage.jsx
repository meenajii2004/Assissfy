import { Info } from "lucide-react";
import { Link } from "react-router";
import { useRef } from "react";

const affiliatedInstitutes = [{
  id:1,
  name: "Harvard University",
  img: "/img/landing-affiliated-institute-4.png"
}, {
  id:2,
  name: "Oxford University",
  img: "/img/landing-affiliated-institute-3.png"
}, {
  id:3,
  name: "Cambridge University",
  img: "/img/landing-affiliated-institute-2.png"
}, {
  id:4,
  name: "Yale University",
  img: "/img/landing-affiliated-institute-1.png"
}]

function LandingPage() {
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const registerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header section */}
      <header
        className="relative mb-14 pb-14"
        style={{
          background:
            "url('/img/landing-header-pattern.png')",
        }}
      >
        {/* Logo & Nav */}
        <nav className="flex flex-row px-12 py-8 items-center justify-between">
          <div className="flex flex-row items-center">
            <img src="/img/logo.svg" alt="logo" height={60} width={60} />
            <h1 className="text-5xl font-semibold text-white ml-2">MargAI</h1>
          </div>

          <div className="flex flex-row items-center justify-between gap-16">
            <ul className="flex flex-row items-center text-white font-semibold cursor-pointer text-xl gap-8">
              <li
                onClick={() => scrollToSection(whyUsRef)}
                className="hover:underline hover:text-white/80"
              >
                Why us
              </li>
              <li
                onClick={() => scrollToSection(servicesRef)}
                className="hover:underline hover:text-white/80"
              >
                Services
              </li>
              <li
                onClick={() => scrollToSection(registerRef)}
                className="hover:underline hover:text-white/80"
              >
                Register
              </li>
            </ul>

            <div className="flex flex-row gap-6 font-semibold">
              <Link to="/sign-in">
                <button className="text-black bg-white uppercase text-sm rounded-xl py-2 px-8 hover:bg-white/80">
                  login
                </button>
              </Link>
              <button className="text-black bg-white uppercase text-sm rounded-xl py-2 px-8 hover:bg-white/80"
                onClick={() => scrollToSection(registerRef)}
              >
                register
              </button>
            </div>
          </div>
        </nav>

        {/* Header image */}
        <img
          src="/img/landing-header-image.png"
          alt="landing page header image"
          height={735}
          width={735}
          className="absolute top-12 left-5 shadow-sm"
        />

        {/* Header text */}
        <div className="ml-[53%] text-white font-extrabold">
          <h1 className="text-3xl mb-4">
            Want to enhance your academic experience?
          </h1>
          <div className="bg-[#FFA000] w-96 h-3 mb-6"></div>

          <p className="text-3xl mb-6">
            Upgrade Your Institute with <br />
            our inclusive AI-assisted <br />
            Skill Assessment Platform
          </p>

          <button className="text-[#037983] bg-white uppercase text-lg rounded-xl py-3 px-8 hover:bg-white/80"
                onClick={() => scrollToSection(registerRef)}
          >
            Register your Institute Now!!
          </button>
        </div>
      </header>

      {/* Why Us section */}
      <section ref={whyUsRef} className="mb-20">
        <div className="flex flex-col items-end text-right mr-10 text-black mb-12">
          <h2 className="text-4xl mb-2 font-bold">Why Us?</h2>
          <div className="bg-[#FFA000] w-96 h-3 mb-3"></div>
          <p className="font-normal text-xl">
            Discover an inclusive and intuitive platform designed for
            <br /> seamless assessment management and student ease.
          </p>
        </div>

        <div className="flex flex-row items-center justify-around">
          <div className="flex flex-col items-center text-base">
            <img src="/img/why-us-1.svg" className="py-6 mb-5" />
            <h3 className="text-[#03545A] mb-2">Manage</h3>
            <p className="text-black/50">Your Institute</p>
          </div>

          <div className="flex flex-col items-center text-base">
            <img src="/img/why-us-2.svg" className="py-8 mb-6" />
            <h3 className="text-[#03545A] mb-2">Assessment</h3>
            <p className="text-black/50">For Students</p>
          </div>

          <div className="flex flex-col items-center text-base">
            <img src="/img/why-us-3.svg" className="mb-6" />
            <h3 className="text-[#03545A] mb-2">Result Analysis</h3>
            <p className="text-black/50">For Teachers</p>
          </div>
        </div>
      </section>

      {/* Our Services section */}
      <section ref={servicesRef} className="mb-20">
        <div className="flex flex-col items-start text-left ml-10 text-black mb-12">
          <h2 className="text-4xl mb-2 font-bold">Our Services</h2>
          <div className="bg-[#FFA000] w-80 h-3 mb-3"></div>
          <p className="font-normal text-xl">
            Innovative, Inclusive, and Intelligent <br /> Assessments for All
          </p>
        </div>

        <div
         style={{
          background:
            "url('/img/landing-header-pattern.png')",
        }}
          className="rounded-3xl mx-12 flex flex-row text-white justify-around font-medium"
        >
          <div className="relative py-8">
            <Info className="absolute left-[-2rem] top-9" />
            <h3 className="font-bold text-2xl mb-1">Holistic Assessments</h3>
            <p className="text-lg">
              Evaluate skills with pen-paper, <br />
              MCQs, practicals, and viva- <br />
              voce to ensure a well-rounded
              <br />
              assessment experience.
            </p>
          </div>

          <div className="relative py-8">
            <Info className="absolute left-[-2rem] top-9" />
            <h3 className="font-bold text-2xl mb-1">Inclusive for All</h3>
            <p className="text-lg">
              Built for inclusivity, our platform <br />
              supports PWD through accessibility <br />
              voce to ensure a well-rounded
              <br />
              assessment experience.
            </p>
          </div>

          <div className="relative py-8">
            <Info className="absolute left-[-2rem] top-9" />
            <h3 className="font-bold text-2xl mb-1">Multi-mode Flexibility</h3>
            <p className="text-lg">
              Conduct assessments seamlessly in <br />
              online, offline, or blended formats, <br />
              adapting to diverse environments
              <br />
              and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Institute Registration section */}
      <section
        ref={registerRef}
        className="mb-10 text-[#067079] p-8 grid grid-cols-2"
      >
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-5">
            <h3 className=" text-3xl font-bold">Institute Registration</h3>
            <div className="bg-[#FFA000] w-[27rem] h-[0.65rem]"></div>
            <p className="font-medium">
              Sign up and set up your Institute to access all features!!
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-10">
          <fieldset className="flex flex-col gap-1">
            <label htmlFor="name" className="font-bold text-sm">
              Institute Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Institute Name"
              required
              className="h-8 w-10/12 rounded-lg border-2 border-[#D4D7E3]  px-3 text-sm"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="h-8 w-10/12 rounded-lg border-2 border-[#D4D7E3]  px-3 text-sm"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor="password" className="font-bold text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              className="h-8 w-10/12 rounded-lg border-2 border-[#D4D7E3]  px-3 text-sm"
            />
          </fieldset>

          <Link to="/sign-in">
            <button
              type="submit"
              className="bg-[#00B2C2] text-white rounded-xl w-1/4 py-2"
            >
              Register Now
            </button>
          </Link>
        </form>
      </section>

      {/* Personal Skill Assessments Section  */}
      <section ref={whyUsRef} className="mb-20">
        <div className="flex flex-col items-end text-right mr-10 text-black mb-12">
          <h2 className="text-3xl mb-4 font-bold">Associated Institutes</h2>
          <div className="bg-[#FFA000] w-96 h-3 mb-3"></div>
          <p className="font-normal text-xl">
           Institutions and Universities that trust us for their assessments
          </p>
        </div>

        <div
         style={{
          background:
            "url('/img/landing-header-pattern.png')",
        }}
          className="rounded-3xl mx-12 text-white p-8"
        >
          <div className="flex flex-row justify-between">
            {affiliatedInstitutes.map((institute) => ( 
              <div className="flex flex-col items-center" key={institute.id}>
              <img src={institute.img} className="" />
              <h4 className="text-xl">{institute.name}</h4>
            </div>))}
          </div>
        </div>


        </section>

      {/* Footer section */}
      <footer className="flex items-center justify-center bg-[#37383d] text-white">
        <ul className="flex flex-row gap-20 py-8">
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Terms of Service</li>
        </ul>
      </footer>
    </>
  );
}

export default LandingPage;
