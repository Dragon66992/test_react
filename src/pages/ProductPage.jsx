import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsShowForMen from '../components/ProductsShowForMen'
import ProductsShowForWomen from '../components/ProductsShowForWomen'

function ProductPage() {
  return (
    <>
      <section className='max-w-full sm:max-w-[90%] mx-auto'>
        <Header />

        <div className='p-3 text-black'>
          <p>
            Perfume products are crafted to create a unique sensory experience by blending various fragrant ingredients, both natural and synthetic. A perfume's composition is typically divided into three key layers: top, middle, and base notes. The top notes are the first scents you experience, offering a fresh and fleeting fragrance that quickly fades. The middle or heart notes develop as the top notes dissipate, forming the essence of the fragrance and lasting longer.
          </p>
        </div>

        <div>
          <h1 className='text-2xl text-center my-5 p-3 bg-success font-semibold text-white italic'>FOR MEN</h1>
          <ProductsShowForMen />
        </div>

        <div>
          <h1 className='text-2xl text-center my-5 p-3 bg-success font-semibold text-white italic'>FOR WOMEN</h1>
          <ProductsShowForWomen />
        </div>

      </section >

      <Footer />
    </>
  )
}

export default ProductPage