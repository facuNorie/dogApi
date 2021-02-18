let btn = document.querySelector(".btnSearch");
let input = document.querySelector(".inputSearch");

input.addEventListener("keyup",e=>{
    if (e.key === 'Enter' || e.keyCode === 13) {
        if(document.querySelector(".response").hasChildNodes) removeDog();
        getDog(document.querySelector(".inputSearch").value);
    }
});

btn.addEventListener("click",()=>{
    if(document.querySelector(".response").hasChildNodes) removeDog();
    getDog(document.querySelector(".inputSearch").value);
})

const getDog = breed => {
    let Breed = breed.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${Breed}/images/random`)
        .then(response=>response.json())
        .then(dog=>{
            if(dog.status == "error"){
                let h1 = document.createElement("H1");
                h1.textContent = `Error ${dog.code} breed not found!`;
                document.querySelector(".response").appendChild(h1);
                return;
            }
            let div = document.querySelector(".response");
            let imgDog = document.createElement("IMG");
            imgDog.src = dog.message;
            imgDog.classList.add("imgDog");
            div.appendChild(imgDog);
            
        });
    document.querySelector(".inputSearch").value = "";
}

const removeDog = () =>{
    let parent = document.querySelector(".response");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}