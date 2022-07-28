if (!document.documentURI.includes("en-us")){
    let split_string = document.documentURI.split("/")
    let string = "";
    split_string[3] = "en-us"
    for (let i in split_string){
        string += split_string[i] + "/"
    }
    window.location.replace(string);
}
console.log("ok")