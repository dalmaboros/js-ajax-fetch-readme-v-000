const app = "I don't do much.";

const token = "5a2298a50d60710d05009ad4aefd9481671c5bf7";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
