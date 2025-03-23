document.getElementById("domainSearchForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    let domain = document.getElementById("domainSDL").value.trim();
    let domainExtension = document.getElementById("domainTDL").value;
    
    if (domain === "") {
        document.getElementById("errorText").style.visibility = "visible";
        document.getElementById("errorText").innerText = "Domen adı daxil edin";
    } else {
        document.getElementById("errorText").style.visibility = "hidden";
        alert("Domain: " + domain + domainExtension);  
    }
});