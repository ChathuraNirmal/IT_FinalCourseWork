let cards = document.getElementById("cards");

let body = "";

fetch("menu.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      body += `
        <div class="container mx-auto px-8">
          <a
            href="${element.href}"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full max-w-screen-lg my-8 hover:bg-gray-100"
          >
            <img
              class="object-cover w-full md:w-1/2 h-auto rounded-t-lg md:rounded-none md:rounded-s-lg"
              src="${element.image}"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
              <h1
                class="mb-4 text-2xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl"
              >
                ${element.heading}
              </h1>
            </div>
          </a>
        </div>`;
    });

    cards.innerHTML = body;
  });
