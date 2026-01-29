const defaultPosts = [
    { title: "The Temples of Bagan", loc: "Myanmar", img: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800&q=80" },
    { title: "Patagonia on a Budget", loc: "Chile", img: "https://images.unsplash.com/photo-1517757311441-207577515b0c?w=800&q=80" },
    { title: "Tokyo Night Markets", loc: "Japan", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80" }
];

let myStories = JSON.parse(localStorage.getItem('backpack_stories')) || defaultPosts;

const renderStories = () => {
    const feedEl = document.getElementById('blog-feed');
    feedEl.innerHTML = ''; 
    
    myStories.forEach(post => {
        feedEl.innerHTML += `
            <div class="destination-card group">
                <div class="h-80 w-full overflow-hidden">
                    <img src="${post.img}" class="w-full h-full object-cover" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
                <div class="absolute bottom-0 p-6">
                    <span class="text-yellow-400 text-xs font-bold uppercase tracking-widest">${post.loc}</span>
                    <h3 class="text-2xl font-bold mt-2 group-hover:text-yellow-400 transition">${post.title}</h3>
                </div>
            </div>
        `;
    });
};

document.getElementById('open-form').addEventListener('click', () => {
    document.getElementById('story-form').classList.remove('hidden');
});

document.getElementById('save-story').addEventListener('click', () => {
    const newStory = {
        title: document.getElementById('story-title').value,
        loc: document.getElementById('story-loc').value,
        img: document.getElementById('story-img').value || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
    };

    myStories.unshift(newStory); // Add to the beginning
    localStorage.setItem('backpack_stories', JSON.stringify(myStories));
    document.getElementById('story-form').classList.add('hidden');
    renderStories();
});

renderStories();
