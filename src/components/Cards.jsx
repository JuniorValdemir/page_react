import React from "react";
import Single from "./assets/img/single.png"
import Double from "./assets/img/double.png"
import Triple from "./assets/img/triple.png"


function Cards() {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-2rem] bg-white" src={Single} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00ff7f] w-[200px] rounded-md mx-auto font-medium my-6 mx-4 m:mx-0 py-3 text-black">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 bg-gray-100 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-2rem] bg-white" src={Double} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
                    <p className="text-center text-4xl font-bold">$199</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                        <p className="py-2 border-b mx-8">3 Users Allowed</p>
                        <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                    </div>
                    <button className="bg-black text-[#00ff7f] w-[200px] rounded-md mx-auto font-medium my-6 mx-4 m:mx-0 py-3">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-2rem] bg-white" src={Triple} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
                    <p className="text-center text-4xl font-bold">$299</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
                        <p className="py-2 border-b mx-8">10 users Allowed</p>
                        <p className="py-2 border-b mx-8">Send up to 20 GB</p>
                    </div>
                    <button className="bg-[#00ff7f] w-[200px] rounded-md mx-auto font-medium my-6 mx-4 m:mx-0 py-3 text-black">Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;