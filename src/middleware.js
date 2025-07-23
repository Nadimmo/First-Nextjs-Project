import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/about', request.url))
// }
 
// export const config = {
//   matcher: '/dashboard',
// }

export function middleware(request) {
    const user = false; // Simulating user authentication check
    if(!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.redirect(new URL('/dashboard/CreateUser', request.url))
}

export const config = {
    matcher:"/dashboard"
}

// export function middleware(request) {
//    return NextResponse.rewrite(new URL('/blogs', request.url));
// }
// export const config = {
//     matcher:"/Categories"
// }

// export function middleware(request) {
//     const cook = request.cookies.get('next');
//     if(!cook) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
//     // return NextResponse.redirect(new URL('/', request.url));
//     return NextResponse.next()
// }   
// export const config = {
//     matcher:"/dashboard"
// }