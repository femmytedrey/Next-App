"use client"
import { notFound } from "next/navigation";

function getRandomNumber(count: number) {
  return Math.floor(Math.random() * count)
}

export type ReviewProps = {
  params: {
    reviewId: string;
    productId: string;
  };
};
export default function ReviewId({ params }: ReviewProps) {
  // const random = getRandomNumber(2)

  // if(random === 1){
  //   throw new Error("Error loading review")
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <div>
        Review {params.reviewId} for product {params.productId}
      </div>
    </>
  );
}
