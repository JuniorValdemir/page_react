import React from "react";
import Laptop from "./assets/img/laptop.jpg";

function Analytics() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00ff7f] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p className="">
                    A data dashboard is an information management tool that visually tracks,
                    analyses and displays key performance indicators (KPI), metrics and key data
                    points to monitor the health of a business, department or specific process. 
                    They are customisable to meet the specific needs of a department and company.
                    </p>
                    <button className="bg-black text-[#00ff7f] w-[200px] rounded-md font-medium my-6 mx-auto m:mx-0 py-3">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;