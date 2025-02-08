const titleOne = document.getElementById("title-one");
const titleTwo = document.getElementById("title-two");
const titleThree = document.getElementById("title-three");
const titleFour = document.getElementById("title-four");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalText = document.getElementById("modalText");
const myModal = document.getElementById("my-modal");
const overlay = document.getElementById("modalOverlay");

async function fetchData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Kunde inte hämta data");
    }
    const data = await response.json();
    console.log(data);

    return {
      titleOne: data[0]["title-one"],
      titleTwo: data[1]["title-two"],
      titleThree: data[2]["title-three"],
      titleFour: data[3]["title-four"],
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    return "Kunde inte ladda texten.";
  }
}

titleOne.addEventListener("click", async () => {
  const data = await fetchData();
  modalText.textContent = data.titleOne;
  myModal.style.display = "block";
  overlay.style.display = "block";
});

titleTwo.addEventListener("click", async () => {
  const data = await fetchData();
  modalText.textContent = data.titleTwo;
  myModal.style.display = "block";
  overlay.style.display = "block";
});

titleThree.addEventListener("click", async () => {
  const data = await fetchData();
  modalText.textContent = data.titleThree;
  myModal.style.display = "block";
  overlay.style.display = "block";
});

titleFour.addEventListener("click", async () => {
  const data = await fetchData();
  modalText.textContent = data.titleFour;
  myModal.style.display = "block";
  overlay.style.display = "block";
});

function closeModal() {
  myModal.style.display = "none";
  overlay.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
