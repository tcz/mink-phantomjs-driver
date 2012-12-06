var PhantomUrls = {};

PhantomUrls.getRequestPath = function( request )
{
    return request.url.split( "?", 1 ).shift();
};

PhantomUrls.getRequestParams = function( request )
{
    var 
        query, 
        variables, 
        pair,
        params;

    params = {};

    if ( "POST" === request.method )
    {
        query = request.postRaw;
    }
    else if ( -1 !== request.url.indexOf("?") )
    {
        query = request.url.split( "?" ).pop();
    }
    else
    {
        query = "";
    }

    variables = query.split("&");
    for ( var i = 0; i < variables.length; i++ )
    {
        pair = variables[i].split("=");
        if ( "" !== pair[0] )
        {
            params[unescape(pair[0])] = unescape(pair[1]);
        }
    }

    return params;
};