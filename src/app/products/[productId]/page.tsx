import React from 'react'
type Props = {
    params: {
        productId: string
    }
}
const SingleProductPage = ({params}: Props) => {
    console.log(params.productId)
  return (
    <div>
      Single product page id is: {params.productId}
    </div>
  )
}

export default SingleProductPage
