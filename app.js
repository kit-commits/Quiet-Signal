const contractSignals = {
    webDevelopment: {
        title: "Web Development",
        question: "What are good contract signals?", 
        goodSignals: [
            "Clear Payment Schedule",
            "Defined Project Scope",
            "Written Ownership of Work",
            "IP Terms"
        ], 
        badSigns: [
            "We'll Pay After Launch", 
            "Endless Revisions",
            "No Written Agreement",
            "Unclear IP Ownership"
        ]
    }
}; 

function renderSignals(type = "goodSigns") {

    const data = contractSignals.webDevelopment; // For now, we only have one category

    document.querySelector("#screen-title").textContent = data.title;
    document.querySelector("#signal-question").textContent = 
        type === "goodSigns" 
        ? "What are good contract signals?" 
        : "What are bad contract signs?";

    const list = document.querySelector("#signal-list"); 
        
    list.innerHTML = ""; // Clear previous list items
    
    data[type].forEach(item => {
        const listItem = document.createElement("button");
        listItem.className = "signal-item";
        listItem.textContent = item;
        list.appendChild(listItem);
    });

}

document.querySelector("#good-btn").addEventListener("click", () => {
    renderSignals("goodSigns");
}); 

document.querySelector("#bad-btn").addEventListener("click", () => {
    renderSignals("badSigns");
});

renderSignals(); // Initial render with good signs
