const container = document.getElementById("name-container"),
  count = 99,
  array = [];

const fetchNames99 = async () => {
  for (let i = 0; i <= count; i++) {
    array.push(i);
  }
  await names99(array.toString());
};

const names99 = async (id) => {
  const url = `http://api.aladhan.com/asmaAlHusna/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data);
  for (let i = 0; i <= 98; i++) {
    createNames(data.data[i]);
  }
};
const createNames = (eachName) => {
  const NamesOutput = document.createElement("div");
  NamesOutput.classList.add("card");

  // console.log(eachName)

  const { number, name, transliteration } = eachName;
  const { meaning } = eachName.en;

  const namesInnerHtml = `
<div class="image-container">
<img src="https://www.islamicappz.com/wp-content/uploads/2019/05/allh_names.png" alt="https://www.islamicappz.com/wp-content/uploads/2019/05/allh_names.png">
</div>
<div class="info">
<span class="number">#${number}</span>
<h3 class="name">${name}</h3>
<h6 class="name">read: ${transliteration}</h6>
<small>mean: <span>${meaning}</span> </small>
</div>
`;
  NamesOutput.innerHTML = namesInnerHtml;
  container.appendChild(NamesOutput);
};
fetchNames99();
