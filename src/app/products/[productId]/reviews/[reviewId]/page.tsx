import React from 'react'
type Props = {
    params: {
        productId: string
        reviewId: string
    }
}
const SingleReviewPage = ({params}: Props) => {
    console.log(params.reviewId)
  return (
    <div>
      Product id is: {params.productId} <br />
      Review Id is: {params.reviewId}
    </div>
  )
}

export default SingleReviewPage
