// const {MongoClient} = require ('mongodb');

// async function main() {
//     const uri = "mongodb+srv://oculus:oktavian@rejob-mow71.mongodb.net/test?retryWrites=true&w=majority"
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         await listDatabase(client);
//     } 

//     catch(e) {
//         console.error(e);
//     } 

//     finally {
//         await client.close();
//     }
// }    



let options = document.querySelectorAll("#form > .form-group")
let skills = document.querySelectorAll("#skills > .form-check")
let jobDomain = document.getElementById("domains");
let skillSelection = document.getElementById("skills");
const HIDDEN = "hidden";

    let domainChange = function() { 
        let val = this.value;

        options.forEach((option) => {
            option.dataset.option == val ? option.classList.remove(HIDDEN) :
            (!option.classList.contains(HIDDEN) ? option.classList.add(HIDDEN) : true);

        });   
    }

    let skillSelect = function() {
        let val = this.value;

        skills.forEach((skill) => {
            skill.dataset.skill == val ? skill.classList.remove(HIDDEN) : 
            (!skill.classList.contains(HIDDEN) ? skill.classList.add(HIDDEN) : true)
        })
    }
      
jobDomain.addEventListener('change', domainChange);
jobDomain.addEventListener('change', skillSelect);
document.getElementById('submitBtn').addEventListener('click', function() {
    document.location.replace("http://192.168.0.59:8080/Jobs/");
    alert('it worked!');

})

