const render_ip = (ip_info) => {
    $('#ip-locator-demo')
        .append(render_line("Your IP", ip_info['ip']))
        .append(render_line("City", ip_info['city']))
        .append(render_line("ZIP", ip_info['zip']))
        .append(render_line("Latitude", ip_info['latitude']))
        .append(render_line("Longitude", ip_info['longitude']))
}

const render_line = (title, data) => {
    return '<p style="text-align:right">' +
    `<span style="float:left"><b>${title}:</b></span>${data}</p>`
}

$(document).ready(function() {
    $.ajax({
        url: 'https://rwzr72akp3.execute-api.us-west-2.amazonaws.com/Prod/ip-locator?asjson=1',
        type: 'GET',
        success: function(response) {
            if (typeof(response) == 'string') {
                render_ip(JSON.parse(response))
            } else {
                render_ip(response)
            }
            
        },
        error: function(error) {
            console.log(error);
        }
    });
})
