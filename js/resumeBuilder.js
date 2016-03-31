var bio = {
    "name": "Hongbin Chen",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "646-379-6838",
        "email": "hongbinchb@gmail.com",
        "github": "hongbinc",
        "location": "New York, NY"
    },
    "welcomeMessage": "Welcome to my website",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Wordpress"
    ],
    "biopic": "images/fry.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedName)
        .prepend(formattedRole)
        .prepend(formattedPic)
        .append(HTMLskillsStart);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    $("#topContacts, #footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    if (bio.skills.length > 0) {
        for (var skills in bio.skills) {
            var formattedSkilled = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skills").append(formattedSkilled);

        }
    }
};

var education = {
    "onlineCourses": [{
        "title": "Front-end Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }],

    "schools": [{
        "name": "University at Buffalo",
        "location": "New York",
        "degree": "B.S.",
        "majors": ["Computer Science"],
        "dates": "Graduated May 2015",
        "url": "http://www.buffalo.edu/"
    }, {
        "name": "College of Staten Island",
        "location": "New York",
        "degree": "B.S.",
        "majors": ["Business Administration"],
        "dates": "August 2011- December 2011",
        "url": "http://www.csi.cuny.edu/"
    }]
};

education.display = function () {
    if (education.schools.length > 0) {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name)
                                                .replace("#", education.schools[school].url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            
            $(".education-entry:last").append(formattedSchool)
                .append(formattedSchoolDates)
                .append(formattedSchoolMajor)
                .append(formattedSchoolLocation)
                .append(formattedSchoolDegree);
        }
    }

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].school)
                                              .replace("#", education.onlineCourses[0].url);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].title);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
    
    $(".education-entry:last").append(formattedOnlineTitle)
        .append(formattedOnlineDates)
        .append(formattedOnlineSchool);
};
var work = {
    "jobs": [{
        "employer": "University at Buffalo",
        "title": "Campus Living Area Office Assistance",
        "dates": "Aug 2012 - Apr 2013",
        "description": 
            "Provided campus living information to students, worked to build community within the dormitory and manage keys and swipe access cards",
        
        "location": "Buffalo, New York"
    }]
};

work.display = function () {
    if (work.jobs.length > 0) {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle)
                .append(formattedDates)
                .append(formattedDescription);
        }
    }
};

var projects = {
    project: [{
        "title" : "Neighborhood Map",
        "dates" : "03/2016",
        "description": "<ur style='list-style-type:disc'><li>Developed single page application featuring a map of neighborhood with Knockout.JS using MVVM architecture.</li><li>Implemented third party APIs (Google Map and Foursquare) allowed users define a neighborhood and displayed 20 popular places on the map with map markers.</li><li>Build a search bar to filter the places.</li></ur>",
        "images": [],
        "url": "https://github.com/hongbinc/Frontend-NeighborhoodMap"
           
    }, 
    {
        "title": "Website Optimization",
        "dates": "03/2016",
        "description": "<ur><li>Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.</li><li> Eliminated inefficiencies in the website's scroll animation.</li></ur>",
        "images": ["images/WebsiteOptimized.JPG"],
        "url": "https://github.com/hongbinc/Frontend-WebsiteOptimization"
    }],
};

projects.display = function () {

    for (var proj in projects.project) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title)
                                                    .replace("#", projects.project[proj].url);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);

        $(".project-entry:last").append(formattedProjectTitle)
        .append(formattedProjectDate)
        .append(formattedProjectDescription);

        if (projects.project[proj].images.length > 0) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[proj].images);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }


};

work.display();
bio.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);