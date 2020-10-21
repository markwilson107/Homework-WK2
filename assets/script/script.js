const projects = [
    {
        name: "The Bodyweight Gym",
        description: "Workout web application that helps users with their at home workout routines.",
        thumbnail: "https://user-images.githubusercontent.com/62285850/95646663-8045e500-0afd-11eb-87c6-e2f16b0de9f8.JPG",
        url: "https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/",
        github: "https://github.com/Mathew-Harvey/The-Bodyweight-Gym-Online"
    },
    {
        name: "Code Quiz",
        description: "Quiz game on the subject of javascript fundamentals.",
        thumbnail: "https://raw.githubusercontent.com/markwilson107/Code-Quiz/master/assets/Deployed-Application.png",
        url: "https://markwilson107.github.io/Code-Quiz/",
        github: "https://github.com/markwilson107/Code-Quiz"
    },
    {
        name: "Weather Dashboard",
        description: "Weather dashboard demonstrating the use of APIs.",
        thumbnail: "https://raw.githubusercontent.com/markwilson107/Weather-Dashboard/master/assets/Deployed%20Application.png",
        url: "https://markwilson107.github.io/Weather-Dashboard/",
        github: "https://github.com/markwilson107/Weather-Dashboard"
    },
    {
        name: "Work Day Planner",
        description: "Work day planner for the user to organise their day hour by hour.",
        thumbnail: "https://raw.githubusercontent.com/markwilson107/Work-Day-Scheduler/master/assets/Deployed%20Application.png",
        url: "https://markwilson107.github.io/Work-Day-Scheduler/",
        github: "https://github.com/markwilson107/Work-Day-Scheduler"
    },
    {
        name: "Password Generator",
        description: "Random password generator created using HTML, CSS, and Javascript.",
        thumbnail: "https://raw.githubusercontent.com/markwilson107/Password-Generator/master/assets/Deployed-application.PNG",
        url: "https://markwilson107.github.io/Password-Generator/",
        github: "https://github.com/markwilson107/Password-Generator"
    }];

for (var i = 0; i < projects.length; i++) {
    let $col = $("<div>");
    $col.addClass("col-md-4 portfolio-box fader");
    $col.html(`<div style="background-image:url('${projects[i].thumbnail}');" class="portfolio-img" >
    <div class="portfolio-box-contents">
        <h3>${projects[i].name}</h3><br/>
        <p>${projects[i].description}</p>
        <a class="btn btn-light" href="${projects[i].url}" target="blank_">Demo</a>&nbsp;
        <a class="btn btn-light" href="${projects[i].github} target="blank_"">Github</a>
    </div>
    </div>`);
    $(".portfolio-grid").append($col);
}
