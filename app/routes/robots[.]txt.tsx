export async function loader() {
    return new Response(
        `User-agent: *
Allow: /

Sitemap: https://www.freedom27.co.za/sitemap.xml`,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    );
}