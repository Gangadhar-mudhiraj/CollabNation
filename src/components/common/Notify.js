import { toast } from "react-toastify";

function SuccessNotify(text) {
    // text in center for all
    toast.success(text ? text : "Success!", {
        className: "bg-white text-green-800 text-sm font-bold shadow-md",
        bodyClassName: "flex justify-center items-center",
        progressClassName: "bg-green-800"
    })
}


function FailureNotify(text) {
    toast.error(text ? text : "Failed!", {
        className: "bg-white text-red-800 text-sm font-bold shadow-md",
        bodyClassName: "flex justify-center items-center",
        progressClassName: "bg-red-800"
    })
}

function Notify(text) {
    toast(text ? text : "Done!", {
        className: "bg-white text-gray-800 text-sm font-bold shadow-md text-center",
        bodyClassName: "flex justify-center items-center ",
        progressClassName: "bg-gray-600"
    })
}

export { SuccessNotify, FailureNotify, Notify }