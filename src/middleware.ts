import { NextRequest, NextResponse } from "next/server";

export function middleware(request : NextRequest){
    // redirect to new page
    return NextResponse.redirect(new URL("/events/all", request.url));
}


// only for matching route
export const config = {
    matcher : ['/events'],
}