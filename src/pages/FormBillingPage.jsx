import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../../data/products.jsx'

function FormBillingPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null);
  const [Qty, setQty] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    const foundProduct = productsData.products1.find((item) => item.id === parseInt(id)) ||
      productsData.products2.find((item) => item.id === parseInt(id))
    console.log(foundProduct);
    setProduct(foundProduct || null);
  }, [id])

  const handleGetQty = (e) => {
    setQty(e.target.value ? parseInt(e.target.value) : 0);
  }
  const totalPrice = product && product.prices && Qty > 0 ? product.prices * Qty : 0;

  const handleGetName = (e) => {
    setName(e.target.value);
  }

  const handleGetEmail = (e) => {
    setEmail(e.target.value) ;
  }

  const handleGetPhoneNumber = (e) => {
    setPhoneNumber(e.target.value) ;
  }

  const handleGetAddress = (e) => {
    setAddress(e.target.value) ;
  }

  const hanldSubmit = (e) => {
    e.preventDefault();
    setIsClick(true)
  }

  const handleCancel = () => {
    isClick(false) ;
  }

  return (
    <>
      <section >
        {
          product ? (
            <>
              {/* Confirm Card*/}
              <div className={` ${isClick ? "block" : "hidden"}`}>
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <div className="bg-white p-6 rounded shadow-md w-[500px] text-center">
                    <h2 className="text-xl font-bold mb-4">Check You Billing Information?</h2>
                    <div className='text-xl font-semibold'>
                      <h3>Product Name: {product.name}</h3>
                      <h3>Unit_Price: ${product.prices.toFixed(2)}</h3>
                    </div>
                    <div className='text-xl'>
                      <p>Name: {name}</p>
                      <p>Email: {email}</p>
                      <p>Phone number: {phoneNumber}</p>
                      <p>Address: {address}</p>
                      <p className='font-bold'>Total Price: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="text-gray-600 mb-6 font-black">Do you want to pay now?</p>
                    <div className="flex justify-around">
                      <Link to='/reciep'>
                        <button className="btn btn-primary">Confirm</button>
                      </Link>
                      <Link onClick={handleCancel}>
                        <button className="btn btn-secondary">Cancel</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-96">
                  <h2 className="text-2xl font-bold mb-6 text-center">Billing Form</h2>
                  <form className="space-y-4" onSubmit={hanldSubmit}>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        onChange={handleGetName}
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        onChange={handleGetEmail}
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone number</label>
                      <input
                        onChange={handleGetPhoneNumber}
                        type="text"
                        placeholder="Enter your phone number"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Address</label>
                      <input
                        onChange={handleGetAddress}
                        type="text"
                        placeholder="Enter your address"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                      <input
                        onChange={handleGetQty}
                        type="number"
                        min="1"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="text-gray-800 font-medium">
                      Total Price: $ {totalPrice}
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h1>Loading product details or product not found...</h1>
            </div>
          )
        }
      </section>
    </>
  );
}

export default FormBillingPage;
