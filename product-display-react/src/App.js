import React, { Component } from "react";
import Product from "./Product";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
          name: "CHECK PRINT SHIRT",
          oldPrice: 1250,
          newPrice: 990
        },
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "GLORIA HIGH LOGO SNEAKER",
          oldPrice: 1900,
          newPrice: 1350
        },
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "CATE RIGID BAG",
          oldPrice: 1500,
          newPrice: 1150
        },
        {
          imgUrl: "https://i.imgur.com/ruU04I6.jpg",
          name: "Green Checkered Shirt",
          oldPrice: 1050,
          newPrice: 850
        },
        {
          imgUrl:
            "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
          name: "GUESS CONNECT WATCH",
          oldPrice: 1800,
          newPrice: 1250
        },
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          oldPrice: 650,
          newPrice: 460
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.state.products.map(productData => {
            return <Product key={productData.name} {...productData} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
