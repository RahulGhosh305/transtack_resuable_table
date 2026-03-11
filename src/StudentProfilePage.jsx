import { useState } from "react";

const tabs = ["Info", "Academics", "Attendance", "Parents"];

export default function StudentProfilePage() {
    const [activeTab, setActiveTab] = useState("Info");

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
            <div className="bg-white w-full rounded-2xl shadow p-6">

                {/* Title */}
                <h2 className="text-lg font-semibold mb-6">Profile</h2>

                {/* Profile Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-lg">
                        AB
                    </div>

                    <h3 className="mt-3 text-lg font-semibold">Ama Boateng</h3>
                    <p className="text-sm text-gray-500">STD-GH-4421</p>

                    <span className="mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Active
                    </span>
                </div>

                {/* Tabs */}
                <div className="flex bg-gray-100 rounded-lg mt-6 overflow-hidden text-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2 font-medium transition ${activeTab === tab
                                ? "bg-white shadow border border-gray-300 text-gray-900"
                                : "text-gray-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* INFO TAB */}
                {activeTab === "Info" && (
                    <div className="space-y-4 mt-6">

                        {/* Personal Information */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h4 className="font-semibold mb-4">Personal Information</h4>

                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <Info label="Full Name" value="Ama Boateng" />
                                <Info label="Student ID" value="STD-GH-4421" />
                                <Info label="Class" value="Grade 3" />
                                <Info label="Gender" value="Female" />
                                <Info label="Date of Birth" value="14/11/2015" />
                                <Info label="Admission Date" value="02/09/2022" />
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h4 className="font-semibold mb-4">Emergency Contact</h4>

                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <Info label="Contact Name" value="Mr. and Mrs. Boateng" />
                                <Info label="Phone" value="+233 24 555 7890" />
                                <Info label="Relationship" value="Parent" />
                            </div>
                        </div>

                        {/* Health Information */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h4 className="font-semibold mb-4">Health Information</h4>

                            <div className="space-y-3 text-sm">
                                <Info label="Allergies" value="None" />
                                <Info label="Medications" value="None" />
                                <Info label="Medical Notes" value="No special medical conditions" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Tabs Placeholder */}
                {activeTab === "Academics" && (
                    <div className="mt-6 text-center text-gray-500">
                        No Data Available
                    </div>
                )}

                {activeTab === "Attendance" && (
                    <div className="mt-6 text-center text-gray-500">
                        No Data Available
                    </div>
                )}

                {activeTab === "Parents" && (
                    <div className="mt-6 text-center text-gray-500">
                        No Data Available
                    </div>
                )}
            </div>
        </div>
    );
}

function Info({ label, value }) {
    return (
        <div>
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    );
}