import React from 'react'
import Header from '../components/Header'
import img1 from '../img/heroSectionImg/undraw_Order_confirmed_re_g0if.png'

function ReciepPages() {
    return (
        <>
            <section className='max-w-full sm:max-w-[90%] mx-auto'>
                <Header />

                <section class="bg-white dark:bg-gray-900">
                    <div class="container px-6 py-10 mx-auto">
                        <div class="lg:-mx-6 lg:flex lg:items-center">
                            <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={img1} alt="" />

                            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                                <p class="text-5xl font-semibold text-blue-500 ">“</p>

                                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                    Thank You For Your Purchasing!
                                </h1>

                                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                                    “ Thank you so much for choosing to shop with us at Original and Clone Perfume Store! We are thrilled that you selected one of our fragrances, and we hope it brings you the perfect scent experience. ”
                                </p>

                                <h3 class="mt-6 text-lg font-medium text-blue-500">What we will do</h3>
                                <p class="text-gray-600 dark:text-gray-300">We will contact to you as soon as we can. Additionally, you can contact us by phone number: 2356 8909 8999, if you want to change some billing information!!!</p>

                                <div className='w-[250px] my-5 flex items-center'>
                                    <h2>Scan to pay : </h2>
                                    <svg width="150px" height="150px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9h6V3H3zm1-5h4v4H4zm1 1h2v2H5zm10 4h6V3h-6zm1-5h4v4h-4zm1 1h2v2h-2zM3 21h6v-6H3zm1-5h4v4H4zm1 1h2v2H5zm15 2h1v2h-2v-3h1zm0-3h1v1h-1zm0-1v1h-1v-1zm-10 2h1v4h-1v-4zm-4-7v2H4v-1H3v-1h3zm4-3h1v1h-1zm3-3v2h-1V3h2v1zm-3 0h1v1h-1zm10 8h1v2h-2v-1h1zm-1-2v1h-2v2h-2v-1h1v-2h3zm-7 4h-1v-1h-1v-1h2v2zm6 2h1v1h-1zm2-5v1h-1v-1zm-9 3v1h-1v-1zm6 5h1v2h-2v-2zm-3 0h1v1h-1v1h-2v-1h1v-1zm0-1v-1h2v1zm0-5h1v3h-1v1h-1v1h-1v-2h-1v-1h3v-1h-1v-1zm-9 0v1H4v-1zm12 4h-1v-1h1zm1-2h-2v-1h2zM8 10h1v1H8v1h1v2H8v-1H7v1H6v-2h1v-2zm3 0V8h3v3h-2v-1h1V9h-1v1zm0-4h1v1h-1zm-1 4h1v1h-1zm3-3V6h1v1z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}

export default ReciepPages