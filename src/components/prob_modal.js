import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Modal.css";

Modal.setAppElement("#root");

export default function ProbModal() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div className="App text-white mt-8">
            <button onClick={() => setIsOpen(true)}>Read more</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                }}
                closeTimeoutMS={500}
            >
                <div className="flex flex-col w-full mx-4 items-center justify-between h-full text-white">
                    <div className="mt-4 w-full">
                        <div className="flex flex-row justify-between">
                            <span>title</span>
                            <span className="">
                                <button onClick={() => setIsOpen(false)} className="bg-red-500 border-brochblack border-2 w-4 h-4 rounded-full mb-4"></button>
                            </span>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="flex justify-center items-start h-full my-4">title</div>
                    <div className="mb-4 w-full">
                        <hr></hr>
                        <div className="flex flex-row flex-wrap justify-end">

                            <button onClick={() => setIsOpen(false)} className="border-2 w-fit bg-red-400 px-2 mt-4 border-brochblack text-brochblack rounded-sm">Close</button>
                            <button onClick={() => setIsOpen(false)} className="border-2 ml-4 w-fit bg-green-600 border-gray-700 text-gray-700 px-2 mt-4 rounded-sm">Agree</button>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
}
