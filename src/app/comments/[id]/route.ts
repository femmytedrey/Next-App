//import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // if (parseInt(params.id) > comments.length) {
  //   redirect('/comments');
  // };
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (comment) {
    return Response.json(comment);
  } else {
    return new Response(JSON.stringify({ error: "Comment does not exist" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json();
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  //console.log(index, 'My index')
  if (index !== -1) {
    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const index = comments.findIndex((comment) => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    return new Response(null, { status: 204 });
  } else {
    return new Response(JSON.stringify({ error: "No comment to delete" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}
