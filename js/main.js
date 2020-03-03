function buildOutput() {
  let template = document.getElementById("template-input").value;
  let placeholder = template.match(/^.*?(\d+).*$/)[1];
  let repeat = parseInt(document.getElementById("repeat-input").value);
  let start = parseInt(document.getElementById("start-input").value);
  let content = "";
  for (let n = 0; n < repeat; n++) {
    let padding = new Array(placeholder.length + 1).join('0');
    let replacement = (padding + (n + start)).slice(-padding.length);
    content += template.replace(new RegExp(placeholder, 'g'), replacement) + "\n"
  }
  let area = document.getElementById("output-area");
  area.value = content
}

function clearOutput() {
  document.getElementById("output-area").value = ""
}

function copyOutput() {
  let element = document.getElementById("output-area")
  element.focus()
  element.setSelectionRange(0, element.value.length)
  document.execCommand("copy")
}

function copyToTemplate(element) {
  document.getElementById("template-input").value = element.innerHTML
}
