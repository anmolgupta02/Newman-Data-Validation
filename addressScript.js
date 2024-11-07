//const addresses = pm.response.json().data.properties.address.collections;



  // Read expected values from the CSV file for validation
  //const expectedData = {
//     expected_address_type: pm.iterationData.get('address_type'),
//     expected_address_line1: pm.iterationData.get('address_line1'),
//     expected_address_country: pm.iterationData.get('address_country'),
//     expected_address_city: pm.iterationData.get('address_city'),
//     expected_address_zipCodePostCode: pm.iterationData.get('address_zipCodePostCode')
// };

// Loop through each address and validate
Object.keys(addresses).forEach(addressKey => {
    const address = addresses[addressKey];
    console.log(address)

    // Validate the address against the expected values from CSV
    validateAddress(address, expectedData);
});


// Function to validate each address object
function validateAddress(address, expectedData) {
    // List the keys you expect in each address and the expected values from CSV
    const requiredKeys = {
        'address_type': expectedData.expected_address_type,
        'address_line1': expectedData.expected_address_line1,
        'address_country': expectedData.expected_address_country,
        'address_city': expectedData.expected_address_city,
        'address_zipCodePostCode': expectedData.expected_address_zipCodePostCode
    };

    // Loop through requiredKeys and compare response with CSV values using pm.expect
    Object.keys(requiredKeys).forEach(key => {
        const actualValue = address.properties[key];
        const expectedValue = requiredKeys[key];
        
        // If expectedValue is provided in the CSV, validate
        if (expectedValue) {
            pm.test(`Validation for ${key}`, function () {
                pm.expect(actualValue).to.eql(expectedValue, `Expected ${key}: "${expectedValue}", but got "${actualValue}"`);
            });
        }
    });
}

//Aproach fails as it checks for exact match from what expected file has provided and what is coming in the first obj of response. 
//there is a chance that the sequence of expectation is not match with sequence of response. 
//Aproach 2 : Checking only presence of dataset in any object of response. 
const addresses = pm.response.json().data.properties.address.collections;

const expectedData = {
    expected_address_type: pm.iterationData.get('address_type'),
    expected_address_line1: pm.iterationData.get('address_line1'),
    expected_address_line2: pm.iterationData.get('address_line2'),
    expected_address_country: pm.iterationData.get('address_country'),
    expected_address_city: pm.iterationData.get('address_city'),
    expected_address_zipCodePostCode: pm.iterationData.get('address_zipCodePostCode').toString()
};

// Function to check if any object in the collection matches the expected data
function checkForMatchingAddress(expectedData, addressCollection) {
    let matchFound = false;
    
    // Loop through each address object in the collection
    Object.keys(addressCollection).forEach(addressKey => {
        const address = addressCollection[addressKey].properties;
        let isMatch = false;
        console.log(expectedData)
        console.log(address)
        
        let checkForAddressType = false; 
        if((address.address_type === expectedData.expected_address_type)){
            
            checkForAddressType = true;
            console.log("Value for Address Type is: " +checkForAddressType)
        }


        let checkForAddress_line1 = false; 
        if((address.address_line1 === expectedData.expected_address_line1)){
            
            checkForAddress_line1 = true;
            console.log("Value for Address Line1 is: " +checkForAddress_line1)
        }


        let checkForAddress_line2 = false; 
       
        if(address.address_line2!=='undefined'){
            if((address.address_line2.trim() === 
                expectedData.expected_address_line2.trim())){
            
            checkForAddress_line2 = true;
            console.log("Value for Address Line2 is: " +checkForAddress_line2)
            }
        }
        

        let checkForAddress_city = false; 
        if((address.address_city === expectedData.expected_address_city)){ 
            checkForAddress_city = true;
            console.log("Value for Address city is: " +checkForAddress_city)
        }

        let checkForZipPostCode = false;
        if(address.address_zipCodePostCode === expectedData.expected_address_zipCodePostCode){
            checkForZipPostCode = true;
            console.log("Value for zip code is: "+checkForZipPostCode);
            
        }

        let checkForCountry = false;
        if(address.address_country === expectedData.expected_address_country){
            checkForCountry = true;
            console.log("Value for country is : "+checkForCountry);
            
        }

        if(checkForAddressType && checkForAddress_line1 && checkForAddress_line2 && 
            checkForAddress_city && checkForZipPostCode && checkForCountry){
                isMatch = true;
        }


        
        console.log("The value of isMatch is "+isMatch)
        // If a match is found, set matchFound to true
        if (isMatch) {
            matchFound = true;
        }

        if(matchFound){
            break;
            console.log("Breaking the loop now");
            
        }
    });

    // Return whether a match was found
    return matchFound;
}

// Run the check and log the result
pm.test("Validate if expected address exists in collection", function () {
    const matchFound = checkForMatchingAddress(expectedData, addresses);

    // Pass the test if a match is found, otherwise fail the test
    pm.expect(matchFound).to.be.true;
});