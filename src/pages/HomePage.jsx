import Header from '../components/Header'
import bgImg from '../img/heroSectionImg/undraw_empty_cart_co35.png'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import ProductsShowForMen from '../components/ProductsShowForMen'
import ProductsShowForWomen from '../components/ProductsShowForWomen'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <>
            <section className='max-w-full sm:max-w-[90%] mx-auto'>
                <Header />

                {/* Hero Section */}
                <section className=' text-center sm:text-start flex-col md:flex-row flex justify-between items-center p-6'>
                    <div className='p-0 sm:pr-20'>
                        <h1 className='font-extrabold text-2xl md:text-3xl'>ORIGINAL AND CLONE PERFUME STORE</h1>
                        <p className='my-5 text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perferendis sapiente quam iusto totam cupiditate nobis inventore est, mollitia veritatis? Quaerat esse magni autem porro deserunt ad et voluptatum enim!</p>
                        <div className='flex gap-3 items-center'>
                            <button className='py-1 px-6 md:py-2 md:px-11 bg-green-500 rounded-md cursor-pointer text-white transition-all duration-300 hover:bg-green-600 line-clamp-1 text-ellipsis whitespace-nowrap flex items-center justify-center gap-2'>
                                View All Pages <FaArrowRight />
                            </button>
                            <button className='py-1 px-6 md:py-2 md:px-11 bg-gray-200 rounded-md cursor-pointer transition-all duration-300 hover:bg-gray-300'>Documentation</button>
                        </div>
                    </div>

                    <div className='max-w-[50%]'>
                        <img src={bgImg} alt="undraw_empty_cart_co35" className='max-w-full h-auto' />
                    </div>
                </section>

                {/* Some Product Show */}
                <div>
                    <h1 className='font-bold pl-9 py-3 text-white my-5 text-2xl bg-info'>For men</h1>
                    <ProductsShowForMen limit={4} />
                    <h1 className='font-bold pl-9 py-3 text-white my-5 text-2xl bg-info'>For women</h1>
                    <ProductsShowForWomen limit={4} />
                </div>

                <div>
                    <a href="/product">
                        <button className="btn btn-outline btn-primary block mx-auto my-9">MORE PRODUCTS</button>
                    </a>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default HomePage