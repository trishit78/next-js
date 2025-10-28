import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    // const req = new Headers(request.headers);
    // console.log(req.get("Authorization"));

    const headersList = await headers();
    console.log(headersList.get("Authorization"));


    const theme = request.cookies.get("theme");   // cookies from the response headers
    console.log(theme);
    const cookieStore = await cookies();   // cookies from the next cookies function
    cookieStore.set("resultsPerPage","20");
    console.log(cookieStore.get("resultsPerPage"));

    return new Response("<h1>Profile API data</h1>",{
        headers:{
            'Content-Type':'text/html',
            "Set-Cookie": "theme=dark"

        }
    });
}