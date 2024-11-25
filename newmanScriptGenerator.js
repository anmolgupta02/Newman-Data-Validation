const { exec } = require('child_process')
const path = require('path')


function genrateCommand(collectionFilePath, envFilePath, envVariables, iterationDataFilePath, reporters){


   const normalizedCollectionFilePath = path.normalize(collectionFilePath);
   const normalizedEnvFilePath = path.normalize(envFilePath);    
   const normalizedIterationDataFilePath = path.normalize(iterationDataFilePath);


    let command = `newman run "${normalizedCollectionFilePath}" --environment "${normalizedEnvFilePath}"` ;

    for(const[key, value] of Object.entries(envVariables)) {
        command += ` --env-var ${key}=${value}`
    }

    command += ` --iteration-data "${normalizedIterationDataFilePath}" --reporters ${reporters} `


    return command;


}


function executeCommand(generatedCommand){

    exec(generatedCommand, (error,stdout,stderr)=>{
        if(error){
            console.error(`Error executing the command ${error}`);
            
        }

        if(stderr){
            console.error(`Command Produced error : ${stderr}`);
            
        }

        console.log("Newman Command Output: ")
        console.log(stdout);
        
    })

}


function openReport(reportPath){

    const openComand = `start "" "${reportPath}"`;

    exec(openComand, (error)=>{
        if(error){
            console.error(`Error Opening Report : ${error}`);
            
        } else{
            console.log("report opened Successfully. ");
            
        }
    })  

}

const collectionFilePath = "C:/ANMOL/Fenergo Project/Data Migration/Automtion Scripts/Output/Collection/CompanyRecordsLocation/Fenergo Migration - Company Record Location Validation.postman_collection.json";
const envFilePath = "C:/ANMOL/Fenergo Project/Data Migration/Automtion Scripts/Output/Env Files/Fenergo-DEV.postman_environment.json";
const envVariables = {
    "client_id" : "vistra-sdlc-dev",
    "client_secret" : "31c690fd-4955-ca52-5311-30a08993bde1",
    "token" : "Enter Token here."
};
const iterationDataFilePath = "C:/ANMOL/Fenergo Project/Data Migration/Automtion Scripts/Inputs Files/CompanyRecordLocationTesting2.csv";
const reporters = "htmlextra";


const newmanCommand = genrateCommand(collectionFilePath, envFilePath, envVariables, iterationDataFilePath, reporters)



console.log("\n" + newmanCommand +"\n");


executeCommand(newmanCommand)