
// Script by Anthony Yacovone: 2020

var shuffleSequence = seq("consent","demographics", "intro","practiceInstructions", sepWith("sep",startsWith("practice")),
                          sepWith("sep",startsWith("CSA")), "debrief","exit");


var showProgressBar = false; // If you want to show progress bar change to true
var practiceItemTypes = ["practice-1","practice-2","practice-3"]; // If you want to show progress bar change to true 


// These are the default attributes for the experimental controllers 

var defaults = [
    "Message", { transfer: "keypress"}, //allows forms to continue using any key
    "Message_AY", { transfer: "keypress"}, //allows forms to continue using any key
    "Form", {continueOnReturn: true, continueMessage: null}, //allows completion task to continue using the return key, eliminates the 'Click here to continue' message
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "",
        leftComment: "(Not very confident)", rightComment: "(Very confident)"
    },
    "QuestionAlt", {as: [['f', 'F = Acceptable Translation'], ['j', 'J = Not Acceptable Translation']], 
        randomOrder: false,
        presentHorizontally: true}, //fixes the presentation 
    
    "Separator", {
        transfer: 2000,
        normalMessage: "",
        errorMessage: "Opps, wrong answer! Take your time when answering!"
    },
];


//Defining controllers for the specific tasks used in this experiment (training phase, PVT, and Completion task)


var items = [


//The included HTML pages for the experiment
["sep", Separator, {transfer: 1000, normalMessage: "Loading...", errorMessage: ""}],
["Separator", Separator, {}],
["intro", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "Welcome.html" }} ],
["exit", "Form", {transfer: "click", continueMessage: "Click here to continue", consentRequired: true, html: {include: "MTurk_SONA_exit.html" }} ],
["debrief", "Form", {transfer: "click", continueMessage: "Click here to continue", consentRequired: true, html: {include: "MTurk_SONA_debrief.html" }} ],
["demographics", "Form", {transfer:"click", continueMessage: "Click here to continue", consentRequired: true, html: {include: "MTurk_SONA_demographics.html" }} ],
["consent", "Form", {transfer:"click", continueMessage: "Click here to continue", consentRequired: true, html: {include: "MTurk_SONA_consent_2020.html" }} ],
    
["ready", "Message", {consentRequired: false, transfer: 2000,
                    html: [ 
                            ["div", {"@style.fontFamily": "Times New Roman", "@style.fontSize":"xx-large", "@style.textAlign":"center", "@style.marginTop":"3em"}],
                            ["br"],
                            ["h1", "That's it for practice!"],
                            ["h3", "The real game will start automatically in a few seconds."],
                            ["br"],
                            ["h3", "Good luck!"],
                          ]}],
    
["practiceInstructions", "Message", {consentRequired: false, transfer: 2000,
                    html: [ 
                            ["div", {"@style.fontFamily": "Times New Roman", "@style.fontSize":"xx-large", "@style.textAlign":"center", "@style.marginTop":"3em"}],
                            ["br"],
                            ["h1", "The practice is about to begin!"],
                            ["br"],
                            ["h3", "Good luck!"],
                          ]}],
    
// Practice sentences now
   
    
["practice-1", "QuestionAlt", {randomOrder:false, q: "Is PERRO an acceptable translation of DOG?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PERRO and DOG mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],

["practice-2", "QuestionAlt", {randomOrder:false, q: "Is LETARGO an acceptable translation of TORPOR?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both LETARGO and TORPOR mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],

["practice-3", "QuestionAlt", {randomOrder:false, q: "Is POZO an acceptable translation of POOL?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both POZO and POOL mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}], 
 
// Target sentences now   

    
[["CSA-naturalSpanish", 1], "QuestionAlt", {randomOrder:false, q: "Is PELO an acceptable translation of HAIR?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PELO and HAIR mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 1], "QuestionAlt", {randomOrder:false, q: "Is PELAJE an acceptable translation of HAIR?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PELAJE and HAIR mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],

[["CSA-naturalSpanish", 2], "QuestionAlt", {randomOrder:false, q: "Is VIDA an acceptable translation of LIFE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VIDA and LIFE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 2], "QuestionAlt", {randomOrder:false, q: "Is ÁNIMO an acceptable translation of LIFE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ÁNIMO and LIFE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 3], "QuestionAlt", {randomOrder:false, q: "Is MENTE an acceptable translation of MIND?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MENTE and MIND mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 3], "QuestionAlt", {randomOrder:false, q: "Is CEREBRO an acceptable translation of MIND?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CEREBRO and MIND mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 4], "QuestionAlt", {randomOrder:false, q: "Is PACIENTE an acceptable translation of PATIENT?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PACIENTE and PATIENT mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 4], "QuestionAlt", {randomOrder:false, q: "Is SUBJETO an acceptable translation of PATIENT?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both SUBJETO and PATIENT mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 5], "QuestionAlt", {randomOrder:false, q: "Is MUNDO an acceptable translation of WORLD?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MUNDO and WORLD mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 5], "QuestionAlt", {randomOrder:false, q: "Is ESFERA an acceptable translation of WORLD?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ESFERA and WORLD mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 6], "QuestionAlt", {randomOrder:false, q: "Is PALABRAS an acceptable translation of WORDS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PALABRAS and WORDS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 6], "QuestionAlt", {randomOrder:false, q: "Is APODOS an acceptable translation of WORDS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both APODOS and WORDS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 7], "QuestionAlt", {randomOrder:false, q: "Is VECES an acceptable translation of TIME?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VECES and TIME mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 7], "QuestionAlt", {randomOrder:false, q: "Is MESES an acceptable translation of TIME?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MESES and TIME mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 8], "QuestionAlt", {randomOrder:false, q: "Is BUFANDA an acceptable translation of SCARF?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both BUFANDA and SCARF mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 8], "QuestionAlt", {randomOrder:false, q: "Is LONA an acceptable translation of SCARF?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both LONA and SCARF mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 9], "QuestionAlt", {randomOrder:false, q: "Is PERSONA an acceptable translation of SELF?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PERSONA and SELF mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 9], "QuestionAlt", {randomOrder:false, q: "Is ALMA an acceptable translation of SELF?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ALMA and SELF mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 10], "QuestionAlt", {randomOrder:false, q: "Is AMIGA an acceptable translation of FRIEND?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both AMIGA and FRIEND mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 10], "QuestionAlt", {randomOrder:false, q: "Is CAMARADA an acceptable translation of FRIEND?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAMARADA and FRIEND mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 11], "QuestionAlt", {randomOrder:false, q: "Is DIENTES an acceptable translation of TEETH?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both DIENTES and TEETH mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 11], "QuestionAlt", {randomOrder:false, q: "Is MUELAS an acceptable translation of TEETH?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MUELAS and TEETH mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 12], "QuestionAlt", {randomOrder:false, q: "Is ESCUELA an acceptable translation of SCHOOL?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both ESCUELA and SCHOOL mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 12], "QuestionAlt", {randomOrder:false, q: "Is MAZMORRA an acceptable translation of SCHOOL?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MAZMORRA and SCHOOL mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 13], "QuestionAlt", {randomOrder:false, q: "Is PELUCA an acceptable translation of WIG?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PELUCA and WIG mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 13], "QuestionAlt", {randomOrder:false, q: "Is PELLEJO an acceptable translation of WIG?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PELLEJO and WIG mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 14], "QuestionAlt", {randomOrder:false, q: "Is COSAS an acceptable translation of THINGS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both COSAS and THINGS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 14], "QuestionAlt", {randomOrder:false, q: "Is OBJETOS an acceptable translation of THINGS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both OBJETOS and THINGS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 15], "QuestionAlt", {randomOrder:false, q: "Is SEMANAS an acceptable translation of WEEKS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SEMANAS and WEEKS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 15], "QuestionAlt", {randomOrder:false, q: "Is ASUNTOS an acceptable translation of WEEKS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ASUNTOS and WEEKS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 16], "QuestionAlt", {randomOrder:false, q: "Is FANTASMA an acceptable translation of GHOST?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both FANTASMA and GHOST mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 16], "QuestionAlt", {randomOrder:false, q: "Is SOMBRA an acceptable translation of GHOST?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both SOMBRA and GHOST mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 17], "QuestionAlt", {randomOrder:false, q: "Is CEPILLO an acceptable translation of BRUSH?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CEPILLO and BRUSH mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 17], "QuestionAlt", {randomOrder:false, q: "Is CERDAS an acceptable translation of BRUSH?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CERDAS and BRUSH mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 18], "QuestionAlt", {randomOrder:false, q: "Is DESAGÜE an acceptable translation of DRAIN?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both DESAGÜE and DRAIN mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 18], "QuestionAlt", {randomOrder:false, q: "Is HUECO an acceptable translation of DRAIN?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both HUECO and DRAIN mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 19], "QuestionAlt", {randomOrder:false, q: "Is ESPEJO an acceptable translation of MIRROR?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both ESPEJO and MIRROR mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 19], "QuestionAlt", {randomOrder:false, q: "Is VIDRIO an acceptable translation of MIRROR?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both VIDRIO and MIRROR mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 20], "QuestionAlt", {randomOrder:false, q: "Is TIENDA an acceptable translation of STORE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TIENDA and STORE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 20], "QuestionAlt", {randomOrder:false, q: "Is ALMACÉN an acceptable translation of STORE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ALMACÉN and STORE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 21], "QuestionAlt", {randomOrder:false, q: "Is TROZOS an acceptable translation of PIECES?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TROZOS and PIECES mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 21], "QuestionAlt", {randomOrder:false, q: "Is PUNTOS an acceptable translation of PIECES?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PUNTOS and PIECES mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 22], "QuestionAlt", {randomOrder:false, q: "Is TIPOS an acceptable translation of KINDS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TIPOS and KINDS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 22], "QuestionAlt", {randomOrder:false, q: "Is GÉNEROS an acceptable translation of KINDS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both GÉNEROS and KINDS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 23], "QuestionAlt", {randomOrder:false, q: "Is MUJERES an acceptable translation of WOMEN?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MUJERES and WOMEN mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 23], "QuestionAlt", {randomOrder:false, q: "Is DAMAS an acceptable translation of WOMEN?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both DAMAS and WOMEN mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 24], "QuestionAlt", {randomOrder:false, q: "Is INTERVALO an acceptable translation of RANGE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both INTERVALO and RANGE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 24], "QuestionAlt", {randomOrder:false, q: "Is LAPSO an acceptable translation of RANGE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both LAPSO and RANGE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 25], "QuestionAlt", {randomOrder:false, q: "Is DINERO an acceptable translation of MONEY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both DINERO and MONEY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 25], "QuestionAlt", {randomOrder:false, q: "Is PLATA an acceptable translation of MONEY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PLATA and MONEY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 26], "QuestionAlt", {randomOrder:false, q: "Is HOGAR an acceptable translation of HOME?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both HOGAR and HOME mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 26], "QuestionAlt", {randomOrder:false, q: "Is DOMICILIO an acceptable translation of HOME?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both DOMICILIO and HOME mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 27], "QuestionAlt", {randomOrder:false, q: "Is DORMITORIO an acceptable translation of BEDROOM?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both DORMITORIO and BEDROOM mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 27], "QuestionAlt", {randomOrder:false, q: "Is GIMNASIO an acceptable translation of BEDROOM?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both GIMNASIO and BEDROOM mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 28], "QuestionAlt", {randomOrder:false, q: "Is CARRO an acceptable translation of CART?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CARRO and CART mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 28], "QuestionAlt", {randomOrder:false, q: "Is CAMIÓN an acceptable translation of CART?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAMIÓN and CART mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 29], "QuestionAlt", {randomOrder:false, q: "Is MOLESTIA an acceptable translation of TROUBLE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MOLESTIA and TROUBLE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 29], "QuestionAlt", {randomOrder:false, q: "Is DISTURBIA an acceptable translation of TROUBLE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both DISTURBIA and TROUBLE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 30], "QuestionAlt", {randomOrder:false, q: "Is RAZÓN an acceptable translation of REASON?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both RAZÓN and REASON mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 30], "QuestionAlt", {randomOrder:false, q: "Is SENTIDO an acceptable translation of REASON?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both SENTIDO and REASON mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 31], "QuestionAlt", {randomOrder:false, q: "Is CEJAS an acceptable translation of EYEBROWS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CEJAS and EYEBROWS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 31], "QuestionAlt", {randomOrder:false, q: "Is PATILLAS an acceptable translation of EYEBROWS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PATILLAS and EYEBROWS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 32], "QuestionAlt", {randomOrder:false, q: "Is CARA an acceptable translation of FACE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CARA and FACE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 32], "QuestionAlt", {randomOrder:false, q: "Is MASCARA an acceptable translation of FACE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MASCARA and FACE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 33], "QuestionAlt", {randomOrder:false, q: "Is VENTANA an acceptable translation of WINDOW?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VENTANA and WINDOW mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 33], "QuestionAlt", {randomOrder:false, q: "Is PUERTA an acceptable translation of WINDOW?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PUERTA and WINDOW mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 34], "QuestionAlt", {randomOrder:false, q: "Is BANCO an acceptable translation of BANK?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both BANCO and BANK mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 34], "QuestionAlt", {randomOrder:false, q: "Is FONDO an acceptable translation of BANK?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both FONDO and BANK mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 35], "QuestionAlt", {randomOrder:false, q: "Is MULTITUD an acceptable translation of CROWD?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MULTITUD and CROWD mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 35], "QuestionAlt", {randomOrder:false, q: "Is COMPAÑÍA an acceptable translation of CROWD?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both COMPAÑÍA and CROWD mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 36], "QuestionAlt", {randomOrder:false, q: "Is ESPACIO an acceptable translation of SPACE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both ESPACIO and SPACE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 36], "QuestionAlt", {randomOrder:false, q: "Is CUARTELES an acceptable translation of SPACE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CUARTELES and SPACE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 37], "QuestionAlt", {randomOrder:false, q: "Is SOL an acceptable translation of SUN?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SOL and SUN mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 37], "QuestionAlt", {randomOrder:false, q: "Is LUZ an acceptable translation of SUN?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both LUZ and SUN mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 38], "QuestionAlt", {randomOrder:false, q: "Is SOMBRERO an acceptable translation of HAT?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SOMBRERO and HAT mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 38], "QuestionAlt", {randomOrder:false, q: "Is CORONA an acceptable translation of HAT?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CORONA and HAT mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 39], "QuestionAlt", {randomOrder:false, q: "Is SILLAS an acceptable translation of CHAIRS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SILLAS and CHAIRS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 39], "QuestionAlt", {randomOrder:false, q: "Is CAMAS an acceptable translation of CHAIRS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAMAS and CHAIRS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 40], "QuestionAlt", {randomOrder:false, q: "Is HORA an acceptable translation of HOUR?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both HORA and HOUR mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 40], "QuestionAlt", {randomOrder:false, q: "Is CAPITULO an acceptable translation of HOUR?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAPITULO and HOUR mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 41], "QuestionAlt", {randomOrder:false, q: "Is SUDOR an acceptable translation of SWEAT?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SUDOR and SWEAT mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 41], "QuestionAlt", {randomOrder:false, q: "Is SALINA an acceptable translation of SWEAT?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both SALINA and SWEAT mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 42], "QuestionAlt", {randomOrder:false, q: "Is CABEZA an acceptable translation of HEAD?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CABEZA and HEAD mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 42], "QuestionAlt", {randomOrder:false, q: "Is CRANEO an acceptable translation of HEAD?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CRANEO and HEAD mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 43], "QuestionAlt", {randomOrder:false, q: "Is MOVIMIENTO an acceptable translation of MOTION?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MOVIMIENTO and MOTION mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 43], "QuestionAlt", {randomOrder:false, q: "Is VIAJE an acceptable translation of MOTION?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both VIAJE and MOTION mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 44], "QuestionAlt", {randomOrder:false, q: "Is GENTE an acceptable translation of PEOPLE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both GENTE and PEOPLE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 44], "QuestionAlt", {randomOrder:false, q: "Is CIUDADANOS an acceptable translation of PEOPLE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CIUDADANOS and PEOPLE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 45], "QuestionAlt", {randomOrder:false, q: "Is CEREMONIA an acceptable translation of CEREMONY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CEREMONIA and CEREMONY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 45], "QuestionAlt", {randomOrder:false, q: "Is RITO an acceptable translation of CEREMONY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both RITO and CEREMONY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 46], "QuestionAlt", {randomOrder:false, q: "Is CAJONES an acceptable translation of DRAWERS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CAJONES and DRAWERS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 46], "QuestionAlt", {randomOrder:false, q: "Is ESTANTES an acceptable translation of DRAWERS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ESTANTES and DRAWERS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 47], "QuestionAlt", {randomOrder:false, q: "Is VECES an acceptable translation of TIME?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VECES and TIME mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 47], "QuestionAlt", {randomOrder:false, q: "Is MESES an acceptable translation of TIME?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MESES and TIME mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 48], "QuestionAlt", {randomOrder:false, q: "Is AÑOS an acceptable translation of YEARS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both AÑOS and YEARS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 48], "QuestionAlt", {randomOrder:false, q: "Is UNIDADES an acceptable translation of YEARS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both UNIDADES and YEARS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 49], "QuestionAlt", {randomOrder:false, q: "Is COMIDA an acceptable translation of FOOD?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both COMIDA and FOOD mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 49], "QuestionAlt", {randomOrder:false, q: "Is BOCADO an acceptable translation of FOOD?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both BOCADO and FOOD mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 50], "QuestionAlt", {randomOrder:false, q: "Is HISTORIA an acceptable translation of STORY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both HISTORIA and STORY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 50], "QuestionAlt", {randomOrder:false, q: "Is FABULA an acceptable translation of STORY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both FABULA and STORY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 51], "QuestionAlt", {randomOrder:false, q: "Is FIN an acceptable translation of END?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both FIN and END mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 51], "QuestionAlt", {randomOrder:false, q: "Is CIERRE an acceptable translation of END?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CIERRE and END mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 52], "QuestionAlt", {randomOrder:false, q: "Is HISTORIAS an acceptable translation of STORIES?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both HISTORIAS and STORIES mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 52], "QuestionAlt", {randomOrder:false, q: "Is FABULAS an acceptable translation of STORIES?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both FABULAS and STORIES mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 53], "QuestionAlt", {randomOrder:false, q: "Is CUARTOS an acceptable translation of ROOMS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CUARTOS and ROOMS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 53], "QuestionAlt", {randomOrder:false, q: "Is CUBÍCULOS an acceptable translation of ROOMS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CUBÍCULOS and ROOMS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 54], "QuestionAlt", {randomOrder:false, q: "Is VESTIDO an acceptable translation of DRESS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VESTIDO and DRESS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 54], "QuestionAlt", {randomOrder:false, q: "Is CAMISA an acceptable translation of DRESS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAMISA and DRESS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 55], "QuestionAlt", {randomOrder:false, q: "Is RELACIÓN an acceptable translation of RELATIONSHIP?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both RELACIÓN and RELATIONSHIP mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 55], "QuestionAlt", {randomOrder:false, q: "Is ENLACE an acceptable translation of RELATIONSHIP?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ENLACE and RELATIONSHIP mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 56], "QuestionAlt", {randomOrder:false, q: "Is MIERDA an acceptable translation of CRAP?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MIERDA and CRAP mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 56], "QuestionAlt", {randomOrder:false, q: "Is HECES an acceptable translation of CRAP?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both HECES and CRAP mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 57], "QuestionAlt", {randomOrder:false, q: "Is PROGRAMA an acceptable translation of SHOW?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PROGRAMA and SHOW mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 57], "QuestionAlt", {randomOrder:false, q: "Is OBRA an acceptable translation of SHOW?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both OBRA and SHOW mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 58], "QuestionAlt", {randomOrder:false, q: "Is CUMPLEAÑOS an acceptable translation of BIRTHDAY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CUMPLEAÑOS and BIRTHDAY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 58], "QuestionAlt", {randomOrder:false, q: "Is CITA an acceptable translation of BIRTHDAY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CITA and BIRTHDAY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 59], "QuestionAlt", {randomOrder:false, q: "Is HOMBRE an acceptable translation of MAN?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both HOMBRE and MAN mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 59], "QuestionAlt", {randomOrder:false, q: "Is ESPECIE an acceptable translation of MAN?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ESPECIE and MAN mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 60], "QuestionAlt", {randomOrder:false, q: "Is AÑO an acceptable translation of YEAR?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both AÑO and YEAR mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 60], "QuestionAlt", {randomOrder:false, q: "Is SESIÓN an acceptable translation of YEAR?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both SESIÓN and YEAR mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 61], "QuestionAlt", {randomOrder:false, q: "Is TRABAJO an acceptable translation of WORK?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TRABAJO and WORK mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 61], "QuestionAlt", {randomOrder:false, q: "Is TAREA an acceptable translation of WORK?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both TAREA and WORK mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 62], "QuestionAlt", {randomOrder:false, q: "Is CLIMA an acceptable translation of WEATHER?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CLIMA and WEATHER mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 62], "QuestionAlt", {randomOrder:false, q: "Is BIOMA an acceptable translation of WEATHER?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both BIOMA and WEATHER mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 63], "QuestionAlt", {randomOrder:false, q: "Is PUNTO an acceptable translation of POINT?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PUNTO and POINT mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 63], "QuestionAlt", {randomOrder:false, q: "Is LUGAR an acceptable translation of POINT?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both LUGAR and POINT mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 64], "QuestionAlt", {randomOrder:false, q: "Is NOMBRE an acceptable translation of NAME?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both NOMBRE and NAME mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 64], "QuestionAlt", {randomOrder:false, q: "Is ETIQUETA an acceptable translation of NAME?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ETIQUETA and NAME mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 65], "QuestionAlt", {randomOrder:false, q: "Is AFICIONADO an acceptable translation of FAN?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both AFICIONADO and FAN mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 65], "QuestionAlt", {randomOrder:false, q: "Is PREDICADOR an acceptable translation of FAN?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PREDICADOR and FAN mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 66], "QuestionAlt", {randomOrder:false, q: "Is FÚTBOL an acceptable translation of SOCCER?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both FÚTBOL and SOCCER mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 66], "QuestionAlt", {randomOrder:false, q: "Is ESQUIAR an acceptable translation of SOCCER?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ESQUIAR and SOCCER mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 67], "QuestionAlt", {randomOrder:false, q: "Is NOVIA an acceptable translation of GIRLFRIEND?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both NOVIA and GIRLFRIEND mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 67], "QuestionAlt", {randomOrder:false, q: "Is AFILIADA an acceptable translation of GIRLFRIEND?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both AFILIADA and GIRLFRIEND mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 68], "QuestionAlt", {randomOrder:false, q: "Is NOVIO an acceptable translation of BOYFRIEND?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both NOVIO and BOYFRIEND mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 68], "QuestionAlt", {randomOrder:false, q: "Is PRETENDIENTE an acceptable translation of BOYFRIEND?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PRETENDIENTE and BOYFRIEND mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 69], "QuestionAlt", {randomOrder:false, q: "Is SONIDOS an acceptable translation of PINGS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SONIDOS and PINGS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 69], "QuestionAlt", {randomOrder:false, q: "Is PULSOS an acceptable translation of PINGS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PULSOS and PINGS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 70], "QuestionAlt", {randomOrder:false, q: "Is MANERAS an acceptable translation of WAYS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MANERAS and WAYS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 70], "QuestionAlt", {randomOrder:false, q: "Is CAMINOS an acceptable translation of WAYS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAMINOS and WAYS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 71], "QuestionAlt", {randomOrder:false, q: "Is TRABAJO an acceptable translation of JOB?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TRABAJO and JOB mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 71], "QuestionAlt", {randomOrder:false, q: "Is PUESTO an acceptable translation of JOB?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PUESTO and JOB mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 72], "QuestionAlt", {randomOrder:false, q: "Is TIEMPO an acceptable translation of TIME?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TIEMPO and TIME mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 72], "QuestionAlt", {randomOrder:false, q: "Is MESES an acceptable translation of TIME?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MESES and TIME mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 73], "QuestionAlt", {randomOrder:false, q: "Is CONFESIÓN an acceptable translation of CONFESSION?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CONFESIÓN and CONFESSION mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 73], "QuestionAlt", {randomOrder:false, q: "Is REVELACIÓN an acceptable translation of CONFESSION?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both REVELACIÓN and CONFESSION mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 74], "QuestionAlt", {randomOrder:false, q: "Is IMAGENES an acceptable translation of PICTURE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both IMAGENES and PICTURE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 74], "QuestionAlt", {randomOrder:false, q: "Is CUADRO an acceptable translation of PICTURE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CUADRO and PICTURE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 75], "QuestionAlt", {randomOrder:false, q: "Is DISCO an acceptable translation of DRIVE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both DISCO and DRIVE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 75], "QuestionAlt", {randomOrder:false, q: "Is DISPOSITIVO an acceptable translation of DRIVE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both DISPOSITIVO and DRIVE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 76], "QuestionAlt", {randomOrder:false, q: "Is SEMANAS an acceptable translation of WEEKS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SEMANAS and WEEKS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 76], "QuestionAlt", {randomOrder:false, q: "Is CASOS an acceptable translation of WEEKS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CASOS and WEEKS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 77], "QuestionAlt", {randomOrder:false, q: "Is MOMENTO an acceptable translation of MOMENT?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MOMENTO and MOMENT mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 77], "QuestionAlt", {randomOrder:false, q: "Is COYUNTURA an acceptable translation of MOMENT?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both COYUNTURA and MOMENT mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 78], "QuestionAlt", {randomOrder:false, q: "Is CORREO an acceptable translation of MAIL?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CORREO and MAIL mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 78], "QuestionAlt", {randomOrder:false, q: "Is BULTO an acceptable translation of MAIL?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both BULTO and MAIL mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 79], "QuestionAlt", {randomOrder:false, q: "Is COSAS an acceptable translation of STUFF?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both COSAS and STUFF mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 79], "QuestionAlt", {randomOrder:false, q: "Is SUBSTANCIA an acceptable translation of STUFF?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both SUBSTANCIA and STUFF mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 80], "QuestionAlt", {randomOrder:false, q: "Is PUNTOS an acceptable translation of DOTS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both PUNTOS and DOTS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 80], "QuestionAlt", {randomOrder:false, q: "Is MANCHAS an acceptable translation of DOTS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MANCHAS and DOTS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 81], "QuestionAlt", {randomOrder:false, q: "Is AMOR an acceptable translation of LOVE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both AMOR and LOVE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 81], "QuestionAlt", {randomOrder:false, q: "Is RAPTO an acceptable translation of LOVE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both RAPTO and LOVE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 82], "QuestionAlt", {randomOrder:false, q: "Is MUJER an acceptable translation of WOMAN?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MUJER and WOMAN mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 82], "QuestionAlt", {randomOrder:false, q: "Is DONCELLA an acceptable translation of WOMAN?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both DONCELLA and WOMAN mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 83], "QuestionAlt", {randomOrder:false, q: "Is TELEFONO an acceptable translation of PHONE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both TELEFONO and PHONE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 83], "QuestionAlt", {randomOrder:false, q: "Is APARATO an acceptable translation of PHONE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both APARATO and PHONE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 84], "QuestionAlt", {randomOrder:false, q: "Is NIÑOS an acceptable translation of KIDS?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both NIÑOS and KIDS mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 84], "QuestionAlt", {randomOrder:false, q: "Is JUVENTUDES an acceptable translation of KIDS?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both JUVENTUDES and KIDS mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 85], "QuestionAlt", {randomOrder:false, q: "Is VERDAD an acceptable translation of TRUTH?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VERDAD and TRUTH mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 85], "QuestionAlt", {randomOrder:false, q: "Is REALIDAD an acceptable translation of TRUTH?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both REALIDAD and TRUTH mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 86], "QuestionAlt", {randomOrder:false, q: "Is AMIGA an acceptable translation of FRIEND?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both AMIGA and FRIEND mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 86], "QuestionAlt", {randomOrder:false, q: "Is CAMARADA an acceptable translation of FRIEND?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CAMARADA and FRIEND mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 87], "QuestionAlt", {randomOrder:false, q: "Is COSA an acceptable translation of THING?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both COSA and THING mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 87], "QuestionAlt", {randomOrder:false, q: "Is OBJETO an acceptable translation of THING?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both OBJETO and THING mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 88], "QuestionAlt", {randomOrder:false, q: "Is VOZ an acceptable translation of VOIC?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both VOZ and VOIC mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 88], "QuestionAlt", {randomOrder:false, q: "Is TONO an acceptable translation of VOIC?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both TONO and VOIC mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 89], "QuestionAlt", {randomOrder:false, q: "Is BEBÉ an acceptable translation of BABY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both BEBÉ and BABY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 89], "QuestionAlt", {randomOrder:false, q: "Is MAMÓN an acceptable translation of BABY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MAMÓN and BABY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 90], "QuestionAlt", {randomOrder:false, q: "Is POBREZA an acceptable translation of POVERTY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both POBREZA and POVERTY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 90], "QuestionAlt", {randomOrder:false, q: "Is MENDIGOS an acceptable translation of POVERTY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MENDIGOS and POVERTY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 91], "QuestionAlt", {randomOrder:false, q: "Is NIÑA an acceptable translation of GIRL?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both NIÑA and GIRL mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 91], "QuestionAlt", {randomOrder:false, q: "Is DAMISELA an acceptable translation of GIRL?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both DAMISELA and GIRL mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 92], "QuestionAlt", {randomOrder:false, q: "Is IMBÉCIL an acceptable translation of JERK?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both IMBÉCIL and JERK mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 92], "QuestionAlt", {randomOrder:false, q: "Is PÍCARO an acceptable translation of JERK?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PÍCARO and JERK mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 93], "QuestionAlt", {randomOrder:false, q: "Is CASO an acceptable translation of CASE?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both CASO and CASE mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 93], "QuestionAlt", {randomOrder:false, q: "Is MUESTRA an acceptable translation of CASE?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both MUESTRA and CASE mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 94], "QuestionAlt", {randomOrder:false, q: "Is ESTAFADOR an acceptable translation of SCAMMER?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both ESTAFADOR and SCAMMER mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 94], "QuestionAlt", {randomOrder:false, q: "Is PILLO an acceptable translation of SCAMMER?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both PILLO and SCAMMER mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 95], "QuestionAlt", {randomOrder:false, q: "Is DÍA an acceptable translation of DAY?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both DÍA and DAY mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 95], "QuestionAlt", {randomOrder:false, q: "Is AMANECER an acceptable translation of DAY?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both AMANECER and DAY mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 96], "QuestionAlt", {randomOrder:false, q: "Is SEMANA an acceptable translation of WEEK?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both SEMANA and WEEK mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 96], "QuestionAlt", {randomOrder:false, q: "Is ASUNTO an acceptable translation of WEEK?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both ASUNTO and WEEK mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],


[["CSA-naturalSpanish", 97], "QuestionAlt", {randomOrder:false, q: "Is MADRE an acceptable translation of PARENT?"},
                     "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                     "Question",       {q: "Do you know what both MADRE and PARENT mean?",
                                        as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],
    
[["CSA-unnaturalSpanish", 97], "QuestionAlt", {randomOrder:false, q: "Is CREADORA an acceptable translation of PARENT?"},
                        "AcceptabilityJudgment", {s: {html: "<center><p style='font-size: xxx-large'>How confident are you in your acceptability rating of that last translation?</p></center>"}},
                         "Question",       {q: "Do you know what both CREADORA and PARENT mean?",
                                            as: ["Yes, I know both words", 
                                                 "No, I don't know either word", 
                                                 "I only know the Spanish word",
                                                 "I only know the English word"]}],




    
];






























