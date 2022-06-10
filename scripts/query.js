import "../sass/styles.scss";
import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";

// Grab what you need
const resultsContainer = document.querySelector(".results");

// Graphql Query
const getData = async () => {
    const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql/"
    });

    const results = await client.query({
        query: gql`
        {
        characters {
            results {
              name
              image
              gender
            }
          }
        }
        `,
    });

    // Gather your content in one variable
    const allCharacters = results.data.characters.results;
    console.log(allCharacters);

    // Empty container
    // resultsContainer.innerHTML = "";

    // Loop through the results
    for (let i = 0; i < allCharacters.length; i++) {
        const orderedCharacters = orderBy(allCharacters, ["name"], ["desc"]);

        // Create HTML
        resultsContainer.innerHTML += `
        <div class="card">
        <img src="${orderedCharacters[i].image}" alt="image of ${orderedCharacters[i].name}">
            <h2>${orderedCharacters[i].name}</h2>
            <p>${orderedCharacters[i].gender}</p>
        </div>
     `;
    }
};

getData();