'use client'
import React, { useRef } from 'react'
import Image, { StaticImageData } from "next/image"

interface ModalProps {
    title: string;
    image: StaticImageData;
}

const Modal = ({ title, image }: ModalProps) => {

    const modelRef = useRef<HTMLDialogElement>(null);

  return (
    <div>
        <div 
            className="flex flex-col items-center gap-4 cursor-pointer px-8 py-6 rounded-xl bg-base-200 border border-base-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:animate-wiggle"
            onClick={() => modelRef.current?.showModal()}
        >
            <Image src={image} width={150} height={195} alt="Profile picture" />
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        
        {/* Modal */}
        <dialog ref={modelRef} className="modal py-5">
            <div className="modal-box w-11/12 max-w-7xl h-full">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost btn-accent absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        <style jsx>{`
            @keyframes wiggle {
                0% { transform: rotate(0deg); }
                25% { transform: rotate(-5deg); }
                50% { transform: rotate(5deg); }
                75% { transform: rotate(-5deg); }
                100% { transform: rotate(0deg); }
            }
            .hover\:animate-wiggle:hover {
                animation: wiggle 0.5s ease-in-out;
            }
        `}</style>
    </div>
  )
}

export default Modal