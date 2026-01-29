const planningCategories = [
    { title: "Get Inspired", icon: "💡", color: "bg-orange-100 text-orange-600" },
    { title: "Save For A Trip", icon: "💰", color: "bg-green-100 text-green-600" },
    { title: "Plan Your Trip", icon: "🗺️", color: "bg-blue-100 text-blue-600" },
    { title: "The Right Gear", icon: "🎒", color: "bg-red-100 text-red-600" },
    { title: "Cheap Airfare", icon: "✈️", color: "bg-purple-100 text-purple-600" },
    { title: "Accommodation", icon: "🏨", color: "bg-teal-100 text-teal-600" },
    { title: "Life On The Road", icon: "🚐", color: "bg-yellow-100 text-yellow-600" },
    { title: "Solo Female Travel", icon: "👩", color: "bg-pink-100 text-pink-600" }
];

const topArticles = [
    { title: "How to Find Cheap Flights", category: "Flights" },
    { title: "How to Find Cheap Accommodation", category: "Accommodation" },
    { title: "How to Choose a Backpack", category: "Gear" },
    { title: "16 Steps for Planning a Trip", category: "Planning" },
    { title: "My Ultimate Packing Guide", category: "Gear" },
    { title: "How to Buy Travel Insurance", category: "Insurance" },
    { title: "11 Tips for New Travelers", category: "Tips" },
    { title: "My Favorite Hostels", category: "Accommodation" },
    { title: "Solo Female Travel Tips", category: "Solo Travel" }
];

// Load Planning Categories
const planningGrid = document.getElementById('planning-grid');
if (planningGrid) {
    planningCategories.forEach(item => {
        planningGrid.innerHTML += `
            <div class="planning-card flex flex-col items-center justify-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl cursor-pointer">
                <div class="w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-3xl mb-4">
                    ${item.icon}
                </div>
                <h3 class="text-lg font-bold text-gray-800 text-center">${item.title}</h3>
            </div>
        `;
    });
}

// Load Top Articles
const articlesGrid = document.getElementById('top-articles');
if (articlesGrid) {
    topArticles.forEach(article => {
        articlesGrid.innerHTML += `
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div class="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                    <!-- Placeholder for Article Image -->
                    <span class="text-4xl">📝</span>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-green-600 uppercase tracking-wide">${article.category}</span>
                    <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 leading-tight hover:text-green-700 cursor-pointer">
                        ${article.title}
                    </h3>
                    <a href="#" class="text-sm text-gray-500 hover:text-green-600 font-medium">Read More &rarr;</a>
                </div>
            </div>
        `;
    });
}
