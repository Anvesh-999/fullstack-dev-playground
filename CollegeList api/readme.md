# 🎓 College Finder App — Using Axios & JavaScript

## 📘 Overview
This is a simple web application that allows users to search for universities in any country using the [Hipolabs Universities API](https://universities.hipolabs.com/). It takes a country name as input and displays a list of universities in that country.

This project showcases:
- API integration using **Axios**
- DOM manipulation with **Vanilla JavaScript**
- Clean UI/UX for basic input/output interaction
- Error handling for failed requests or empty input

## 📂 Files

| File             | Description |
|------------------|-------------|
| `countryCollegeList.html`| Contains the HTML structure — input field, button, and results list |
| `CollegeList.js` | JavaScript logic that fetches university data and updates the DOM |
| Axios CDN        | Loaded via CDN to perform API calls without installing separately |

## ⚙️ How to Run

1. Clone or download this project folder.
2. Open `countryCollegeList.html` in any modern web browser.
3. Enter a country name and click **"Search"**.
4. A list of universities from that country will appear.

> ✅ Requires an internet connection to load Axios from CDN and fetch data from the API.

## 🧰 Technologies Used

- **HTML5** — Basic layout and structure
- **JavaScript (ES6)** — Logic, events, DOM manipulation
- **Axios** — For making HTTP GET requests

## 🌐 API Used

- **Hipolabs University Search API**
https://universities.hipolabs.com/search?country=CountryName


## 📎 Notes

- The app uses `encodeURIComponent()` to sanitize user input.
- It includes alerts for missing inputs and handles errors from failed API calls.
- If no universities are found, it informs the user accordingly.

---

✅ A great starter project to understand APIs and dynamic content rendering with plain JavaScript.

