let url = "https://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value.trim();
    if (!country) {
        alert("Please enter a country name.");
        return;
    }

    try {
        let res = await axios.get(url + encodeURIComponent(country));
        show(res.data);
    } catch (e) {
        console.error("Error fetching data:", e);
        alert("Failed to fetch data. Check your internet or try again later.");
    }
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    if (colArr.length === 0) {
        let item = document.createElement("li");
        item.textContent = "No colleges found.";
        list.appendChild(item);
        return;
    }

    for (let col of colArr) {
        let item = document.createElement("li");
        item.textContent = col.name;
        list.appendChild(item);
    }
}
