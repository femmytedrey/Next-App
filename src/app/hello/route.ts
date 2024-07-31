// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest) {
//   return NextResponse.json({ message: 'Welcome user' }, { status: 200 });
// }

export async function GET(){
    return new Response('Hello World!!')
}