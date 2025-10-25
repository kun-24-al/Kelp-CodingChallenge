function parseCSV(csvString) {
  const lines = csvString.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const obj = {};
    headers.forEach((header, i) => {
      setNestedProperty(obj, header, values[i]);
    });
    return obj;
  });
}

function setNestedProperty(obj, path, value) {
  const keys = path.split(".");
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = current[key] || {};
      current = current[key];
    }
  });
}

module.exports = parseCSV;
