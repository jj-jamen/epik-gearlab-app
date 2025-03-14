// {% comment %} {{ 'tw-output.css' | asset_url | stylesheet_tag }}

// <div id="gl-modal" class="hidden fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-50">
//   <!-- Modal container -->
//   <div class="bg-white w-[90vw] h-[85vh] shadow-xl flex flex-col">
//     <!-- Modal header -->
//     <div class="flex items-center justify-between p-4">
//       <div class="flex items-center justify-center">
//         <span>{{ shop.brand.logo | image_url: width: 75 | image_tag: width: 75, height: 75 }}</span>
//         <h1 class="text-4xl ml-2 font-header-bold">Gear Lab</h1>
//       </div>
//       <button id="gl-modal-close" class="text-gray-400 hover:text-gray-500 focus:outline-none mr-5">
//         <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
//         </svg>
//       </button>
//     </div>
//     <!-- Modal content (empty) -->
//     <div class="flex-1 p-6 overflow-y-auto">

//     <img id="modal-image"
//           alt="Product Image"
//           loading="lazy"
//           width="200"
//           height="100">
//     <h2 id="modal-title"></h2>
//     <span id="modal-price">{{ 0 | money }}</span>

//     </div>
//     <!-- Modal footer -->
//     <div class="p-4 border-t flex justify-end">
//       <button id="gl-modal-confirm" class="px-4 py-2 bg-epik-yellow border-1 border-black text-black hover:bg-opacity-80" type="submit">Add to Cart
//       </button>
//     </div>
//   </div>

// </div>

// <button id="gl-button" type="button" class="btn btn--full mb-3 bg-epik-yellow border-1 border-black text-black"
//         data-product-handle="{{ product.handle }}">
//     <span>
//         {{ block.settings.gl_button_title }}
//     </span>
// </button>

// <script>
//   document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("gl-button").addEventListener("click", function () {
//       // Get product handle for the request
//       const productHandle = this.dataset.productHandle;

//       // Make GET request to Shopify's Product API
//       fetch(`/products/${productHandle}.js`)
//         .then(response => {
//           if (!response.ok) throw new Error('Network response was not ok');
//           return response.json();
//         })
//         .then(product => {
//           console.log("Product data:", product);
//           let priceTemplate = document.getElementById("modal-price").textContent;
//           let formattedPrice = priceTemplate.replace("0.00", (product.price / 100).toFixed(2));

//           // Populate modal with fetched product details
//           document.getElementById("modal-title").textContent = product.title;
//           document.getElementById("modal-price").textContent = formattedPrice;
//           document.getElementById("modal-image").src = product.featured_image && product.featured_image.indexOf('//') === 0
//           ? `https:${product.featured_image}`
//           : product.featured_image;
//           // Open modal
//           document.getElementById("gl-modal").classList.remove("hidden");
//           document.getElementById("gl-modal").classList.add("flex");
//         })
//         .catch(error => {
//           console.error("Error fetching product data:", error);
//         });
//     });

//     // Close modal functionality
//     document.getElementById("gl-modal-close").addEventListener("click", function () {
//       document.getElementById("gl-modal").classList.add("hidden");
//       document.getElementById("gl-modal").classList.remove("flex");
//     });
//   });
// </script>

// {% schema %}
// {
// "name": "Gear Lab Button",
// "target": "section",
// "settings": [
//   {
//     "type": "text",
//     "id": "gl_button_title",
//     "label": "Title",
//     "default": "GEAR LAB"
//   },
// ]
// }
// {% endschema %} {% endcomment %}
