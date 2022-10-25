import React from 'react'

import Arrow from "../assets/images/icons8-arrow-100.png"
import Quotes from "../assets/images/icons8-get-quote-96.png"
import img_02 from "../assets/images/img_02.jpg"
import img_01 from "../assets/images/img_01.jpg"
import Logo from "../assets/images/logo.png"
import LogoGrey from "../assets/images/logo-grey.png"
import JF17A from "../assets/images/JF17A.jpg"
import Testimonials02 from "../assets/images/testimonials02.jpg"
import Author04 from "../assets/images/author04.jpg"
import Facebook from "../assets/svg/facebook.svg"
import Instagram from "../assets/svg/instagram.svg"
import WhatsApp from "../assets/svg/whatsapp.svg"
import Youtube from "../assets/svg/youtube.svg"


function Landing() {
  return (
    <div className="font-RobotoSlab">
        <div className="fixed w-full z-20 bg-[#212529] text-white">
            <header className="font-RobotoSlab flex justify-between py-5 px-28 h-fit">
                <div className="">
                    <img src={Logo} alt="logo" className="w-fit h-10"/>
                </div>
                <nav className="">
                    <ul className="flex space-x-10 font-semibold">
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">Home</li>
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">Homeblocks</li>
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">Services</li>
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">Pages</li>
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">News</li>
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">Contacts</li>
                        <li className="hover:border-b-4 border-[#ff6162] px-2 pb-1 cursor-pointer duration-150 transition-all">Features</li>
                    </ul>

                </nav>
                
            </header>
        </div>
        <section className="bg-white">
            <div className="relative">
                <div className="absolu inset-0 ">
                    <img src={JF17A} alt="carousel" className="h-screen w-full object-cover"/>
                    <div className="mx-28">
                        <div className="bg-gradient-to-r blue-500 py-10 px-16 -translate-y-1/2 from-purple-300 via-purple-500 to-blue-700">
                            <div className="flex justify-between  items-center">
                                <h3 className="font-SourceSansPro text-3xl leading-normal capitalize font-semibold text-white">
                                    Ensure your business <br/> contuinity & Service levels
                                </h3>
                                <button className="flex space-x-10 items-center py-3 px-8 text-lg font-medium text-white rounded-[28px] border-white border hover:bg-white hover:text-blue-700">
                                    <span>Discover more</span>
                                    <img src={Arrow} alt="arrow" className="w-10 h-10"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-white">
            <div className="max-w-screen-xl px4 pb-8 mx-auto lg:py-24 relative px-28">
                <div className="flex space-x-28 relative">
                    <div className="w-1/2 text-justify shrink-0">
                        <h6 className="uppercase font-medium text-[#ff6162] font-RobotoMono">About call center</h6>
                        <p className="text-3xl font-semibold mt-3">World-Class <br/>Contact Center</p>
                        <p className="mt-8 leading-normal text-lg text-gray-500">Our agents are fully bilingual, bi-cultural, well educated and have expertise in a wide array of business functions such as Debt Collection, Customer Service.</p>
                        <div className="mt-8 space-y-6 uppercase text-xl font-light font-RobotoMono">
                            <div>
                                <div className="flex justify-between">
                                    <h6 className="">customer service</h6>
                                    <span>55%</span>
                                </div>
                                <div className="flex bg-gray-100 rounded-lg h-2 mt-2">
                                    <span className="w-[55%] bg-blue-500"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <h6 className="">SALES / LEAD GENERATION</h6>
                                    <span>32%</span>
                                </div>
                                <div className="flex bg-gray-100 rounded-lg h-2 mt-2">
                                    <span className="w-[32%] bg-[#ff6162]"/>
                                </div>
                            </div>
                        </div>
                        <button className="flex space-x-6 items-center py-3 px-8 text-lg font-medium text-white rounded-[48px] border-white border bg-blue-400 mt-10 hover:bg-white hover:text-blue-500 hover:border-blue-500 font-RobotoMono">
                            <span>Learn more</span>
                            <img src={Arrow} alt="arrow" className="w-10 h-10"/>
                        </button>
                    </div>
                    <div className="">
                        <div>
                            <div className="flex">
                                <img src={img_02} alt="" className="absolute z-10"/>
                                <img src={img_01} alt="" className="absolute -right-28 -top-28 hover:-right-36 transition-all duration-300"/>
                            </div>
                            {/* <div className="absolute -right-28 -top-20 hover:-right-32 transition-all duration-300">
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>

        </section>
        <section className="bg-gray-50">
            <div className="max-w-screen-xl px4 pb-8 mx-auto lg:py-24 relative px-28">
                <h6 className="uppercase font-medium text-[#ff6162] font-RobotoMono">FOUR EASY STEPS</h6>
                <p className="text-3xl font-semibold mt-3">How To Get <br/>Started</p>
                <div className="mt-8">
                    <div className="flex justify-between">
                        <div className="w-full space-y-4">
                            <h3 className="font-semibold text-lg font-SourceSansPro">Setup Your <br/>Campaign</h3>
                            <div className="flex items-center">
                                <button className="text-lg font-light text-white rounded-full bg-blue-500 px-3 py-1.5 w-fit h-fit font-RobotoMono">01</button>
                                <span className="h-0.5 bg-blue-500 w-full"/>
                            </div>
                            <p className="leading-normal text-lg text-gray-500 font-light mr-8">Name your Campaign and choose your country</p>
                        </div>
                        <div className="w-full space-y-4">
                            <h3 className="font-semibold text-lg font-SourceSansPro">Get a Tracking <br/>Number</h3>
                            <div className="flex items-center">
                                <button className="text-lg font-light text-white rounded-full bg-blue-500 px-3 py-1.5 w-fit h-fit font-RobotoMono">02</button>
                                <span className="h-0.5 bg-blue-500 w-full"/>
                            </div>
                            <p className="leading-normal text-lg text-gray-500 font-light mr-8">Get a unique Tracking Number where you can send calls</p>
                        </div>
                        <div className="w-full space-y-4">
                            <h3 className="font-semibold text-lg font-SourceSansPro">Add a Target <br/>Line</h3>
                            <div className="flex items-center">
                                <button className="text-lg font-light text-white rounded-full bg-blue-500 px-3 py-1.5 w-fit h-fit font-RobotoMono">03</button>
                                <span className="h-0.5 bg-blue-500 w-full"/>
                            </div>
                            <p className="leading-normal text-lg text-gray-500 font-light mr-8">Forward your calls to buyers or anywhere you'd like them to go</p>
                        </div>
                        <div className="w-full space-y-4">
                            <h3 className="font-semibold text-lg font-SourceSansPro">Launch Your <br/>Campaign</h3>
                            <div className="flex items-center">
                                <button className="text-lg font-light text-white rounded-full bg-blue-500 px-3 py-1.5 w-fit h-fit font-RobotoMono">04</button>
                                <span className="h-0.5 bg-blue-500 w-full"/>
                            </div>
                            <p className="leading-normal text-lg text-gray-500 font-light mr-8">Test your Tracking Number to see operate in the real-time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-white">
            <div className="max-w-screen-xl px4 pb-8 mx-auto lg:py-24 relative px-28">
                <div className="grid grid-cols-3 place-items-center gap-6">
                    <div className="">
                        <h6 className="uppercase font-medium text-[#ff6162] font-RobotoMono">OUR EXPERTISE</h6>
                        <p className="text-3xl font-semibold mt-3">Some Of The <br/>Services We Offer</p>
                        <p className="mt-8 leading-normal text-lg text-gray-500">Call Center Services International's management team has over 35-years of expertise in successfully establishing U.S.</p>
                        <button className="flex space-x-6 items-center py-3 px-8 text-lg font-medium text-white rounded-[48px] border-white border bg-blue-400 mt-10 hover:bg-white hover:text-blue-500 hover:border-blue-500 font-RobotoMono">
                            <span>View more</span>
                            <img src={Arrow} alt="arrow" className="w-10 h-10"/>
                        </button>
                    </div>
                    {/* <div className="col-span-2 grid grid-cols-2 gap-6"> */}
                    <div className="mt-14 space-y-6 font-RobotoCondensed">
                        <div className="bg-white h-fit px-8 shadow-sm py-20 hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white text-gray-500 hover:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_205_30)">
                                    <path d="M32.0884 26.9826L31.8022 28.2985C31.5332 29.5321 30.3528 30.3345 29.0443 30.1737L26.438 29.8528C25.3035 29.7126 24.3548 28.8785 24.0932 27.7915L23.3665 24.7634C22.1859 24.2428 20.8768 23.9853 19.4399 23.9899C18.0561 23.9831 16.685 24.254 15.4078 24.7867L14.8358 27.5894C14.6183 28.6504 13.7163 29.4235 12.5995 29.5055L9.9959 29.6996C8.69606 29.7956 7.47587 28.9384 7.13985 27.6941L6.77923 26.3613C6.42095 25.0339 6.80754 23.6563 7.79517 22.7467C10.1268 20.5965 13.9445 19.5893 19.2507 19.7208C24.5649 19.8529 28.4454 21.0568 30.8874 23.3311C31.9152 24.2879 32.3729 25.6768 32.0884 26.9826Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_205_30">
                                        <rect width="28.6103" height="28.6103" fill="white" transform="translate(39.2388 14.3051) rotate(120)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h5 className="text-xl font-semibold text-[#ff6162]">Debt Collection</h5>
                            <p className="font-RobotoMono mt-4">We will allow you to establish a world-class Debt Collection</p>
                        </div>
                        <div className="bg-white h-fit px-8 shadow-sm py-20 hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white text-gray-500 hover:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_205_30)">
                                    <path d="M32.0884 26.9826L31.8022 28.2985C31.5332 29.5321 30.3528 30.3345 29.0443 30.1737L26.438 29.8528C25.3035 29.7126 24.3548 28.8785 24.0932 27.7915L23.3665 24.7634C22.1859 24.2428 20.8768 23.9853 19.4399 23.9899C18.0561 23.9831 16.685 24.254 15.4078 24.7867L14.8358 27.5894C14.6183 28.6504 13.7163 29.4235 12.5995 29.5055L9.9959 29.6996C8.69606 29.7956 7.47587 28.9384 7.13985 27.6941L6.77923 26.3613C6.42095 25.0339 6.80754 23.6563 7.79517 22.7467C10.1268 20.5965 13.9445 19.5893 19.2507 19.7208C24.5649 19.8529 28.4454 21.0568 30.8874 23.3311C31.9152 24.2879 32.3729 25.6768 32.0884 26.9826Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_205_30">
                                        <rect width="28.6103" height="28.6103" fill="white" transform="translate(39.2388 14.3051) rotate(120)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h5 className="text-xl font-semibold text-[#ff6162]">Customer Service</h5>
                            <p className="font-RobotoMono mt-4">Center with bicultural & bilingual agents</p>
                        </div>
                    </div>
                    <div className="space-y-6 font-RobotoCondensed">
                        <div className="bg-white h-fit px-8 shadow-sm py-20 hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white text-gray-500 hover:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_205_30)">
                                    <path d="M32.0884 26.9826L31.8022 28.2985C31.5332 29.5321 30.3528 30.3345 29.0443 30.1737L26.438 29.8528C25.3035 29.7126 24.3548 28.8785 24.0932 27.7915L23.3665 24.7634C22.1859 24.2428 20.8768 23.9853 19.4399 23.9899C18.0561 23.9831 16.685 24.254 15.4078 24.7867L14.8358 27.5894C14.6183 28.6504 13.7163 29.4235 12.5995 29.5055L9.9959 29.6996C8.69606 29.7956 7.47587 28.9384 7.13985 27.6941L6.77923 26.3613C6.42095 25.0339 6.80754 23.6563 7.79517 22.7467C10.1268 20.5965 13.9445 19.5893 19.2507 19.7208C24.5649 19.8529 28.4454 21.0568 30.8874 23.3311C31.9152 24.2879 32.3729 25.6768 32.0884 26.9826Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_205_30">
                                        <rect width="28.6103" height="28.6103" fill="white" transform="translate(39.2388 14.3051) rotate(120)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h5 className="text-xl font-semibold text-[#ff6162]">Lead Generation</h5>
                            <p className="font-RobotoMono mt-4">Improve direct response time, increase lead generation</p>
                        </div>
                        <div className="bg-white h-fit px-8 shadow-sm py-20 hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white text-gray-500 hover:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_205_30)">
                                    <path d="M32.0884 26.9826L31.8022 28.2985C31.5332 29.5321 30.3528 30.3345 29.0443 30.1737L26.438 29.8528C25.3035 29.7126 24.3548 28.8785 24.0932 27.7915L23.3665 24.7634C22.1859 24.2428 20.8768 23.9853 19.4399 23.9899C18.0561 23.9831 16.685 24.254 15.4078 24.7867L14.8358 27.5894C14.6183 28.6504 13.7163 29.4235 12.5995 29.5055L9.9959 29.6996C8.69606 29.7956 7.47587 28.9384 7.13985 27.6941L6.77923 26.3613C6.42095 25.0339 6.80754 23.6563 7.79517 22.7467C10.1268 20.5965 13.9445 19.5893 19.2507 19.7208C24.5649 19.8529 28.4454 21.0568 30.8874 23.3311C31.9152 24.2879 32.3729 25.6768 32.0884 26.9826Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_205_30">
                                        <rect width="28.6103" height="28.6103" fill="white" transform="translate(39.2388 14.3051) rotate(120)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h5 className="text-xl font-semibold text-[#ff6162]">IT Development</h5>
                            <p className="font-RobotoMono mt-4">We provides nearshore IT staff in Mexico</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-gradient-to-r from-rose-300 via-blue-600 to-blue-500">
            <div className="max-w-screen-xl px4 pb-8 mx-auto lg:py-24 relative px-28">
                <div className="text-center text-white mb-10">
                    <h6 className="uppercase font-medium font-RobotoMono">testimonials</h6>
                    <p className="text-3xl font-semibold mt-3 font-SourceSansPro">What people are saying about our <br/>Services</p>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="bg-white p-10 space-y-10 flex flex-col justify-between">
                        {/* <h1 className="text-5xl leading-none text-[#ff6162] text-right">"</h1> */}
                        <div className="flex justify-end">
                            <img src={Quotes} className="h-28 w-28"/>
                        </div>
                        <div>
                            <p className="text-lg font-light mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem beatae fugit tenetur reiciendis aliquam nihil</p>
                            <div className="flex space-x-4 items-center">
                                <img src={Author04} className="w-10 h-10 rounded-full"/>
                                <div>
                                    <h6 className="text-2xl font-semibold">Zola M. Powell</h6>
                                    <p className="text-lg font-light">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-white p-10 flex flex-col">
                        {/* <h1 className="text-5xl text-[#ff6162] text-right">"</h1> */}
                        <img src={Quotes} className="h-28 w-28 place-self-end"/>
                        <div className="flex space-x-4 mt-auto">
                            <img src={Testimonials02} className="w-1/2 h-full object-contain"/>
                            <div className="flex flex-col justify-between">
                                <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem beatae fugit tenetur reiciendis aliquam nihil</p>
                                <div className="">
                                    <h6 className="text-2xl font-semibold">Zola M. Powell</h6>
                                    <p className="text-lg font-light">Customer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <section className="bg-[#212529]">
            <div className="max-w-screen-xl px4 pb-8 mx-auto lg:py-24 relative px-28">
                <div className="flex text-gray-400 justify-between">
                    <img src={LogoGrey} className="w-fit h-10" alt=""/>
                    <ul className="space-y-2 ">
                        <li>Management</li>
                        <li>Contact</li>
                        <li>News</li>
                    </ul>
                    <div>
                        <h6 className="font-semibold text-white">Give Us A Call</h6>
                        <p className=''>1-800-765-4321</p>
                        <h6 className="font-semibold text-white mt-4">Email Us</h6>
                        <p className=''>info@iqcall.com</p>
                    </div>
                    <div>
                        <h6 className="font-semibold text-white ">Join Us</h6>
                        <div className="flex space-x-10">
                            <img src={Facebook} className="h-10 w-10 rounded-full border border-white p-2"/>
                            <img src={WhatsApp} className="h-10 w-10 rounded-full border border-white p-2"/>
                            <img src={Instagram} className="h-10 w-10 rounded-full border border-white p-2"/>
                            <img src={Youtube} className="h-10 w-10 rounded-full border border-white p-2"/>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Landing