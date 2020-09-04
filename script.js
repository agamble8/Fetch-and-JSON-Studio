  window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
       response.json().then(function(json) {
        //  console.log(json);
        let astroCount = 0;
         const container = document.getElementById("container");
         for (let i = 0; i<json.length; i++){
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id="active" active-status=${json[i].active}>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[i].picture}></img>
            </div>
            `;
            
            if (json[i].active == true){
              astroCount+=1;
            };
          };
        container.innerHTML += `<h3>Active Astronauts: ${astroCount}</h3>`;
       });
    });

 });