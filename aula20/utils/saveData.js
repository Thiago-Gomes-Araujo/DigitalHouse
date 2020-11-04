const fs = require("fs");
const path = require("path");

const SaveData = (array,file) =>{
  let dataString = JSON.stringify(array);
  let filePath = path.join("data",file)

  fs.writeFileSync(filePath, 'module.exports = ');
  fs.appendFile(filePath,dataString);
}

module.exports = SaveData;