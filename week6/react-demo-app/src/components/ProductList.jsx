import {useEffect,useState} from 'react'
import { Link } from 'react-router'

function ProductList() {

  let [product,setProducts] = useState([])
  let [loading,setLoading]=useState(false)
  let [error,setError] = useState(null)
  useEffect(()=>
    {
    setLoading(true)
    async function getProducts() {
        try
        {
        let res = await fetch("https://fakestoreapi.com/products")
        if(res.status === 200)
        {
          // Extract Data
          let products = await res.json()
          // Update State
          setProducts(products)
        }
        else
        {
          throw new Error("Failed to Fetch")
        }
      }
      catch(err)
      {
        setError(err)
      }
      finally
      {
        setLoading(false)
      }

    }
    getProducts()
    },[])
    
    if(loading===true)
    {
      return <p className='text-center text-2xl text-blue-300'>Loading...</p>
    }
    if(error!==null)
    {
      return <p className='text-center text-2xl text-red-500'>{error.message}</p>
    }
    
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
      {product.map((prodObj)=>(
        <div key ={prodObj.id} className='shadow-md p-10 rounded-2xl'>
          <Link
            to={`/products/${prodObj.id}`}
            state={{ product: prodObj }}
          >
            <img
              src={prodObj.image}
              className="h-44 object-contain block mx-auto mb-10"
              alt=""
            />
            <p>{prodObj.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductList