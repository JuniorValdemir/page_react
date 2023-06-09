import React from "react";

function Newsletter() {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-xl">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p className="my-4 p-2">
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                    <button className="bg-[#00ff7f] w-[200px] rounded-md font-medium my-6 mx-4 m:mx-0 py-3 text-black">Notify Me</button>
                </div>
                <p>
                    We care bout the protection of your data. Read our 
                    <br />
                    <span className="text-[#00ff7f]">
                        Privacy Policy.
                    </span>
                </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;