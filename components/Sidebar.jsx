import React from "react";

const Sidebar = () => {
    return (
        <div className="h-screen bg-black text-white w-42">

            <div className="py-4 px-2">
                <h1 className="text-3xl font-bold uppercase">Categories</h1>
            </div>

            <nav className="mt-8">

                <ul className="space-y-2">

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                            Button 1
                        </a>
                    </li>



                    

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
