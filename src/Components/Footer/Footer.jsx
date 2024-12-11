import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-black text-white lg:px-20 md:px-12 sm:px-8 max-sm:px-4'>
      <div>
        <footer className="footer text-base-content py-10 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2">
          <div>
            <Link to='/' className="text-white lg:text-3xl md:text-[25px] sm:text-[22px] max-sm:text-[22px] font-bold no-underline">CareerHub</Link>
            <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
            </p>
            <div className="social text-white text-xl mt-2 flex justify-start items-center w-full gap-3">
              <Link to='https://facebook.com' target="_blank"><FaFacebook></FaFacebook></Link>
              <Link to='https://x.com' target="_blank"><FaXTwitter></FaXTwitter></Link>
              <Link to='https://x.com' target="_blank"><FaInstagram></FaInstagram></Link>
            </div>
          </div>
          <div>
            <h6 className="text-white text-xl font-semibold">Company</h6>
            <Link to='/' className="text-gray-400 link link-hover">About Us</Link>
            <Link to='/' className="text-gray-400 link link-hover">Work</Link>
            <Link to='/' className="text-gray-400 link link-hover">Latest News</Link>
            <Link to='/' className="text-gray-400 link link-hover">Careers</Link>
          </div>
          <div>
            <h6 className="text-white text-xl font-semibold">Product</h6>
            <Link to='/' className="text-gray-400 link link-hover">Prototype</Link>
            <Link to='/' className="text-gray-400 link link-hover">Plans & Pricing</Link>
            <Link to='/' className="text-gray-400 link link-hover">Customers</Link>
            <Link to='/' className="text-gray-400 link link-hover">Integrations</Link>
          </div>
          <div>
            <h6 className="text-white text-xl font-semibold">Support</h6>
            <Link to='/' className="text-gray-400 link link-hover">Help Desk</Link>
            <Link to='/' className="text-gray-400 link link-hover">Sales</Link>
            <Link to='/' className="text-gray-400 link link-hover">Become a Partner</Link>
            <Link to='/' className="text-gray-400 link link-hover">Developers</Link>
          </div>
          <div>
            <h6 className="text-white text-xl font-semibold">Contact</h6>
            <Link to='/' className="text-gray-400 link link-hover">524 Broadway, NYC</Link>
            <Link to='/' className="text-gray-400 link link-hover">+1777 978-5570</Link>
          </div>
        </footer>
      </div>
      <div className="border-t-2 text-gray-400 border-gray-900 flex justify-between items-center py-3 text-[14px]">
        <p>@2023 <Link to='/'>CareerHub</Link>. All Rights Reserved</p>
        <p>Powered by <Link to='/'>CareerHub</Link></p>
      </div>
    </div>
  );
};

export default Footer;
