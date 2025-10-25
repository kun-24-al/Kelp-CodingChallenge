module.exports = function transformUser(obj) {
  const name = `${obj.name.firstName} ${obj.name.lastName}`;
  const age = parseInt(obj.age);
  const { name: _, age: __, ...rest } = obj;

  const address = rest.address || null;
  const additional_info = JSON.parse(JSON.stringify(rest));
  delete additional_info.address;

  return { name, age, address, additional_info };
};
