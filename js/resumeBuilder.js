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
    "bioPic": "images/fry.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

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
    "onlineCourses": {
        "title": "Front-end Developer",
        "school": "Udacity",
        "dates": 2016
    },

    "schools": [{
        "name": "University at Buffalo",
        "location": "New York",
        "degree": "B.S.",
        "majors": ["Computer Science"],
        "dates": "Graduated May 2015"
    }, {
        "name": "College of Staten Island",
        "location": "New York",
        "degree": "B.S.",
        "majors": ["Business Administration"],
        "dates": "August 2011- December 2011"
    }]
};

education.display = function () {
    if (education.schools.length > 0) {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
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

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.school);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.title);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
    $(".education-entry:last").append(formattedOnlineTitle)
        .append(formattedOnlineDates)
        .append(formattedOnlineSchool);
};
var work = {
    "jobs": [{
        "employer": "University at Buffalo",
        "title": "Campus Living Area Office Assistance",
        "dates": "Aug 2012 - Apr 2013",
        "description": [
            "•	Provided campus living information to students   •	Worked to build community within the dormitory   •	Manage keys and swipe access cards"
        ],
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

var project = {
    projects: [{

    }, {

    }]
};

work.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);