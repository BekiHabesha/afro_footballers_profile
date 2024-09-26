# $$\mathbb{\color{teal}\Huge\ {README.md} \ \color{Green}{FILE}}$$
# ${{\color{yellow}\Huge\{\textsf{ 🏟\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{black}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{red}\Huge\{\textsf{ 🏟\}}}}$ 
# $$\mathbb{\color{green}\Huge\ {ALX} \ \color{teal}{Back \ End}\}$$ $$\mathbb{\color{green}\Huge\ {Specialization}\}$$
# $$\mathbb{\color{teal}\Huge\ {Portofolio}\}$$ $$\mathbb{\color{green}\Huge\ {Project}\}$$ $$\mathbb{\color{teal}\Huge\ {Repository}\}$$
# ${{\color{yellow}\Huge\{\textsf{ 🏟\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{black}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{red}\Huge\{\textsf{ 🏟\}}}}$ 
<br>

### [**ALX Short Specializations Portfolio project**](https://intranet.alxswe.com/projects/1248) *is the portfolio project of the Webstack specialization Repo of the last-major-project of the  end my pathway at Holberton.*
### <ins>**Authored by</ins>:**
* ***Bereket Dereje Mekkonnen***

##

<H1 align="center", height="5500"> 🏟⚽️🏆 <ins>Afro Footballers Profile Web App</ins> 🥇⚽️🏟</H1>

**Afro Footballers Profile is Ethiopia's Football Players, Football Coaches and Football Clubs Profile listing with details web application developed using React JS, HTML, and CSS for frontend (on client side) and Node JS, API and MongoDB Data Base for backend (on server side). Afro Footballers Profile website app is a User-friendly interface, Real-time updates, use mock API tools to simulate backend functionality, Advanced search filters (location, price, property type). It allows users to browse, search, sort, and filter property listings, as well as contact sellers and manage property listings with user authentication.**
<br>
<br>

To The future It will adding and allows secure payment gateways, interactive maps, Review and rating system for properties and agents.  with Detailed property listings of photos and videos, virtual tours, Clear and consistent pricing information, Interactive maps for accurate site locations and Direct messaging between buyers and sellers.

##

# Table of Contents

- [Project Architecture](#project-architecture)
- [Setup Instructions](#setup-instructions)
- [Usage Guidelines](#usage-guidelines)
- [Features](#features)
- [Dependencies](#dependencies)
- [License](#license)
- [Author](#author)


##


# Project Architecture

The project is structured as follows:

ethio-properties/<br>
│<br>
├── public/<br>
│   ├── index.html<br>
│   ├── images/<br>
│   │   ├── logo_with_name.png<br>
│   │   ├── ET33c.png<br>
│   │   ├── property1.jpg<br>
│   │   ├── property2.jpg<br>
│   │   └── property3.jpg<br>
│   └── favicon.ico<br>
│<br>
├── src/<br>
│   ├── components/<br>
│   │   ├── Header.js<br>
│   │   ├── Footer.js<br>
│   │   ├── PropertyList.js<br>
│   │   ├── PropertyCard.js<br>
│   │   ├── SearchBar.js<br>
│   │   ├── Pagination.js<br>
│   │   ├── Sorting.js<br>
│   │   ├── ContactForm.js<br>
│   │   └── Authentication.js<br>
│   │<br>
│   ├── data/<br>
│   │   ├── mockProperties.js<br>
│   │<br>
│   ├── pages/<br>
│   │   ├── HomePage.js<br>
│   │   ├── ContactUsPage.js<br>
│   │   ├── ServicesPage.js<br>
│   │   ├── AboutUsPage.js<br>
│   │   ├── LoginPage.js<br>
│   │   ├── SigninPage.js<br>
│   │   └── PropertyDetailsPage.js<br>
│   │<br>
│   ├── App.js<br>
│   ├── index.js<br>
│   ├── App.css<br>
│   └── mockAPI.js<br>
│<br>
├── package.json<br>
├── .gitignore<br>
└── README.md<br>
<br>

### Components

- **Header.js**: Contains the navigation menu and search form.
- **Footer.js**: Contains footer details, including social media links.
- **PropertyCard.js**: Displays individual property details.
- **PropertyList.js**: Displays a list of property cards.
- **SearchBar.js**: Allows users to search for properties.
- **Pagination.js**: Handles pagination of property listings.
- **Sorting.js**: Provides options to sort property listings.
- **ContactForm.js**: Allows users to send inquiries to property managers.
- **Authentication.js**: Manages user login for accessing property management features.
<br>

### Data

- **mockData.js**: Contains mock property data used to populate the listings.
<br>

### Styling

- **App.css**: Contains global styles.
- Each component also has its own CSS file for styling.

##

# Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```
    git clone https://ghp_aZBG7i81iV1G--------l7k046ZS04R0jRHng@github.com/BekaHabesha/ethio-properties.git
    cd ethio-properties
    ```
<br>

2. **Install dependencies:**

    Ensure that you have Node.js and npm installed on your machine.

    ```
    npm install
    ```
<br>

3. **Run the development server:**

    ```
    npm start
    ```
<br>
* This will start the application and The app will be available at `http://localhost:3000`.
<br>

4. **Build for production:**

    To create a production build, run:

    ```
    npm run build
    ```
<br>
The production-ready files will be in the `build/` directory.

<br>

5. **Deploy to GitHub Pages:**

    If you want to deploy the app to GitHub Pages:

    ```
    npm run deploy
    ```

* Make sure to set up the **`homepage`** field in **`package.json`** with your GitHub Pages URL.

##

# Usage Guidelines

1. **Navigating the Application:**

    - **Home:** Browse the latest properties listed.
    - **Search:** Use the search bar to filter properties by location, title, price, size, bedrooms, real estate company and or other criteria.
    - **Sort:** Sort properties by price, location, size, and more.
    - **Contact Form:** Use the contact form to get in touch with property sellers.
    - **Authentication:** Log in or sign up to manage your property listings.
<br>

2. **Adding/Editing Properties:**

    - Users must log in to add or edit property listings.
    - The listings can include details like the number of rooms, bedrooms, bathrooms, price, size, location, property type, and images.
<br>

3. **Pagination:**

    - The property list is paginated for easier navigation when there are many properties.
<br>

4. **Sorting:**

    - Properties can be sorted by various criteria, such as price, size, and location.
<br>

5. **Mock Data:**

    - The app uses mock data provided in `mockData.js` to simulate backend functionality.

##

# Features

- **Property Listings**: Browse through various property listings with details like price, size, location, and more.
- **Search Functionality**: Search for properties based on location, price, type and other criteria.
- **Sorting Options**: Sort properties by price, size, location, type and more.
- **Pagination**: Navigate through multiple pages of property listings.
- **Contact Form**: Allows users to send inquiries about properties.
- **Authentication**: Simple login form to manage property listings.

##

# Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing within the application.
- **Bootstrap**: For responsive design and styling.
- **Axios**: For making HTTP requests (optional for future API integration).

##

# License

This project is licensed under the MIT License. See the LICENSE file for details.<br>
<br>
This **`README.md`** provides a comprehensive overview of the project, detailed setup instructions, and clear usage guidelines. It also explains the project architecture, making it easy for other developers to understand and contribute to the project.

##

<H1><ins>Author</ins> </H1>

[![Profile](https://img.shields.io/badge/💻_Bereket_Dereje_🖊️📝-Contact_Me_With-blue)](https://intranet.alxswe.com/users/Bereket_Dereje_Mekonnen)⤵️

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BekaHabesha)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://www.facebook.com/bereketdere)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4.svg?style=for-the-badge&logo=Telegram&logoColor=white)](https://t.me/FootBall_Manager_Agent_BEREKET_D)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@bekahabesha)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://www.gmail.com/Bereketdm1984@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/fifa_football_agent_bereket)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/BereketDereje)
[![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)](https://slack.com/bekahabesha)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/FootBall_Manager_Agent_BEREKET_D)
[![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white)](https://www.tiktok.com/@beki_beba)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsApp/+251913064297)
[![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://twitter.com/BereketDMY)
[![Twitter](https://img.shields.io/badge/Twitter-1D9BF0.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/BereketDMY)
[![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)]()
[![Threads](https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=Threads&logoColor=white)](https://www.threads.net/@fifa_football_agent_bereket) 

##
