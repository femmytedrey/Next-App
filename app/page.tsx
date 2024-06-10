import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href='blog'>Blog</Link>
      <Link href='product'>Product</Link>
    </>
  );
};

export default page;