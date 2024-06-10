import { notFound } from "next/navigation";

export type ReviewProps = {
  params: {
    reviewId: string;
    productId: string;
  };
};
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
