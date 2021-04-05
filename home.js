
var firebaseConfig = {
  apiKey: "AIzaSyDwXSIffMJnFuFd9KNnyFDPJu_6_TEiNEY",
  authDomain: "random1-3bd15.firebaseapp.com",
  projectId: "random1-3bd15",
  storageBucket: "random1-3bd15.appspot.com",
  messagingSenderId: "612102040679",
  appId: "1:612102040679:web:aa766127c2c3fb4b3c78c2",
  measurementId: "G-X0C6PWK968"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
  alert("Signed Out");
}





function createredirect() {
  window.location.href = "note.html";
}

function refreshNotesUI() {
  showNotes();
}

function addBtn() {
  let use = localStorage.getItem("uid");


  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  var d = Date();
  addTxtval = addTxt.value;
  addTitleval = addTitle.value;
  if (addTxtval.trim() == 0) { alert("Please add note"); }
  if (addTitleval.trim() == 0) { alert("Please add title"); }
  if (addTxtval.trim() != 0 && addTitleval.trim() != 0) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
    let myobj = {
      u: use,
      title: addTitle.value,
      text: addTxt.value,
      date: d
    }
    notesObj.push(myobj);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    window.location.href = "home.html";

  }
}

function showNotes() {
  let use = localStorage.getItem("uid");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    if (use == notesObj[index].u) {
      html += `
           <div class="noteCard my-2 mx-2 card" style="width: 18rem; background-image: linear-gradient(rgb(53, 24, 32),rgb(243, 243, 144));border-radius: 20px;opacity: 0.9;border:none;">
              <div class="card-body" style="background-image: linear-gradient(rgb(53, 24, 32),rgb(243, 243, 144));
              color: white;
              border-radius: 20px;opacity: 0.9;border:none;">
            <h5 class="card-title"><b>TITLE : ${element.title}</b></h5>
            <p class="card-text" >NOTE : ${element.text}</p>
            <h6><i>${element.date}</i></h6>
            <button  onclick="Delete(${index})" class="btn btn-outline-success" style="border-radius: 20px;">Delete Note</button>
            <button  onclick="Edit(${index})" class="btn btn-outline-success" style="border-radius: 20px;">Edit Note</button>
            <script></script>
        </div>
    </div>`;
    }
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = "";
  }
  console.log(notesObj);
}


function Delete(index) {
  //  console.log(index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

function Edit(index) {
  let saveindex = document.getElementById("saveindex");
  let cls = document.getElementById("cls");
  saveindex.value = index;
  let notes = localStorage.getItem("notes");
  let notesObj = JSON.parse(notes);
  let addTitle = document.getElementById("addTitle");
  let addTxt = document.getElementById("addTxt");
  addTxt.value = notesObj[index].text;
  addTitle.value = notesObj[index].title;
  cls.style.display = "block";
}


function saveBtn() {
  let notes = localStorage.getItem("notes");
  let notesObj = JSON.parse(notes);
  let saveindex = document.getElementById("saveindex").value;
  if(addTxt.value!=0&&addTitle.value!=0){
  notesObj[saveindex].text = addTxt.value;
  notesObj[saveindex].title = addTitle.value;
  notesObj[saveindex].date = Date();}
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
  cls.style.display = "none";
}



function find() {
  let searchtxt = document.getElementById("searchTxt");
  let inputval = searchtxt.value.toLowerCase();
  let notescard = document.getElementsByClassName("noteCard");
  Array.from(notescard).forEach(function (element) {
    let cardtxt = element.getElementsByClassName("card-text")[0].innerText.toLowerCase();
    let cardtxt1 = element.getElementsByClassName("card-title")[0].innerText.toLowerCase();
    if (cardtxt.includes(inputval) || cardtxt1.includes(inputval)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
}