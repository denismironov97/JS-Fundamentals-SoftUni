function extractFile(stringVal) {
  let startIndexOfFileName = stringVal.lastIndexOf("\\") + 1;
  let endIndexOfFileName = stringVal.lastIndexOf(".");
  let fileName = stringVal.substring(startIndexOfFileName, endIndexOfFileName);
  let extensionType = stringVal.substring(endIndexOfFileName + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extensionType}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\Linked.List.cs");
