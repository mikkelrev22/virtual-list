import React from 'react'
import {
  List
} from 'react-virtualized'
import axios from 'axios'
import faker from 'faker'

const App = () => {
  const [cards, setCards] = React.useState([]);
  React.useEffect(()=>{
    setCards(
      [...Array(100).keys()].map((key) =>{
        return {
          id: key,
          name: `${faker.name.firstName()}`,
          bio: faker.lorem.lines(Math.random()*100)
        }
      })
    )
  }, []);
  return (
  <div> 
    <ul>
      {
        cards.map((card) => (
          <li key= {card.id}>
            <h2>{card.name}</h2>
          </li>
          )
        )
      }
    </ul>
  </div>
  );
}
export default App
