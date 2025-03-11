import React from 'react'
import { toast } from 'react-toastify'
const Notify = ({ status, text }) => {

    if (status) {
        toast.success(text)
    } else {
        toast.error(text)
    }

}

export { Notify }
