console.log("hello, its working")

showNotes();
addNotes = document.getElementById("addBtn")
addNotes.addEventListener("click",function(e){
    addTxt = document.getElementById("addTxt");
    notes= localStorage.getItem("notes")

    if(notes == null){
        notesObj = []
    }
    else{
        notesObj= JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    notes=localStorage.setItem("notes",JSON.stringify(notesObj))
    addTxt.value="";
    console.log(notesObj);
    showNotes()
})

function showNotes(){
    notes= localStorage.getItem("notes")
    if(notes == null){
        notesObj = []
    }
    else{
        notesObj= JSON.parse(notes)
    }

    let html="";
    notesObj.forEach(function(element,index){
        html+= `
        <div class="notecard mx-2">
                <h5 class="card-header">Notes ${index+1}</h5>
                <div class="card-body">
                    <p class="card-text" id="notesPara">${element}</p>
                    <button class="btn btn-primary" onclick='deleteNote(this.id)' id='${index}'>Delete Note</button>
                </div>
            </div>
        `
    });
    show = document.getElementById("notes")
    empty="No Notes to show. Create one now."
    // show.innerHTML = html
    if(notesObj.length != 0){
        show.innerHTML = html;
    }
    else{
        show.innerHTML = empty
    }
}


function deleteNote(index){
    notes= localStorage.getItem("notes")
    if(notes == null){
        notesObj = []
    }
    else{
        notesObj= JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}

let searchTxt = document.getElementById("searchTxt")

searchTxt.addEventListener("input", function(){
    let inputVal = searchTxt.value.toLowerCase()
    let notecards = document.getElementsByClassName("notecard")
    
    Array.from(notecards).forEach(function(element){

        let cardtxt = element.getElementsByTagName("p")[0].innerText
        if(cardtxt.includes(inputVal)){
            element.style.display ="block"
        }
        else{
            element.style.display = "none"
        }
    
        })
    
    })