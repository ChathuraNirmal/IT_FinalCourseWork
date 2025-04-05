let cards = document.getElementById("cards");

let body = "";

fetch("submarineMenu.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      body += `
        <div
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm "
          style="background-color: ${element.colorCode}"
        >
          <a href="#">
            <img 
              class="p-10 rounded-t-lg"
              src="${element.imageSource}"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5
                class="text-xl font-semibold tracking-tight text-gray-900  text-left"
              >
                ${element.submarineType}
              </h5>
            </a>
            <div class="flex items-center justify-center mt-2.5 mb-5">
              <!-- Add stars or ratings here if needed -->
            </div>
              <span class="text-3xl font-bold text-gray-900">
                ${element.price}
              </span>
          </div>
        </div>
      `;
    });

    cards.innerHTML = body;
  });
