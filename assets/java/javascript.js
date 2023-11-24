console.log("script chargé !");
// getBinContent();
let nom = document.querySelector("#nom");
console.log("NOM :", nom.value);
let prenom = document.querySelector("#prenom");
console.log("prenom:", prenom.value);
let e_mail = document.querySelector("#e_mail");
console.log("e_mail :", e_mail.value);
let data = document.querySelector("#date anee");
console.log("data :", data);
const allDonnee = [nom.value, prenom.value, e_mail.value];
console.log("allDonnee : ", allDonnee);  

document.querySelector("button").addEventListener("click", () => {
    let nom = document.querySelector("#nom");
    console.log("NOM :", nom.value);
    let prenom = document.querySelector("#prenom");
    console.log("prenom:", prenom.value);
    let e_mail = document.querySelector("#e_mail");
    console.log("e_mail :", e_mail.value);
    let data = document.querySelector("#numero");
    console.log("data :", data);

  const allDonnee = [];
  allDonnee.push({"nom": nom.value, "prenom": prenom.value, "e-mail": e_mail.value})
console.log("allDonnee : ", allDonnee);   

getKey(allDonnee);

let maTable = document.createElement("table");
document.body.appendChild(maTable);
allDonnee.forEach(element => {
     for (let nbRows = 0; nbRows <= 0; nbRows++) {
         let uneRow = document.createElement("tr");
         maTable.appendChild(uneRow);
             for (let nbColumn = 0; nbColumn <=0; nbColumn++) {
                 let uneColumn = document.createElement("td");
                 uneColumn.innerText = (allDonnee).toString();
                 uneRow.appendChild(uneColumn)
             }
     }
});
})

function getKey(allDonnee) {
    let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("POST", "https://api.jsonbin.io/v3/b", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Bin-Name", "new");
req.setRequestHeader("X-Master-Key", "$2a$10$k8pK6H96jwEOrL9lv6fP6.KPslG2yHcVLRakgVd4RUs7TntErCa/C");
req.send(JSON.stringify(allDonnee));

  }
  let NewAllDonnee;
  getBinContent(NewAllDonnee);
  function getBinContent(NewAllDonnee) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log("REQ RESPONSE : ", req.responseText);
    }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/6555ce0c54105e766fd0ba66", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$k8pK6H96jwEOrL9lv6fP6.KPslG2yHcVLRakgVd4RUs7TntErCa/C");
    req.send(JSON.stringify(NewAllDonnee));
    console.log(NewAllDonnee);
//     NewDonnee.forEach(jsonObj => {
//         for (let nbRows = 0; nbRows <= 0; nbRows++) {
//             let uneRow = document.createElement("tr");
//             Table.appendChild(uneRow);
//                 for (let nbColumn = 0; nbColumn <=0; nbColumn++) {
//                     let uneColumn = document.createElement("td");
//                     uneColumn.innerText = (NewDonnee).toString();
//                     uneRow.appendChild(uneColumn)
//                 }
//         }
//    });
}
// Table();


//     var myH1 = document.createElement("h1");
//     myH1.textContent = jsonObj["squadName"];
//     header.appendChild(myH1);
  
//     var myPara = document.createElement("p");
//     myPara.textContent = "Hometown: " + jsonObj["homeTown"] + jsonObj["formed"];
//     header.appendChild(myPara);
//   }








// const config = {
//     apiBase: 'https://jsonplaceholder.typicode.com', 

//     createRequest(endpoint, method, headers, data) { 
//         const options = this.createOptions(method, headers, data); 

//         return fetch(this.apiBase + endpoint, options); 
//     }, 

//     createOptions(method, headers, data) { 
//         const options = {};

//         if (headers) options.headers = headers; 
//         if (data) options.body = JSON.stringify(data); 
//         options.method = method; 
        
//         return options;
//     },
// }

// export default config;


//  const donnees = document.createElement("tr");
//     Object.keys(allDonnee[0]).forEach(propriete => {
//         let doubler = document.createElement("th");
//         if (propriete != "allDonnee") {
//             doubler.textContent = propriete.toUpperCase();
//             donnees.append(doubler);
//         }

//     })
    

// let a = document.querySelectorAll("section");
















// const Secret_key = "$2a$10$7T1Xz.PeDdAGZBPUrU9BCeU2VoeQtVJ6f.0w8sTWi0fGpPyjp3ebC";
// const API_URL = "https://api.jsonbin.io/v3";
// const BIN_TO_READ = "654e02b612a5d3765997768d";

// let binContent;

// await getDataFetch() {
//     const res = await fetch(API_URL);
//     binContent = await res.json();
//     'X-Master-Key': Secret_key,
// }
// binContent = await res.json();

// await getBinContent();
// console.log("les donnees via fetch :" , binContent );

// const monBin = {
//     "nom": "CHECHEL",
//     "prenom": "Tatyana"
// }
// async function createBin () {
//     const res = await fetch(`${API_URL})/b`, {
//         method: 'POST'?
//         Headers: {
//             'Content-Type': 'application/json',
//             'X-Master-Key': Secret_key,
//         },
//         body: JSON.stringify(monBin)
//     });
// }
// await createBin();