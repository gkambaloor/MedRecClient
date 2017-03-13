$(document).ready(function(){
    loadLogo(pgNm);
});



let config = {};

/******* Images *******/

// Variable Setup
config.logo = {};
config.logo.main = {};
config.logo.regulator = {};
config.logo.hospital = {};

// Logo size
config.logo.width = '4em';
config.logo.height = '1.6em';

//Main Logo
config.logo.main.src = 'Icons/IBM_logo.svg';

// Regulator Logo
config.logo.regulator.src = 'Icons/Regulator/IBM_logo.svg';

// Manufacturer Logo
config.logo.hospital.src = 'Icons/Manufacturer/IBM_logo.svg';


/******* Participants *******/
//This is where we define the details of the users for each company (name and password)

// Variable Setup
config.participants = {};
config.participants.users = {};
config.participants.users.regulators = [];
config.participants.users.patients = [];
config.participants.users.hospitals = [];

config.participants.regulator = {};
config.participants.patient = {};
config.participants.hospital = {};

// Regulators
config.participants.users.regulators[0]= {};
config.participants.users.regulators[0].company = 'NHIN';
config.participants.users.regulators[0].type = 'Regulator';
config.participants.users.regulators[0].user = 'Rochester RHIO';

// Hospitals
config.participants.users.hospitals[0] = {};
config.participants.users.hospitals[0].company = 'Kaiser Permanente';
config.participants.users.hospitals[0].type = 'Hospital';
config.participants.users.hospitals[0].user = 'Dr. Kenneth Honda';

config.participants.users.hospitals[1] = {};
config.participants.users.hospitals[1].company = 'Sloan Kettering';
config.participants.users.hospitals[1].type = 'Hospital';
config.participants.users.hospitals[1].user = 'Dr. John Keating';





/******* Used Particpants *******/
//This is where we select which participants will be used for the pages

// Regulator
config.participants.regulator = config.participants.users.regulators[0];


// Hospital
config.participants.hospital = config.participants.users.hospitals[0];


function loadLogo(pageType)
{
    $('#logo').attr('src', config.logo[pageType.toLowerCase()].src);
    $('#logo').css('width', config.logo.width);
    $('#logo').css('height', config.logo.height);
}

function loadParticipant(pageType)
{
    $('#username').html(config.participants[pageType].user);
    $('#company').html(config.participants[pageType].company);
}
