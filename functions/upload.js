export async function onRequestPost(context) {  
    const {   
        request, 
        env, 
        params, 
        waitUntil, 
        next, 
        data,
    } = context;

    const url = new URL(request.url);
    const response = await fetch('https://telegra.ph/' + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
    const modifiedResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
            ...response.headers,
            'Access-Control-Allow-Origin': '*',
        },
    });

    return modifiedResponse;
}
