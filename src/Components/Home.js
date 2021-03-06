import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import Product from "./Product";
const slideImages = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/1500x600_Hero-Tall_np._CB406910536_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/Pack-up-sale/GW_PC_BUNK_1500x600._CB407217591_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/Pack-up-sale/GW_PC_BUNK_1500x600._CB407217591_.jpg",
];

const Home = () => {
  return (
    <div className="home">
      <Slide>
        <div
          className="img"
          style={{ backgroundImage: `url(${slideImages[0]})` }}
        >
          <span></span>
        </div>

        <div
          className="img"
          style={{ backgroundImage: `url(${slideImages[1]})` }}
        >
          <span></span>
        </div>
        <div
          className="img"
          style={{ backgroundImage: `url(${slideImages[2]})` }}
        >
          <span></span>
        </div>
      </Slide>
      <div className="home_row">
        <Product
          id="124522"
          title="Apple iPhone 11 (64GB) - Black"
          price={59900.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71qP%2BfMtbDL._SX679_.jpg"
        />
        <Product
          id="124521"
          title="New Inspiron 14 5490 Laptop"
          price={46789.99}
          rating={5}
          image="https://i01.appmifile.com/webfile/globalimg/in/cms/4BAADF0B-B0D8-D9C3-1D38-43BAB1F76080.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="124512"
          title="WOOKY Scout Wireless Bluetooth Headphone with Mic and Deep Bass|(Black)
          "
          price={1099}
          rating={5}
          image="data:image/jpeg;base64,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"
        />
        <Product
          id="124523"
          title="TCL 138.7 cm (55 inches)  AI 4K Ultra HD Smart Certified Android LED TV 55P8S | Supreme with Farfield Voice Search (Black) (2019 Model)
          "
          price={41499.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SL1500_.jpg"
        />
        <Product
          id="124524"
          title="Samsung 324 L 2 Star Inverter Frost Free Double Door Refrigerator(RT34M5538S8/HL, Elegant Inox, Convertible)"
          price={29690.0}
          rating={5}
          image="data:image/jpeg;base64,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"
        />
      </div>
      <div className="home_row">
        <Product
          id="124525"
          title="Samsung 7.2 kg Semi-Automatic Top Loading Washing Machine (WT725QPNDMPXTL, White and Blue, Center Jet Pulsator)
          "
          price={9635.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81UcPOGmw3L._SL1500_.jpg"
        />
      </div>
    </div>
  );
};
export default Home;
