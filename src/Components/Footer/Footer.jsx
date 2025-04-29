import React, { useState } from 'react';
import facebook from '../../assets/f.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/insta.svg';
import emailImg from '../../assets/email.svg';
import logo from '../../assets/Meso logo-01 1.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscriptionStatus('Please enter a valid email address');
            return;
        }

        try {
            // Simulated API call (replace with actual backend endpoint)
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSubscriptionStatus('Thank you for subscribing!');
                setEmail(''); // Clear input after successful subscription
            } else {
                setSubscriptionStatus('Subscription failed. Please try again.');
            }
        } catch (error) {
            setSubscriptionStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full bg-[#faf3ec] text-[#4b2c5e] font-helvetica">
            <div className="bg-[#dcc0a7] w-full pt-8 pb-4 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                        {/* Logo Section */}
                        <div className="flex justify-center md:justify-start">
                            <a href="/">
                                <img
                                    src={logo}
                                    alt="Mesotheliamo Logo"
                                    className="h-auto w-[180px] sm:w-[200px] md:mt-0 lg:mt-0"
                                />
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-3 items-center md:items-start md:pl-8 lg:pl-12">
  <NavLink
    to="/"
    style={{ textDecoration: 'none' }}
    className={({ isActive }) =>
      `font-helvetica font-normal text-[18px] sm:text-[20px] lg:text-[24px] cursor-pointer ${
        isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'
      }`
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    Home
  </NavLink>
  <NavLink
    to="/MesothMainPage"
    style={{ textDecoration: 'none' }}
    className={({ isActive }) =>
      `font-helvetica font-normal text-[18px] sm:text-[20px] lg:text-[24px] cursor-pointer ${
        isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'
      }`
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    Mesothelioma
  </NavLink>
  <NavLink
    to="/AboutMain"
    style={{ textDecoration: 'none' }}
    className={({ isActive }) =>
      `font-helvetica font-normal text-[18px] sm:text-[20px] lg:text-[24px] cursor-pointer ${
        isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'
      }`
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    About us
  </NavLink>
</div>

                        {/* Newsletter Section */}
                        <div className="flex flex-col space-y-4 mt-6 md:mt-0">
                            <form onSubmit={handleSubscribe} className="w-full max-w-[436px] mx-auto md:mx-0">
                                <b className="block text-[16px] md:text-[18px] mb-4 font-bold font-['Helvetica'] text-center md:text-left">
                                    Subscribe to our newsletter
                                </b>

                                <div className="flex flex-col sm:flex-row">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email id"
                                        className="flex-1 rounded-[10px] sm:rounded-l-[10px] sm:rounded-r-none border-2 border-[#4B2C5E] px-4 md:px-6 py-3 md:py-4 text-[16px] md:text-[20px] outline-none bg-[#DCC0A7] placeholder-[#4B2C5E] mb-2 sm:mb-0"
                                    />

                                    <button
                                        type="submit"
                                        className="rounded-[10px] sm:rounded-l-none sm:rounded-r-[10px] bg-[#4b2c5e] px-4 md:px-6 py-3 md:py-4 text-[#f8f2e9] text-[16px] md:text-[20px] mb-2"
                                    >
                                        <b>Subscribe</b>
                                    </button>
                                </div>
                                {subscriptionStatus && (
                                    <div className="mt-2 text-[14px] md:text-[16px] text-center sm:text-left">
                                        {subscriptionStatus}
                                    </div>
                                )}
                            </form>

                            {/* Contact Info */}
                            <div className="flex items-center justify-center md:justify-end space-x-4 mt-6 md:mt-8">
                                <img className="w-6 h-6 md:w-8 md:h-8" alt="" src={emailImg} />
                                <a className="text-[16px] md:text-[18px] underline leading-[34px] font-['Helvetica'] text-[#4B2C5E]"
                                    href="mailto:info@connect2attorney.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    info@connect2attorney.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8 pt-4 border-t border-[#f3e2c8] flex flex-col sm:flex-row items-center justify-between text-[rgba(75,44,94,0.66)]">
                        <div className="text-center sm:text-left mb-4 sm:mb-0 text-[12px] sm:text-[14px]">
                            <span className="text-[14px] sm:text-[16px] font-medium font-helvetica text-[#c6c3c3] mr-1">©</span>
                            <span>2025.</span>
                            <span className="ml-1">All rights reserved</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex space-x-2 sm:space-x-4">
                                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img className="w-full h-full" alt="Facebook" src={facebook} />
                                    </a>
                                </div>
                                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]">
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img className="w-full h-full" alt="Twitter" src={twitter} />
                                    </a>
                                </div>
                                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]">
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <img className="w-full h-full" alt="LinkedIn" src={linkedin} />
                                    </a>
                                </div>
                                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]">
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img className="w-full h-full" alt="Instagram" src={instagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;