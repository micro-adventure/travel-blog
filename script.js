const gear = [
    "45L Main Backpack", "Universal Power Adapter", 
    "20,000mAh Power Bank", "Microfiber Towel", 
    "Merino Wool Socks", "Filtered Water Bottle"
];

const posts = [
    { title: "Sunrise in Sapa", loc: "Vietnam", budget: "$", gem: "True" },
    { title: "The Inca Trail", loc: "Peru", budget: "$$$", gem: "Classic" },
    { title: "Lisbon's Backstreets", loc: "Portugal", budget: "$$", gem: "True" }
];

// Load Gear
const listEl = document.getElementById('packing-list');
gear.forEach(item => {
    listEl.innerHTML += `<li class="flex items-center gap-2">
        <input type="checkbox" class="accent-[#A35638]"> <span>${item}</span>
    </li>`;
});

// Load Blog
const feedEl = document.getElementById('blog-feed');
posts.forEach(post => {
    feedEl.innerHTML += `
        <div class="bento-card p-6 border shadow-sm bg-white">
            <span class="text-xs uppercase font-bold text-[#A35638]">${post.loc}</span>
            <h3 class="text-xl mt-1 mb-4">${post.title}</h3>
            <div class="flex justify-between items-center opacity-60 text-sm">
                <span>Budget: ${post.budget}</span>
                <span>${post.gem ? '💎 Hidden Gem' : ''}</span>
            </div>
        </div>
    `;
});
