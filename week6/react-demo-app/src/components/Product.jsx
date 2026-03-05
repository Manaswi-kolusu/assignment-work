import {useLocation, useParams} from 'react-router'
import {useEffect, useState} from 'react'

function Product() {
    const { id } = useParams()
    const { state } = useLocation()

    const [prod, setProd] = useState(state?.product || null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // if no product passed via state, fetch by id
    useEffect(() => {
      if (!prod && id) {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(res => {
            if (!res.ok) throw new Error('Failed to load product')
            return res.json()
          })
          .then(data => setProd(data))
          .catch(err => setError(err))
          .finally(() => setLoading(false))
      }
    }, [id, prod])

    if (loading) {
      return <p className="text-center text-2xl text-blue-300">Loading...</p>
    }

    if (error) {
      return <p className="text-center text-2xl text-red-500">{error.message}</p>
    }

    if (!prod) {
      return (
        <div className="mt-14 text-center">
          <h2 className="text-2xl">No product found</h2>
          <p>Please choose a product from the <a href="/products" className="text-blue-600 underline">product list</a>.</p>
        </div>
      )
    }

  return (
    <div className='flex flex-col sm:flex-row justify-between mt-14'>
        <div className='w-2/5'>
            <img src={prod.image} className='w-96' alt="" />
        </div>
        <div className='w-3/5 p-2 sm:p-10'>
            <p className='text-2xl mb-10'>{prod.title}</p>
            <p className='mb-10'>{prod.description}</p>
            <p className='text-3xl mb-10'>{prod.price}</p>
            <p className='text-2xl mb-10'>{prod.category}</p>
        </div>
    </div>
  )
}

export default Product