var x = new XMLHttpRequest()
x.open("GET","https://api.currencyapi.com/v3/latest?apikey=&")
x.send()

x.onload = function(){

    console.log(x.status)
    var result = JSON.parse(x.response)
    var res = result.data




    var get_btn = document.createElement("button")
    get_btn.style.backgroundColor='orange'
    get_btn.style.width = '100%'
    get_btn.style.height = '30px'
    get_btn.style.marginTop ='40px'
    get_btn.innerText = "GET"
    document.getElementById("btn").append(get_btn)
    get_btn.addEventListener('click',get)


    

    var options = [];
    for(var i = 0; i < Object.keys(res).length; i++) {
         options.push("<option value=" + Object.keys(res)[i] + ">" + Object.keys(res)[i] + "</option>")
    }
    const select = document.getElementById("sel")
    options.forEach(function(element){
        var option = document.createElement("option")
        option.innerHTML = element
        select.append(option)
    })


        function get(){
            var currencies = document.getElementById("result")
            var a = select.value
            currencies.value = res[a].value     
        }
       
       
   

   

}
