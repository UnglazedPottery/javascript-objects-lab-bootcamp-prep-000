var recipes = {bread: "starter"}

function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
  return key
}