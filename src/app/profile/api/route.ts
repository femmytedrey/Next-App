import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //first approach to get headers
  const requestHeaders = new Headers(request.headers);

  //second approach to get headers
  const headerList = headers();

  //getting cookie first approach
  const theme = request.cookies.get("theme");

  cookies().set("resultPerPage", "10");

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(theme);
  //getting cookie second approach
  console.log(cookies().get("resultPerPage"))
  return new Response("<h1>Profile api data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
