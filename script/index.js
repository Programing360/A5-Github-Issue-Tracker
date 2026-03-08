
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
  console.log(allCart);
  carts.forEach((cart) => {
    const cartSection = document.createElement("div");
    console.log(cart.status)
    cartSection.innerHTML = `
            <div class="p-4 space-y-3 rounded shadow-md border-t-2 ${cart.status === 'open' ? 'border-t-[#00A96E]': 'border-t-[#A855F7]'} ">
            <div class="flex justify-between">
              <img src="./assets/Open-Status.png" alt="" />
              <p class="bg-[#FEECEC] px-2 text-[#EF4444] font-medium">HIGH</p>
            </div>
            <div class="space-y-2">
              <h1 class="text-md font-semibold">
                Fix navigation menu on mobile devices
              </h1>
              <p class="text-[#64748B]">
                The navigation menu doesn't collapse properly on mobile
                devices...
              </p>
              <span
                class="bg-[#FEECEC] px-4 rounded-full text-[#EF4444] font-medium"
                >BUG</span
              >
              <span
                class="bg-[#FFF8DB] px-4 rounded-full text-[#D97706] font-medium"
                >HELP WANTED</span
              >
            </div>
            <hr class="text-gray-300"/>
            <div>
              <p class="text-[#64748B]">#1 by john_doe</p>
              <p class="text-[#64748B]">1/15/2024</p>
            </div>
          </div>
        `;

    allCart.append(cartSection)    
  });
};
