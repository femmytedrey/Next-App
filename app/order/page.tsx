"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing order");
    // router.replace("/");
    router.push('/')
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick} className="py-2 px-4 bg-teal-500 rounded-xl text-white">Place Order</button>
    </>
  );
}
