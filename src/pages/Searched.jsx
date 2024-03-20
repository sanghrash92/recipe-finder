import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=49c088e32d634007811a1babc506dc89&query=${name}`
        )
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
      };


  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                  <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                  </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

export default Searched;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem
  }
`
