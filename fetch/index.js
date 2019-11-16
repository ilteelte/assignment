function getSomeData(){
    fetch("https://swapi.co/api/people/1/?format=json") // make the request //, { mode: 'opaque'}
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
    document.getElementById("advices").innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })

}


function getAboutDartVader(){
    fetch("https://swapi.co/api/people/4/") // make the request //, { mode: 'opaque'}
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
    document.getElementById("advices").innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })

}
