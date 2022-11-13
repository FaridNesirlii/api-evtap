 const tBodyelement = document.querySelector("tbody")
 
// fetch("https://northwind.vercel.app/api/customers/")
// .then(function (response)
// {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
//     for (let i = 0; i< data.length; i++) 
//     { const trelement=document.createElement("tr");
//       const tdIdelemnt = document.createElement("td")
//       const tdCNelemnt = document.createElement("td")
//       const tdCoNelemnt = document.createElement("td")
//       const tdCTelemnt = document.createElement("td")
//       const tdADelemnt = document.createElement("td")
//       tdIdelemnt.textContent=data[i].id;
//       tdCNelemnt.textContent=data[i].companyName;
//       tdCoNelemnt.textContent=data[i].contactName;
//       tdCTelemnt.textContent=data[i].contactTitle;
//       tdADelemnt.textContent=data[i].address;
//       trelement.append(tdADelemnt,tdCNelemnt,tdCTelemnt,tdCoNelemnt,tdIdelemnt)
//       tBodyelement.appendChild(trelement)
//     }
// })

axios("https://northwind.vercel.app/api/customers/").then(function (response) {
  console.log(response);

  for(var i = 0; i<response.data.length; i++)
  {     
        const trelement=document.createElement("tr");
        const tdIdelemnt = document.createElement("td")
        const tdCNelemnt = document.createElement("td")
        const tdCoNelemnt = document.createElement("td")
        const tdCTelemnt = document.createElement("td")
        const tdADelemnt = document.createElement("td")

        tdIdelemnt.innerHTML=response.data[i].id;
        tdCNelemnt.innerHTML=response.data[i].companyName;
        tdCoNelemnt.innerHTML=response.data[i].contactName;
        tdCTelemnt.innerHTML=response.data[i].contactTitle;
        tdADelemnt.innerHTML=response.data[i].address;
        trelement.append(tdADelemnt,tdCNelemnt,tdCTelemnt,tdCoNelemnt,tdIdelemnt)
        tBodyelement.appendChild(trelement)
        console.log(i);


  }
})