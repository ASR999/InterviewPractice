import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("ayush");

  function handleSubmit() {

  }

  async function fetchGithubUserData() {
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json();

    console.log(data);
    
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          name="search-by-usename"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};


export default GithubProfileFinder