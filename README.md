Five-Day Weather Horizon
========================

A simple weather forecast app that displays a five-day forecast for a given location using Open-Meteo's API.

Getting Started
---------------

### Live Demo
The demo is available at `https://effervescent-pixie-067e7b.netlify.app/`
Password: My-Drop-Site

### Clone the Repository

```
git clone https://github.com/joeFordTheNerd/Weather-Demo.git
cd Weather-Demo
```

### Install Dependencies

```
npm install
```

### Run the Development Server

```
npm run dev
```

The app will be available at `http://localhost:5173/`


Stack
----------

-   **React** (via Vite)

-   **CSS Modules** -- Scoped styling

Known Limitations
-----------------

### Search Defaults to US Places

-   The API currently prioritizes US locations when searching for cities with common names.

-   **Potential Fix:** A country selector dropdown could be added to refine results.

### Country Selection Not Implemented

-   The brief did not specify a country selector, so this was left out for now.

-   **Potential Fix:** A dropdown to choose the country would solve this issue.

### Visual Bug on Phones with Large Heights

-   On very tall mobile screens, the last weather card may get clipped due to an overflow issue.

-   **Potential Fix:** This could be corrected with more fine-tuned responsive adjustments.


Final Notes
-----------

This project was built as part of a technical assessment under time constraints. While it is functional and visually styled, some areas could be refined further with additional time.