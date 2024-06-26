import React from "react";

const Footer = () => {
  return (
    <>
       <footer className="bg-white text-gray-600 py-8 mt-16">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>123 Booking Street, City, Country<br />
                    contact@example.com<br />
                    +123 456 7890</p>
                </div>
                <div className="w-full lg:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300">
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 15h-3v-4H9v-3h2V9.5C11 8.12 11.62 7 13 7h2v3h-1c-.55 0-1 .45-1 1v3h3v4h-4v-3z"/></svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300">
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 2H7C5.35 2 4 3.35 4 5v14c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3zm-1 14h-2v4h-2v-4h-2v-2h2v-3c0-1.1.9-2 2-2s2 .9 2 2v3h2v2z"/></svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300">
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 2H7C5.35 2 4 3.35 4 5v14c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3zm-1 14h-2v4h-2v-4h-2v-2h2v-3c0-1.1.9-2 2-2s2 .9 2 2v3h2v2z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p>&copy; 2024 Booking Website. All rights reserved.</p>
            </div>
        </footer>


    </>
  );
};

export default Footer;
