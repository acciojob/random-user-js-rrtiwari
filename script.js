let userData = [];

const photo = document.getElementById("photo");
const user = document.getElementById("user");
const info = document.getElementById("info");

const ageBtn = document.getElementById("age");
const emailBtn = document.getElementById("email");
const phoneBtn = document.getElementById("phone");
const otherBtn = document.getElementById("getUser");

async function fetchData() {
    let res = await fetch("https://randomuser.me/api/");
    let json = await res.json();
    userData = json.results;
    displayMainInfo();
}

function displayMainInfo() {
    const u = userData[0];
    photo.src = u.picture.large;
    user.innerText = `${u.name.first} ${u.name.last}`;
    info.innerText = "";
}

ageBtn.addEventListener("click", () => {
    info.innerText = `Age: ${userData[0].dob.age}`;
});

emailBtn.addEventListener("click", () => {
    info.innerText = `Email: ${userData[0].email}`;
});

phoneBtn.addEventListener("click", () => {
    info.innerText = `Phone: ${userData[0].phone}`;
});

otherBtn.addEventListener("click", () => {
    fetchData();
});

fetchData();


