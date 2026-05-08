😂 Balakrishnan Joke Generator
A fun React app that fetches random jokes by category using the Chuck Norris Jokes API, powered by Redux Toolkit for state management.

🚀 Live Demo

Coming soon / Deploy on Vercel or Netlify


📸 Preview
😂 Balakrishnan Joke Generator
[ Choose Category ▼ ]   [ Get Joke ]

  "Chuck Norris can divide by zero."

🛠️ Tech Stack
TechnologyPurposeReactUI FrameworkRedux ToolkitGlobal State ManagementAxiosHTTP RequestsChuck Norris APIJoke Data SourceViteBuild Tool

📁 Project Structure
src/
├── App.jsx          # Main component with UI and dispatch logic
├── store.js         # Redux store configuration
├── seestore.js      # Joke slice with async thunk
└── main.jsx         # React root with Redux Provider

⚙️ Getting Started
Prerequisites

Node.js (v18 or above)
npm or yarn

Installation
bash# 1. Clone the repository
git clone https://github.com/your-username/balakrishnan-joke-generator.git

# 2. Navigate into the project
cd balakrishnan-joke-generator

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
The app will run at http://localhost:5173

📦 Dependencies
bashnpm install @reduxjs/toolkit react-redux axios

🔌 API Reference
This project uses the free Chuck Norris Jokes API.
EndpointDescriptionGET /jokes/random?category={category}Fetch a random joke by category
Available Categories
animal · career · celebrity · dev · explicit · fashion · food · history · money · movie · music · political · religion · science · sport · travel

🧠 How It Works

User selects a joke category from the dropdown
Clicking Get Joke dispatches the fetchJoke async thunk
The thunk calls the Chuck Norris API via Axios
Redux stores the returned joke in global state
The joke is displayed in the UI via useSelector

User clicks "Get Joke"
        ↓
dispatch(fetchJoke(category))
        ↓
Axios GET → api.chucknorris.io
        ↓
Redux state updated (state.joke.joke)
        ↓
UI re-renders with new joke

🐛 Known Issues Fixed

Function shadowing bug — The local fetchJoke() handler was shadowing the imported Redux thunk of the same name, causing incorrect dispatch behavior. Fixed by renaming the handler to handleFetchJoke().


📄 License
This project is open source and available under the MIT License.

🙌 Acknowledgements

Chuck Norris API for the free joke data
Redux Toolkit for simplified state management
Built with ❤️ by Balakrishnan
