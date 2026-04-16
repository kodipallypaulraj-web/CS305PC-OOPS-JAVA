// Pre-added donor data
let donors = [
    { name: "Ravi", blood: "A+", location: "hyderabad" },
    { name: "Suresh", blood: "O+", location: "hyderabad" },
    { name: "Anjali", blood: "B+", location: "warangal" },
    { name: "Priya", blood: "A+", location: "hyderabad" },
    { name: "Kiran", blood: "O-", location: "karimnagar" }
];

// Register donor
function registerDonor() {
    let name = document.getElementById("name").value;
    let blood = document.getElementById("blood").value.toUpperCase();
    let location = document.getElementById("location").value.toLowerCase();

    if (name === "" || blood === "" || location === "") {
        alert("Please fill all fields");
        return;
    }

    donors.push({ name, blood, location });

    alert("Donor Registered Successfully!");
}

// Find matching donors
function findDonors() {
    let reqBlood = document.getElementById("reqBlood").value.toUpperCase();
    let reqLocation = document.getElementById("reqLocation").value.toLowerCase();

    let resultList = document.getElementById("result");
    resultList.innerHTML = "";

    let found = false;

    donors.forEach(donor => {
        if (donor.blood === reqBlood && donor.location === reqLocation) {
            let li = document.createElement("li");
            li.textContent = donor.name + " (" + donor.blood + ")";
            resultList.appendChild(li);
            found = true;
        }
    });

    if (found) {
        let msg = document.createElement("p");
        msg.style.color = "green";
        msg.textContent = "✅ Found Matching Donors";
        resultList.before(msg);
    } else {
        resultList.innerHTML = "<li>❌ No donors found</li>";
    }
}