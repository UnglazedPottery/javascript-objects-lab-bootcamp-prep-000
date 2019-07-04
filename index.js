var recipes = {bread: "starter"}

/*updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, { [key]: value })
}*/

destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign(object, {key: value})
}

deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
  return key
}