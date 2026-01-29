// 1. Setup Data Storage
let myStories = JSON.parse(localStorage.getItem('backpack_stories')) || [];

const renderStories = () => {
    const feedEl = document.getElementById('blog-feed');
    // Clear feed but keep the original ones if you want, or just show all
    feedEl.innerHTML = ''; 
    
    // Combine your manual list with saved ones
    const allStories = [...myStories]; 
    
    allStories.forEach(post => {
        feedEl.innerHTML += `
            <div class="bento-card p-6 border shadow-sm bg-white border-emerald-200">
                <span class="text-xs uppercase font-bold text-[#A35638]">${post.loc}</span>
                <h3 class="text-xl mt-1 mb-4">${post.title}</h3>
                <div class="flex justify-between items-center opacity-60 text-sm">
                    <span>Budget: ${post.budget}</span>
                    <span class="text-emerald-600">✓ Saved Locally</span>
                </div>
            </div>
        `;
    });
};

// 2. Handle Form Toggle
document.getElementById('open-form').addEventListener('click', () => {
    document.getElementById('story-form').classList.toggle('hidden');
});

// 3. Save New Story
document.getElementById('save-story').addEventListener('click', () => {
    const newStory = {
        title: document.getElementById('story-title').value,
        loc: document.getElementById('story-loc').value,
        budget: document.getElementById('story-budget').value
    };

    myStories.push(newStory);
    localStorage.setItem('backpack_stories', JSON.stringify(myStories));
    
    // Reset and close
    document.getElementById('story-form').classList.add('hidden');
    renderStories();
});

// Initial Render
renderStories();
