import React from 'react';

function Cards({title, subtitle, icon, fun}) {
    function declencheur(){
        fun()
    }
    return (
        <>
            <div className=" m-32 flex flex-col items-center bg-white shadow-2xl bg-green-500 rounded-lg p-4 w-72 mt-1.5 mr-1.5">
                <div className="flex items-center space-x-4">
                    <div className="h-14 w-14 bg-gray-200 rounded-full flex flex-shrink-0 justify-center items-center text-gray-500 text-2xl font-medium">
                        {icon}
                    </div>
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                        <h2 className="leading-relaxed">{title}</h2>
                        <p className="text-sm text-gray-500 font-normal leading-relaxed">{subtitle}</p>
                    </div>
                </div>
            </div>
 <button onClick={declencheur}>clic moi </button>

        </>
    );
}

export default Cards;