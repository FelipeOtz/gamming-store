import React, { useEffect } from "react";

const Home = () => {
  /*
  useEffect(() => {
    fetch("http://localhost:8080/produtos/find/19")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  */

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice").then((response) => {
      response.json().then((data) => {
        console.log(data.slip);
      });
    });

    /*
    const colheDados = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const produtos = await response.json();
      console.log(produtos);
    };
    
    colheDados();
    */
  });

  return <div>Home</div>;
};

export default Home;
