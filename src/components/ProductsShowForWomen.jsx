import React from 'react'
import p2 from '../../data/products'
import { Link } from 'react-router-dom';

function ProductsShowForWomen({limit}) {
    const limitedProducts = p2.products2.slice(0, limit) ;
    return (
        <>
            <section className='grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-11'>
                {
                    limitedProducts.map((item, index) => {
                        return (
                            <div key={item.id} className="card glass rounded-md max-w-80">
                                <div className="card-body p-3">
                                    <div className='overflow-hidden rounded-md'>
                                        <img src={item.imgSrc} alt={`p${index + 1}`} className='rounded-md h-[280px]' />
                                    </div>
                                    <h2 className="card-title">{item.name}</h2>
                                    <p className='line-clamp-2 text-ellipsis'>{item.detail}</p>
                                    <p>${item.prices.toFixed(2)}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/product/${item.id}`} >
                                            <button className="btn btn-primary">Learn now!</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default ProductsShowForWomen