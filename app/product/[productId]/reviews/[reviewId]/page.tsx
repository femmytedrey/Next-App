import { notFound } from "next/navigation";

export type ReviewProps = {
  params: {
    reviewId: string;
    productId: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const random = getRandomInt(1);
console.log(random)

if (random === 0) {
  throw new Error("Error loading review");
}
export default function ReviewId({ params }: ReviewProps) {
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
