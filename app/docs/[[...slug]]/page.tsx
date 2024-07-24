export default function Docs({ params }: { params: { slug: string[] } }) {
  console.log(params.slug);
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs feature for {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs feature for {params.slug[0]}</h1>;
  }
  return <h1>Docs homepage</h1>;
}
