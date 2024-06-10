import { Metadata } from "next";

type MessageProps = {
  message: string;
};

// type ProductIdProps = {
//   params: { productId: string };
// } & MessageProps;

export const generateMetadata = async ({params}: {params: {productId: string}}): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {resolve(`iPhone ${params.productId}`)}, 100)
  })
  return {
    title: `Product ${title}`
  }
}



export default function ProductId({ params }: { params: { productId: string } }) {
  let message;
  switch (params.productId) {
    case "1":
      message = 'Toyota';
      break;
    case "2":
      message = 'Corrolla';
      break;
    case "3":
      message = 'Mazda';
      break;
    default:
      message = 'Product not found'
      break;
  }
  return (
    <>
      <h1>Product Details {params.productId}</h1>
      <h2>This is details for {params.productId}: {message}</h2>
    </>
  );
}
