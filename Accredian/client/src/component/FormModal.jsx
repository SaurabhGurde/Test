import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function FormModal({ open, onClose, onSubmit }) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    return (
        <Dialog open={open} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="p-6 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <h1 className='font-bold text-center text-sky-500 text-[19px]'>Refer And Earn</h1>
                        <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='p-1 mt-5 border-[2px] border-sky-500 rounded-[8px] '
                                type="text"
                                placeholder="Name :"
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                            />
                            {errors.name && <span className='text-red-600'>{errors.name.message}</span>}

                            <input
                                className='p-1 mt-5 border-[2px] border-sky-500 rounded-[8px] '
                                type="email"
                                placeholder="Email :"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}

                            <input
                                className='p-1 mt-5 border-[2px] border-sky-500 rounded-[8px] '
                                type="number"
                                placeholder="Phone :"
                                {...register('phone', {
                                    required: 'Phone is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Phone number must be exactly 10 digits',
                                    },
                                })}
                            />
                            {errors.phone && <span className='text-red-600'>{errors.phone.message}</span>}

                            <input className='border border-sky-500 mt-5 pl-5 pr-5 pt-1 pb-1 bg-sky-400 rounded-md text-black' type="submit" />
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}