// Add the coffee to local storage with key "coffee"
async function getCoffee(){
    try{
    let url =`https://masai-mock-api.herokuapp.com/coffee/menu`
    let res = await fetch(url)
    let coff =  await res.json()
    console.log(coff.menu.data)
    let ert = coff.menu.data
    appendCoffee(ert)
    }
    catch(error){
        console.log(error)
    }
}

getCoffee()


let coffee_data = document.getElementById("menu")

function appendCoffee(varo){

    varo.forEach(function(ele){
        let box = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.innerText=ele.title

        let imag = document.createElement("img")
        imag.src =ele.image
        imag.setAttribute("id","sea")

        let p1 = document.createElement("p")
        p1.innerText= ele.price

        let btn = document.createElement("button")
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function(){
            addkar(ele)
        })
        box.append(h2,imag,p1,btn)

        coffee_data.append(box)


    })
}
let coffeeArr=JSON.parse(localStorage.getItem("coffee"))||[]

function addkar(ele){
   

   coffeeArr.push(data
    )
   localStorage.setItem("cofee",JSON.stringify(coffeeArr))

}

