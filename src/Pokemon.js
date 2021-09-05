import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Pokemon() {

    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      fetch(url)
      .then(response => response.json())
      .then(data => setDetails(data))
      .then(() => setLoading(false));
    }, []);

    return (
      <>
      { loading && <img alt="img" src="https://c.tenor.com/8ZhQShCQe9UAAAAC/loader.gif" />}
      { !loading &&
        <div>
          <p>Information for {details.name}</p>
          <img alt="img" src={details.sprites.other.dream_world.front_default}></img>
          <ul>
            {
              details.abilities.map(a => <li key={a.ability.name}>{a.ability.name}</li>)
            }
          </ul>
        </div>
      }
      </>
    );
  }