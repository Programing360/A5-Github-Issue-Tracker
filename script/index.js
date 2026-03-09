const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
fetch(url)
  .then((res) => res.json())
  .then((data) => showGithubCart(data.data));

// "status": "success",
// "message": "Issues fetched successfully",
// "data": [
// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },
const showGithubCart = (carts) => {
  const allCart = document.getElementById("all-cart");

  //   allBtn style
  const allBtn = document.getElementById("allBtn");
  allBtn.classList.add("bg-[#4A00FF]", "text-white");

  //   totalData show
  const totalData = document.getElementById("totalData");
  // totalData.innerText(carts.length)
  totalData.innerText = carts.length;

  //   console.log(allCart);
  carts.forEach((cart) => {
    const cartSection = document.createElement("div");

    // console.log(cart);
    cartSection.innerHTML = `
            <div onclick="handelShowModel(${cart.id})" class="h-full p-4 space-y-3 rounded shadow-md border-t-2 ${cart.status === "open" ? "border-t-[#00A96E]" : "border-t-[#A855F7]"} ">
            <div class="flex justify-between">
            ${cart.status === "open" ? '<img src="./assets/Open-Status.png" alt="" />' : '<img src="./assets/Closed- Status .png" alt="" />'}
              
              <p class="${cart.priority === "low" ? "bg-[#e9eaf0] px-4 text-[#9CA3AF]" : "bg-[#FEECEC] px-4 text-[#EF4444]"} font-medium rounded-full">${cart.priority}</p>
            </div>
            <div class="space-y-2">
              <h1 class="text-lg text-md font-semibold">
                ${cart.title}
              </h1>
              <p class="text-[#64748B]">
                ${cart.description}
              </p>
              <span
                class="bg-[#FEECEC] px-4 rounded-full text-[#EF4444] font-medium"
                ><i class="fa-solid fa-bug" style="color: rgb(239, 68, 68);"></i> ${cart.labels[0]}</span
              >
              
              ${
                cart.labels[1] !== undefined
                  ? `<span
                class="bg-[#FFF8DB] px-4 rounded-full text-[#D97706] font-medium"
                ><i class="fa-regular fa-life-ring" style="color: rgb(219, 127, 19)"></i> ${cart.labels[1]}</span
              >`
                  : ""
              }
            </div>
            <hr class="text-gray-300"/>
            <div>
              <p class="text-[#64748B]">#1 by ${cart.author}</p>
              <p class="text-[#64748B]">${new Date(cart.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
         
        `;

    allCart.append(cartSection);
  });
};

// show Model
// {
// "status": "success",
// "message": "Issue fetched successfully",
// "data": {
// "id": 33,
// "title": "Add bulk operations support",
// "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
// "status": "open",
// "labels": [
// "enhancement"
// ],
// "priority": "low",
// "author": "bulk_barry",
// "assignee": "",
// "createdAt": "2024-02-02T10:00:00Z",
// "updatedAt": "2024-02-02T10:00:00Z"
// }
// }
const handelShowModel = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  modalDataDetails(data.data);
};

const modalDataDetails = (data) => {
  console.log(data);
  const modelId = document.getElementById("modalDetails");
  modelId.innerHTML = "";
  const modelSection = document.createElement("div");

  modelSection.innerHTML = `
            <div>
                <h1 class="text-2xl font-bold text-[#1F2937] pb-2">
                  ${data.title}
                </h1>
                <div class="flex items-center gap-4">
                  <p class="text-white rounded-full px-4 bg-[#00A96E]">${data.status}</p>
                  <ul class="flex items-center gap-3">
                    <li class="text-[#64748B] text-[16px]">
                      Opened by ${data.author}
                    </li>
                    <li class="text-[#64748B] text-[16px]">${new Date(data.updatedAt).toLocaleDateString()}</li>
                  </ul>
                </div>
                <div class="py-8">
                  <span
                class="bg-[#FEECEC] px-4 rounded-full text-[#EF4444] font-medium"
                ><i class="fa-solid fa-bug" style="color: rgb(239, 68, 68);"></i> ${data.labels[0]}</span
              >
              ${
                data.labels[1] !== undefined
                  ? `<span
                class="bg-[#FFF8DB] px-4 rounded-full text-[#D97706] font-medium"
                ><i class="fa-regular fa-life-ring" style="color: rgb(219, 127, 19)"></i> ${data.labels[1]}</span
              >`
                  : ""
              }
                </div>
                <p class="text-[#64748B] text-[16px] pb-8">
                  ${data.description}
                </p>
                <div class="flex items-center gap-2 bg-[#f8fafc] p-4">
                  <div class="flex-1">
                    <h3 class="text-[#64748B] text-[16px]">Assignee</h3>
                    <p class="text-xl font-semibold text-[#1F2937]">
                      ${data.author}
                    </p>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-[#64748B] text-[16px] pb-2 ">Priority:</h3>
                    <p
                      class="text-[16px] font-medium ${data.priority === "low" ? "bg-[#e9eaf0] px-4 text-[#9CA3AF]" : "bg-[#FEECEC] px-4 text-[#EF4444]"} w-15 text-center rounded-full"
                    >
                      ${data.priority}
                    </p>
                  </div>
                </div>
              </div>
    `;

  modelId.append(modelSection);
  my_modal_5.showModal(data.id);
  //   console.log(id);
};

// btn style
const handleAllSection = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const totalData = document.getElementById("totalData");
      totalData.innerText = data.data.length;
    });

  const allCart = document.getElementById("all-cart");
  allCart.classList.remove("hidden");

  const openCart = document.getElementById("open-carts");
  openCart.classList.add("hidden");

  const allBtn = document.getElementById("allBtn");
  allBtn.classList.add("bg-[#4A00FF]", "text-white");

  const openBtn = document.getElementById("openBtn");
  openBtn.classList.remove("bg-[#4A00FF]", "text-white");

  const closeBtn = document.getElementById("closeBtn");
  closeBtn.classList.remove("bg-[#4A00FF]", "text-white");

  const closeCart = document.getElementById("close-carts");
  closeCart.classList.add("hidden");
};
const handleOpenSection = () => {
  const allCart = document.getElementById("all-cart");
  allCart.classList.add("hidden");

  const openCart = document.getElementById("open-carts");
  openCart.classList.remove("hidden");
  openCart.innerHTML = "";
  const closeCart = document.getElementById("close-carts");
  closeCart.classList.add("hidden");
  const allBtn = document.getElementById("allBtn");
  allBtn.classList.remove("bg-[#4A00FF]", "text-white");

  const openBtn = document.getElementById("openBtn");
  openBtn.classList.add("bg-[#4A00FF]", "text-white");

  const closeBtn = document.getElementById("closeBtn");
  closeBtn.classList.remove("bg-[#4A00FF]", "text-white");

  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => openCartSection(data.data));
};

const openCartSection = (data) => {
  const openCarts = document.getElementById("open-carts");

  const openCart = data.filter((cart) => cart.status === "open");

  const totalData = document.getElementById("totalData");
  totalData.innerText = openCart.length;

  for (const cart of openCart) {
    const cartSections = document.createElement("div");
    cartSections.innerHTML = `
            <div onclick="handelShowModel(${cart.id})" class="h-full p-4 space-y-3 rounded shadow-md border-t-2 ${cart.status === "open" ? "border-t-[#00A96E]" : "border-t-[#A855F7]"} ">
            <div class="flex justify-between">
            ${cart.status === "open" ? '<img src="./assets/Open-Status.png" alt="" />' : '<img src="./assets/Closed- Status .png" alt="" />'}
              
              <p class="${cart.priority === "low" ? "bg-[#e9eaf0] px-4 text-[#9CA3AF]" : "bg-[#FEECEC] px-4 text-[#EF4444]"} font-medium rounded-full">${cart.priority}</p>
            </div>
            <div class="space-y-2">
              <h1 class="text-lg text-md font-semibold">
                ${cart.title}
              </h1>
              <p class="text-[#64748B]">
                ${cart.description}
              </p>
              <span
                class="bg-[#FEECEC] px-4 rounded-full text-[#EF4444] font-medium"
                ><i class="fa-solid fa-bug" style="color: rgb(239, 68, 68);"></i> ${cart.labels[0]}</span
              >
              ${
                cart.labels[1] !== undefined
                  ? `<span
                class="bg-[#FFF8DB] px-4 rounded-full text-[#D97706] font-medium"
                ><i class="fa-regular fa-life-ring" style="color: rgb(219, 127, 19)"></i> ${cart.labels[1]}</span
              >`
                  : ""
              }
            </div>
            <hr class="text-gray-300"/>
            <div>
              <p class="text-[#64748B]">#1 by ${cart.author}</p>
              <p class="text-[#64748B]">${new Date(cart.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
         
        `;

    openCarts.append(cartSections);
  }
};

const handleCloseSection = () => {
  const closeCart = document.getElementById("close-carts");
  closeCart.classList.remove("hidden");
  closeCart.innerHTML = "";

  const closeBtn = document.getElementById("closeBtn");
  closeBtn.classList.add("bg-[#4A00FF]", "text-white");

  const allBtn = document.getElementById("allBtn");
  allBtn.classList.remove("bg-[#4A00FF]", "text-white");

  const openBtn = document.getElementById("openBtn");
  openBtn.classList.remove("bg-[#4A00FF]", "text-white");

  const allCart = document.getElementById("all-cart");
  allCart.classList.add("hidden");

  const openCart = document.getElementById("open-carts");
  openCart.classList.add("hidden");

  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => closeCartSection(data.data));
};

const closeCartSection = (data) => {
  const closeCarts = document.getElementById("close-carts");

  const closeCart = data.filter((cart) => cart.status === "closed");
  const totalData = document.getElementById("totalData");
  totalData.innerText = closeCart.length;
  for (const cart of closeCart) {
    const CloseCartSections = document.createElement("div");
    CloseCartSections.innerHTML = `
            <div onclick="handelShowModel(${cart.id})" class="h-full p-4 space-y-3 rounded shadow-md border-t-2 ${cart.status === "open" ? "border-t-[#00A96E]" : "border-t-[#A855F7]"} ">
            <div class="flex justify-between">
            ${cart.status === "open" ? '<img src="./assets/Open-Status.png" alt="" />' : '<img src="./assets/Closed- Status .png" alt="" />'}
              
              <p class="${cart.priority === "low" ? "bg-[#e9eaf0] px-4 text-[#9CA3AF]" : "bg-[#FEECEC] px-4 text-[#EF4444]"} font-medium rounded-full">${cart.priority}</p>
            </div>
            <div class="space-y-2">
              <h1 class="text-lg text-md font-semibold">
                ${cart.title}
              </h1>
              <p class="text-[#64748B]">
                ${cart.description}
              </p>
              <span
                class="bg-[#FEECEC] px-4 rounded-full text-[#EF4444] font-medium"
                ><i class="fa-solid fa-bug" style="color: rgb(239, 68, 68);"></i> ${cart.labels[0]}</span
              >
              ${
                cart.labels[1] !== undefined
                  ? `<span
                class="bg-[#FFF8DB] px-4 rounded-full text-[#D97706] font-medium"
                ><i class="fa-regular fa-life-ring" style="color: rgb(239, 68, 68)"></i> ${cart.labels[1]}</span
              >`
                  : ""
              }
            </div>
            <hr class="text-gray-300"/>
            <div>
              <p class="text-[#64748B]">#1 by ${cart.author}</p>
              <p class="text-[#64748B]">${new Date(cart.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
         
        `;

    closeCarts.append(CloseCartSections);
  }
};


