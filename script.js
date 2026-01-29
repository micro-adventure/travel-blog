const planningCategories = [
    { title: "Destinations", image: "https://placehold.co/600x400/1d1d1f/FFF?text=Destinations" },
    { title: "Itineraries", image: "https://placehold.co/600x400/E63946/FFF?text=Itineraries" },
    { title: "Travel Gear", image: "https://placehold.co/600x400/2a9d8f/FFF?text=Gear" },
    { title: "Travel Tips", image: "https://placehold.co/600x400/e9c46a/333?text=Tips" }
];

const topArticles = [
    { title: "10 Best Things To Do In Bangkok", category: "Thailand", image: "https://placehold.co/800x600/111/FFF?text=Bangkok", date: "Oct 12, 2023" },
    { title: "The Ultimate Guide to Solo Travel", category: "Tips", image: "https://placehold.co/800x600/222/FFF?text=Solo+Travel", date: "Sep 28, 2023" },
    { title: "Backpacking Japan: A 2-Week Itinerary", category: "Japan", image: "https://placehold.co/800x600/333/FFF?text=Japan", date: "Sep 15, 2023" },
    { title: "How To Pack Light For Winter", category: "Gear", image: "https://placehold.co/800x600/444/FFF?text=Packing", date: "Aug 30, 2023" },
    { title: "Budget Travel in Europe: A Survival Guide", category: "Europe", image: "https://placehold.co/800x600/555/FFF?text=Europe", date: "Aug 10, 2023" },
    { title: "Best Street Food in Mexico City", category: "Mexico", image: "https://placehold.co/800x600/666/FFF?text=Tacos", date: "Jul 22, 2023" }
];

// Load Planning Categories (Curated Collections)
const planningGrid = document.getElementById('planning-grid');
if (planningGrid) {
    planningCategories.forEach(item => {
        planningGrid.innerHTML += `
            <a href="#" class="group relative block overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer">
                <!-- Image -->
                <img src="${item.image}" alt="${item.title}" class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110">
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <!-- Text -->
                <div class="absolute bottom-0 left-0 p-6">
                    <h3 class="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">${item.title}</h3>
                </div>
            </a>
        `;
    });
}

// Load Top Articles (Latest Adventures)
const articlesGrid = document.getElementById('top-articles');
if (articlesGrid) {
    topArticles.forEach(article => {
        articlesGrid.innerHTML += `
            <article class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                <!-- Image Container -->
                <div class="relative h-56 overflow-hidden">
                    <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 uppercase tracking-wide z-10">
                        ${article.category}
                    </div>
                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                </div>
                <!-- Content -->
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors cursor-pointer">
                        ${article.title}
                    </h3>
                    <div class="mt-auto flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-50">
                        <span>${article.date}</span>
                        <span class="flex items-center text-gray-500 font-medium">Read Article <span class="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span></span>
                    </div>
                </div>
            </article>
        `;
    });
}
