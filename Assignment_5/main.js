const readerProfile = {
  fullName: "Abylaikhan",
  birthYear: 2008,
  isActiveReader: true,
  favoriteBooks: ["Abai Zholy", "1984", "The Little Prince"]
};

document.getElementById("submit").addEventListener("click", () => {
  
  readerProfile.fullName = document.getElementById("fullName").value;
  readerProfile.birthYear = Number(document.getElementById("birthYear").value);

  const currentYear = new Date().getFullYear();
  const readerAge = currentYear - readerProfile.birthYear;
  const ageInMonths = readerAge * 12;

  const totalBooks = readerProfile.favoriteBooks.length;

  console.log("Updated Name:", readerProfile.fullName);
  console.log("Calculated Age:", readerAge);
  console.log("Age in Months:", ageInMonths);
  console.log("Initial Book Count:", totalBooks);
  console.log("Full Profile:", readerProfile);
});

const bookList = document.getElementById("bookList");
const bookInput = document.getElementById("bookInput");
const addBookBtn = document.getElementById("addBookBtn");
const removeBookBtn = document.getElementById("removeBookBtn");

addBookBtn.addEventListener("click", () => {
  const newBook = bookInput.value.trim();
  if (newBook !== "") {
    const li = document.createElement("li");
    li.textContent = newBook;
    bookList.appendChild(li);
    bookInput.value = ""; 
  }
});

removeBookBtn.addEventListener("click", () => {
  if (bookList.lastElementChild) {
    bookList.removeChild(bookList.lastElementChild);
  }
});