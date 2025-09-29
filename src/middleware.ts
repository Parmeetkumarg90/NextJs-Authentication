import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    switch (request.nextUrl.pathname) {
        case "/":
            // return NextResponse.redirect(new URL('/register', request.url));
            return NextResponse.next();
        case "/register":
            // return NextResponse.redirect(new URL('/register', request.url));
            return NextResponse.next();
        case "/dashboard":
            // return NextResponse.redirect(new URL('/register', request.url));
            return NextResponse.next();
        default:
            return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: ['/', '/register', '/dashboard'],
}