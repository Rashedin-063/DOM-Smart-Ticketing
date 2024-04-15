function getValue(id) {
  const element = document.getElementById(id).innerText;
  const value = parseInt(element);
  return value;
}

function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}