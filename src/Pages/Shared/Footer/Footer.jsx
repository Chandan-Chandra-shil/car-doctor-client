import logo from '../../../assets/logo.svg'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-900 text-white">
      <div className="space-y-4">
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web
          <br /> technologies engineer, a life coach
          <br />
          trainer who is also a serial .
        </p>
        <div className="flex gap-4 ">
          <a href=''>
            <FaGoogle className="h-6 w-6" />
          </a>
          <a href=''>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href=''>
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href=''>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <span className="text-white font-semibold text-md uppercase">
          About
        </span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div className="space-y-4">
        <span className="text-white font-semibold text-md uppercase">
          Company
        </span>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </div>
      <div className="space-y-4">
        <span className="text-white font-semibold text-md uppercase">
          Support
        </span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;
