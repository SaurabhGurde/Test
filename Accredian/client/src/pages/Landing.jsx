import React, { useState } from 'react';
import FormModal from '../component/FormModal';
import axios from 'axios';
import { toast } from 'react-toastify'

const Landing = () => {

    const [open, setOpen] = useState(false)
    const onSubmit = async(data) =>  {
        try {
            let res = await axios.post(process.env.REACT_APP_BASE_URL+ '/adddata', data)
            setOpen(false)
            toast.success("Invitation for refer send !!", {
                position: "top-center"
              });
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error, {
                position: "top-center"
              });
        }
        
      
    }
    return (
        <React.Fragment>
            <nav >
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://s3-alpha-sig.figma.com/img/0815/78d9/872c740534629bce867325cd8ecbc7df?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmdChUcyt3JgYBuC3GWhV8p~YZmhQOmkRuIkjUkblCoKPx8hIga4-kK4D82DjlhS7SviFpGbVQuTteR07v84lXPbXySFAoJyXOKcPN9B4QBkLT69TnJThel12JfH0j74f3ZXoJ4geZaEQNyjF4KHupZrA3fJqSke-ayVQwUi8UD8NxNUqxcfBllawri9GbQKurn3-hrb0qNNVOylGO10VfJQxOkYWvkbdXdIHNgIxTtDgfm8r0QijuSnqVTuc8XEO8Uik91WYsE2o86Hg1-qG-t1KNS1QVs8Op-upfTSjzGciInz7uv8m~q15MwOnUhhZVdCxSNuh7dMup5pJp2PtA__" alt="Your Company" />
                            </div>
                            <div className="flex ml-6 justify-between flex-1">
                                <div onClick={()=>setOpen(true)} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white cursor-pointer">Refer And Earn</div>
                                <div className="flex space-x-4"> 
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>  
                            </button>

                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3">
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Refer And Earn</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>
                </div>
            </nav>
            <div className='w-[100vw] flex justify-center mt-5'>
                <img src='assets/LetsEarn.jpg' alt='Lets Earn'/>
            </div>
            <div>
                <FormModal
                onSubmit={onSubmit}
                  open={open}
                  onClose={()=>setOpen(!open)}
                />
            </div>
        </React.Fragment>
    )
}

export default Landing