import React from "react"
const Popup= () => {
return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
        <div className=" grid justify-items-center block bg-white block p-2 rounded font-bold"> Do you want to continue or create new form
            <div className="space-x-6">
                <button className="mt-2 text-white bg-blue-700 h-8 w-20 rounded font-semibold">Continue</button>
                <button className="mt-2 text-white bg-blue-700 h-8 w-20 rounded font-semibold">Continue</button>
            </div>
        </div>
    </div>
</div>
    );
}
export default Popup;