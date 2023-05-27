import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"

function Footer() {
    return (
        <footer className="max-w-[-1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00ff7f] mb-6">
                    REACT.
                </h1>
                <p>React is a JavaScript framework created by Facebook (currently Meta) 
                    that is used to create user interfaces (UI) in web applications. 
                    It is popular for being easy to use, highly flexible and scalable, 
                    and is used by many technology companies including Facebook,
                    Instagram and Airbnb.
                </p>
                <div className="flex justify-between md:w-[75%] my-10">
                    <FaDribbbleSquare size={30} className="hover:scale-125"/>
                    <FaFacebookSquare size={30} className="hover:scale-125"/>
                    <FaGithubSquare size={30} className="hover:scale-125"/>
                    <FaInstagram size={30} className="hover:scale-125"/>
                    <FaTwitterSquare size={30} className="hover:scale-125"/>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-around mt-6">
            <div>
                <h6 className="font-bold text-gray-400">
                    Solutions
                </h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-400">
                    Support
                </h6>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API Status</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-400">
                    Company
                </h6>
                <ul>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                    <li className="py-2 text-sm">Careers</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-400">
                    Legal
                </h6>
                <ul>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;