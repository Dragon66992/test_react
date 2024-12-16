import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../../data/products';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FormBillingPage from './FormBillingPage.jsx';

function ProductDetail() {
    const { id } = useParams(); // Use 'id' if the route is '/product/:id'
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // console.log('Route Parameter (id):', id); // Log the route parameter
        const foundProduct = productsData.products1.find((item) => item.id === parseInt(id)) ||
                            productsData.products2.find((item) => item.id === parseInt(id));
        console.log('Found Product:', foundProduct); // Log the found product
        // setProduct(foundProduct);
        setProduct(foundProduct || null); // Set null if no product found
    }, [id]);


    return (
        <>
            <section className='max-w-full sm:max-w-[90%] mx-auto'>
                <Header />

                <section>
                    {
                        product ? (
                            <div className="card lg:card-side bg-base-100 shadow-xl my-[15vh]">
                                <div className="card-body lg:flex-row justify-between gap-10">
                                    <div className=' lg:max-w-[50%]'>
                                        <img src={product.imgSrc} alt={product.name}  className='rounded-lg max-w-full h-[400px] mx-auto'/>
                                    </div>
                                    <div className='lg:max-w-[50%]'>
                                        <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                                        <p className='my-8 h-[190px] overflow-y-auto'>{product.description}</p>
                                        <p className='text-end h-[50px] text-xl italic text-red-500'>${product.prices}.00</p>
                                        <div className="card-actions justify-end ">
                                            <Link to={`/formbilling/${id}`} element={<FormBillingPage />}>
                                                <button className="btn btn-primary px-20">Buy</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1>Loading product details or product not found...</h1>
                            </div>
                        )
                    }
                </section>

            </section>

            <Footer />
        </>
    );
}

export default ProductDetail;