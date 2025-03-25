import React from 'react'
import { MdDone } from "react-icons/md";
function Spinner() {
    return (
        <div>
            <dialog id="spinnerModal" className="modal rounded-md">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                    </form>
                    <div className='p-10 flex flex-col justify-center items-center gap-2'>
                        <div className="loaderContainer">
                            <div className="loader"></div>
                        </div>
                        <p className='text-center text-lg font-semibold'>Please Wait redirecting to order page</p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Spinner