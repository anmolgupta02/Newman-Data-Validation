const responseSoF = pm.response.json().data.properties.sourceOfFundsDG.collections;

const expectedData = { 
     sourceOfFunds: pm.iterationData.get('sourceOfFunds_sourceOfFunds'),
     descriptionOfSourceOfFunds : pm.iterationData.get('sourceOfFunds_descriptionSourceOfFunds'),
};


pm.test('Validating the presence of given source of funds details', function(){

    const matchFound = checkSoF(expectedData, responseSoF)

    pm.expect(matchFound).to.be.true;

})


function checkSoF(expectedData, responseSoF){

    let matcher=false; 

    Object.keys(responseSoF).forEach(oneRecord =>{

        let record = responseSoF[oneRecord].properties;

        console.log(expectedData);
        console.log(record);

         
        let checkerForDesc = false;
        if(record.sourceOfFunds_descriptionSourceOfFunds===expectedData.descriptionOfSourceOfFunds)
        {
            checkerForDesc=true;
        }


        let checkForSource = false;
        if(record.sourceOfFunds_sourceOfFunds === expectedData.sourceOfFunds){
            checkForSource = true;
        }

        if(checkForSource && checkerForDesc){
            matcher=true;
        }
    })

    return matcher


}