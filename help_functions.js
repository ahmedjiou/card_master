// A funtion to create a num respecting the DECK naming i choose  
   function createRandomNum() {
    // Generate a random number between 2 and 14 with 2 and 14 included 
    let type_num = Math.floor(Math.random() * (14 - 2 + 1)) + 2; 
    // Generate a random number between 1 and 4 (included also)
    let style_num = Math.floor(Math.random() * (4 - 1 + 1)) + 1; 
    // Create the number we should return to select a random card 
    let card_num = (type_num * 10) + style_num;

    // We return the actual card number and the correct answer with it 
    return {
    card_num, 
    style_num   
  };
}



// Exporting this function to be used in our main file 
module.exports = {createRandomNum};