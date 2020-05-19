let messages = {
    0: "Initial Message 1 store in Json",
    1: "Initial Message 2 stored in Json",
    2: "I Love CS436",
    3: "I Love D2L"
};
let messageCount = 2;
let flag = true;
let temp = [], liIndex, messagelist;

window.onload = function() {

// open collipsible
let post = document.getElementById("text-region");
post.addEventListener("click", function() {
    console.log("clicked");
    post.classList.toggle("active");
    let content = this.nextElementSibling;
    content.style.display = content.style.display === "block"? "none": "block";

});


// Add messages
    let add = document.getElementById("add-button");
    add.addEventListener("click", function() {
        let text = document.getElementById("input-box").value;
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(text));
        newLi = document.getElementById("messagelist").appendChild(newLi);
        if(flag == true) {
            newLi.classList.add("dark-mode");
            flag = false;
        } else {
            newLi.classList.add("light-mode");
            flag = true;
        }
        //refreshArray();
    });

// Delete All messages
    let deleteAll = document.getElementById("delete-all-button");
    deleteAll.addEventListener("click", function() {
        let listOfLis = document.getElementById("messagelist");
        listOfLis.innerHTML = '';
    });

    this.addIntialLi(messages);

// clear input
    let clear = document.getElementById("clear-button");
    clear.addEventListener("click", function() {
        document.getElementById("input-box").value = "";
    })

}


function addIntialLi(object) {
    
    let json_string = this.JSON.stringify(messages);
    let json = this.JSON.parse(json_string);
    Object.keys(json).forEach(key => {
        let message = json[key];
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(message));
        newLi = document.getElementById("messagelist").appendChild(newLi);
        if(flag == true) {
            newLi.classList.add("dark-mode");
            flag = false;
        } else {
            newLi.classList.add("light-mode");
            flag = true;
        }
    })
}





/*
// Delete messages    

this.refreshArray();


let clickdelete = document.getElementById("delete-button");
clickdelete.addEventListener("click", function () {
    if(messagelist.length > 0) {
        messagelist[liIndex].parentNode.removeChild(messagelist[liIndex]);
        //InputText.value = "";
    }
    refreshArray();
});
}

function refreshArray() {
    messagelist = document.getElementById("messagelist").getElementsByTagName("li");
    temp.length = 0;
    for(let i = 0; i < messagelist.length; i++) {
        temp.push(messagelist[i].innerHTML);
    }
    this.clickable();
}

function clickable() {
    for(let i = 0; i < messagelist.length; i++) {
        messagelist[i].onclick = function() {
            liIndex = temp.indexOf(this.innerHTML);
            console.log(this.innerHTML + " index is " + liIndex);
        }
    }
}
*/
