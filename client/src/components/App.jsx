import React from 'react'
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized'
import axios from 'axios'
import faker from 'faker'

const App = () => {
  const cache = React.useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100
  }))
  const [cards, setCards] = React.useState([]);
  React.useEffect(()=>{
    setCards(
      [...Array(1000).keys()].map((key) =>{
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
    {/* <ul>
      {
        cards.map((card) => (
          <li key= {card.id}>
            <h2>{card.name}</h2>
          </li>
          )
        )
      }
    </ul> */}
    <div style={{width: "100%", height: "100vh"}} >
      <AutoSizer>
        {({width, height})=> (  
        <List width={width} 
          height={height} 
          rowHeight={cache.current.rowHeight} 
          rowCount={cards.length}
          deferredMeasurementCache={cache.current} 
          rowRenderer= {({key, index, style, parent}) => {
          const card = cards[index]
          return (
            <CellMeasurer key ={key} cache= {cache.current} parent= {parent} 
            columnIndex= {0} rowIndex= {index}
            >
              <div key= {key} style= {style}>
                <h2>{card.name}</h2>
                <p>
                  {card.bio}
                </p>
              </div>
            </CellMeasurer>
            )}}
        />
        )
      }
      </AutoSizer>
    </div>
  </div>
  );
}
export default App
