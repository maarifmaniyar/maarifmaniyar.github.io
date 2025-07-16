/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  padding: 0 1rem;
}

:root {
  --bg: #ffffff;
  --text: #111111;
  --accent: #007acc;
}

body.dark {
  --bg: #121212;
  --text: #f0f0f0;
  --accent: #1e90ff;
}

header, footer {
  background-color: var(--accent);
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 1rem;
  margin-top: 0.5rem;
}

nav a, #theme-toggle {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 5px;
}

#theme-toggle:hover {
  background-color: #005f99;
}

main {
  max-width: 960px;
  margin: auto;
  padding: 2rem 0;
}

.section {
  margin-bottom: 3rem;
  animation: fadeIn 0.8s ease-in;
}

.project-card {
  background-color: rgba(0, 122, 204, 0.05);
  padding: 1rem;
  border: 1px solid var(--accent);
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

form input, form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

form button {
  background-color: var(--accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #005f99;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  .project-card {
    font-size: 0.9rem;
  }
} 
