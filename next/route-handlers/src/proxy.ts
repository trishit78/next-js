import { NextResponse } from "next/server";
import { NextRequest } from "next/server";



//  cookies
export function proxy(request:NextRequest){
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    console.log(themePreference)
    if(!themePreference){
        response.cookies.set("theme","dark");
    }
    response.headers.set("custom-header","custom-value");
    return response;
}



//type 2
// export function proxy(request:NextRequest){
//     if(request.nextUrl.pathname === "/profile"){
//         return NextResponse.rewrite(new URL("/comments/2",request.nextUrl));
//     }
// }



// //type 1
// export function proxy(request:NextRequest){
//     return NextResponse.redirect(new URL("/",request.url));
// }

// export const config = {
//     matcher:"/profile"
// }