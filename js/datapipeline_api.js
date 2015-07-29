
var api_url = "http://localhost:6543/api/";
var current_endpoint = null;
var current_results = null;

function run_api_form(api_endpoint){
    current_endpoint = api_endpoint;
    console.log("Running form form the following endpoint: " + api_endpoint);
    // Gets the form information for the given api endpoint, and then creates the form
    var url = api_url + api_endpoint;
    $.ajax(url, {
        success: function(results){
            console.log("API found, creating form");
            console.log(results);
            var s_code = create_form(results);
            $("#api_form").html(s_code);
            console.log("Form Created");
            create_api_form_submit_event_handler();
        },
        failure: err_no_api,
        dataType: "json"
    });
}


function err_no_api(result){
    console.log("No API available");
    console.log("URL: " + api_url);
    console.log(result);
    console.log("done");
}

function create_form(results){
    var s_code = "<form id=api_form action='" + api_url + results['endpoint'] + "' method=POST>";
    for(var i=0; i< results['elements'].length; i++){
        s_code += create_element(results['elements'][i]) + "\n";
    }
    s_code += "<input type=submit></form><br><div id=\"api_results\" />";
    return s_code;
}

function create_element(element){
    console.log("Creating element from:");
    console.log(element);
    if (element['type'] == 'h1'){
        return "<h1>" + element['value'] + "</h1>";
    }else if (element['type'] == 'h2'){
        return "<h2>" + element['value'] + "</h2>";
    }else{
        var s_element = "<input ";
        for (var key in element) {
            if (element.hasOwnProperty(key)) {
                s_element += key + "=\"" + element[key] + "\"";
            }
        }
        s_element += " />";
        return s_element;
    }
    //return "<span>Unsupported element type: " + element['value'] + "</span>";
}

function create_api_form_submit_event_handler(){

    $(function() { //shorthand document.ready function
        $('#api_form').on('submit', function(e) { //use on if jQuery 1.7+
            e.preventDefault();  //prevent form from submitting
            var raw_data = $("#api_form :input").serializeArray()[0];
            var data = {};
            data[raw_data['name']] = raw_data['value'];
            console.log(data); //use the console for debugging, F12 in Chrome, not alerts
            $.ajax({
                type: "POST",
                url: api_url + current_endpoint,
                data: data,
                success: function(result) {
                    console.log("Result");
                    console.log(result);
                    current_results = result;
                    $('#api_results').html("<p class=" + result['divclass'] + ">" + result['result_message'] + "</p>");
                },
                error: function(result) {
                    console.log("Error Result");
                    console.log(result);
                    $('#api_results').html("<p class=negativered>We are a little busy with requests, please try again later!</p>");
                },
                dataType: 'json'
            });
        });
    });
}