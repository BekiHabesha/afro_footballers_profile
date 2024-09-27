# $$\mathbb{\color{teal}\Huge\ {README.md} \ \color{Green}{FILE}}$$
# ${{\color{blue}\Huge\{\textsf{ 🏟\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{black}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{blue}\Huge\{\textsf{ 🏟\}}}}$ 
# $$\mathbb{\color{green}\Huge\ {ALX} \ \color{teal}{Back \ End}\}$$ $$\mathbb{\color{green}\Huge\ {Specialization}\}$$ $$\mathbb{\color{teal}\Huge\ {Program}\}$$
# $$\mathbb{\color{teal}\Huge\ {Final}\}$$ $$\mathbb{\color{teal}\Huge\ {Portofolio}\}$$ $$\mathbb{\color{teal}\Huge\ {Project}\}$$ $$\mathbb{\color{green}\Huge\ {Repository}\}$$
# ${{\color{blue}\Huge\{\textsf{ 🏟\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{black}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{blue}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏆\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{golden}\Huge\{\textsf{ 🏅\}}}}$ ${{\color{black}\Huge\{\textsf{ ⚽️\}}}}$ ${{\color{blue}\Huge\{\textsf{ 🏟\}}}}$ 
<br>

### [**ALX Short Specializations Portfolio project**](https://intranet.alxswe.com/projects/1248) *is the portfolio project of the Webstack specialization Repo of the last-major-project of the  end my pathway at Holberton.*
### <ins>**Authored by</ins>:**
* ***Bereket Dereje Mekkonnen***

##

<H1 align="center", height="5500"> 🏟⚽️🏆 <ins>Afro Footballers Profile Web App</ins> 🥇⚽️🏟</H1>

**Afro Footballers Profile is Ethiopia's Football Players, Football Coaches and Football Clubs Profile listing with details web application developed using React JS, HTML, and CSS for frontend (on client side) and Node JS, API and MongoDB Data Base for backend (on server side). Afro Footballers Profile website app is a User-friendly interface, Real-time updates, use API tools to simulate backend functionality, Advanced search filters (a search bar to filter player by Player Name, Date of Birth, Age, Height, Position, Alternative Position, Nationality, National Team Career, Current club, Contract expires Date, Contract option year, Last contract extension date, Match Played, Goal Scored, Goal Assisted, Salary, Market Value, Player Agent, Previous Clubs, Cup Winning, Ethiopian Premier League Cup Winning, Ethiopian Clubs Cup Winning, CAF Champions League Cup Winning, CAF Confederations Cup Winning, AFCON Cup Winning from Player data (Mongodb Database). a search bar to filter coach by Coach Name, Date of Birth, Age, Height, Position, Nationality, National Team Career, Coaching License Level, Coaching Experience Year, Current club Joined, Current club Joined date, Contract expires date, Contract option date, Last contract extension date, Match Coached, Match Winning, Match Loss, Match Draw, Salary, Market Value, Previous Clubs, Cup Winning, Ethiopian Premier League Cup Winning, Ethiopian Clubs Cup Winning, CAF Champions League Cup Winning, CAF Confederations Cup Winning, AFCON Cup Winning from Coach data (Mongodb Database). a search bar to filter club by Club Name, Founded Date, Club Age, Club City, Club Country, National Team Players number, Squad Size number, Foreign Players number, Local Players number, U20 Players number, League Level, League Point, League Table Rank, Market Value, Cup Winning number, Ethiopian Premier League Cup Winning number, Ethiopian Clubs Cup Winning number, CAF Champions League Cup Winning number, CAF Confederations Cup Winning, Club's Women Team, Club's U20 Team, Club's U17 Team from Club data (Mongodb Database)). It allows users to browse, search, sort, and filter Player, Coach and Club Profile details, as well as contact and manage profile listings with user authentication..**
<br>
<br>

To The future the web app will adding another African Countries League and allows secure payment gateways, Reviews and rating system for players, coaches, clubs, fans, and agents. 

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

afro_footballers_profile/<br>
│<br>
├── backend_on_server_side/<br>
│   ├── config/<br>
│   │   └── db.js<br>
│   ├── controllers/<br>
│   │   ├── coachController.js<br>
│   │   ├── clubController.js<br>
│   │   ├── playerController.js<br>
│   ├── models/<br>
│   │   ├── Coach.js<br>
│   │   └── Club.js<br>
│   │   └── Player.js<br>
│   ├── routes/<br>
│   │   ├── coachRoutes.js<br>
│   │   └── clubRoutes.js<br>
│   │   └── playerRoutes.js<br>
│   ├── server.js<br>
│   └── package.json<br>
│<br>
│<br>
├── frontend_on_client_side/<br>
│   ├── public/<br>/<br>
│   │   ├── index.html<br>
│   │   └── logo.png<br>
│   ├── src/<br>
│   │   ├── assets/<br>
│   │   │     ├──images/<br>
│   │   │     │     ├── Asmallplogo_blackball.png<br>
│   │   │     │     ├── Asmallpfootballersprofile.png<br>
│   │   │     │     ├── Efflogo.png<br>
│   │   │     └──   └── logo.png<br>
│   │   ├── components/<br>
│   │   │     ├── Header.js<br>
│   │   │     ├── Nav.js<br>
│   │   │     └── SearchBar.js<br>
│   │   ├── pages/<br>
│   │   │   ├── Home.js<br>
│   │   │   ├── ClubList.js<br>
│   │   │   ├── CoachList.js<br>
│   │   │   ├── PlayerList.js<br>
│   │   │   ├── Login.js<br>
│   │   │   └── SignIn.js<br>
│   │   │<br>
│   │   ├── App.js<br>
│   │   ├── index.js<br>
│   │   ├── mockData.js<br>
│   │   └── styles.css.js<br>
│   └── package.json<br>
├── .gitignore<br>
└── README.md<br>
<br>

### Components

- **Header.js**: Contains the navigation menu and search form.
- **Footer.js**: Contains footer details, including social media links.
- **PropertyCard.js**: Displays individual property details.
- **ClubList.js**: Displays a list of Clubs profile.
- **CoachList.js**: Displays a list of Coaches profile.
- **PlayerList.js**: Displays a list of Players profile.
- **SearchBar.js**: Allows users to search for profiles.
- **Pagination.js**: Handles pagination of profiles listings.
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
git clone https://ghp_IL1Rse9IHwWU5IQEXH------------n1IGrCe@github.com/BekiHabesha/afro_footballers_profile.git
    cd afro_footballers_profile
    ```
<br>

2. **Initialize the backend project**

    ```
mkdir backend_on_server_side
cd backend_on_server_side

npm init -y
    ```

3. **Install required packages:**

    ```
npm install express mongoose dotenv bcryptjs jsonwebtoken cors nodemon
    ```

4. Setup MongoDB Connection (config/db.js)
  
    ```
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
    ```

5. **Environment Variables (.env) Create a .env file in the backend folder with:**

    ```
MONGO_URI=<Your_MongoDB_Connection_String>
PORT=5000
    ```

6. **Frontend Setup**

    ```
npx create-react-app frontend_on_client_side
    ```

7. **Install dependencies:**

    Ensure that you have Node.js and npm installed on your machine.

    ```
    cdfrontend_on_client_side
    npm install
    ```
<br>

8. **Run the Application:**

* **Backend:** Start the backend server

    ```
    cd backend_on_server_side
    node server.js
    ```

* **Frontend:** Start the React App

    ```
    cd frontend_on_client_side
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

    - **Home:** Browse the latest profile listed.
    - **Search:** Use the search bar to filter profile by Search for profile based on player, coach, club and other criteria.
    - **Sort:** Sort Profile can be sorted by various criteria, such as player salary, club city, coach experience and etc.
    - **Contact Form:** Use the contact form to get in touch with profiles.
    - **Authentication:** Log in or sign up to manage your profile listings.
<br>

3. **Pagination:**

    - The profile list is paginated for easier navigation when there are many profiles.
<br>

4. **Sorting:**

    - Profile can be sorted by various criteria, such as player salary, club city, coach experience and etc.
<br>

5. **Mock Data:**

    - The app uses mock data provided in `mockData.js` to simulate backend functionality.

##

# Features

- **Profile Listings**: Browse through various profile listings with details.
- **Search Functionality**: Search for profile based on player, coach, club and other criteria.
- **Sorting Options**: Sort properties by name, club, goal, market value and more.
- **Pagination**: Navigate through multiple pages of profile listings.
- **Contact Form**: Allows users to send inquiries about properties.
- **Authentication**: Simple login form to manage profile listings.

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
