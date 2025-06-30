const add = async (i) => {
  await random();
  let div = document.createElement("div");
  div.innerHTML = i;
  document.body.append(div);
};
const random = () => {
  return new Promise((resolve, reject) => {
    timeout = 2 + 3000 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

let text = [
  "Initializing hacking",
  "Reading your files",
  "Password files detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];
for (const i of text) {
  add(i);
}
