import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = url.pathname.startsWith("/ingest/static/") ? 'us-assets.i.posthog.com' : 'us.i.posthog.com'
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('host', hostname)

  let url = request.nextUrl.clone()
  url.protocol = 'https'
  url.hostname = hostname
  url.port = 443
  url.pathname = url.pathname.replace(/^\/ingest/, '');

  return NextResponse.rewrite(url, {
    headers: requestHeaders,
  })
}

export const config = {
  matcher: '/ingest/:path*',
}
