import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Ak 47',
          img: 'ak47.png',
          desc: 'This is real AK, from Soviet Union',
          category: 'weapon',
          price: '500'
        },
        {
          id: 2,
          title: 'Ak 74',
          img: 'ak74.png',
          desc: 'This is a little it better AK, than ak47',
          category: 'weapon',
          price: '750'
        },
        {
          id: 3,
          title: 'White knife',
          img: 'knife.png',
          desc: 'You can cut something',
          category: 'other',
          price: '50'
        },
        {
          id: 4,
          title: 'Grenade',
          img: 'grenade.png',
          desc: 'YOU CAN MAKE CABUUM!',
          category: 'other',
          price: '120'
        }
      ]
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
  )
  }
}

export default App;
