import React from 'react';
import Button from './component/Button';
import Article from "./component/Article";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import './App.css';
import Tile from "./component/Tile";

function App() {
    return (
        <>
            <nav>
                <Button
                    boolean={false}
                    tekst="to the collection"/>
                <Button
                    boolean={false}
                    tekst="shop all the bags"
                />
                <Button
                    boolean={true}
                    tekst="pre-orders"/>
            </nav>
            <h1>Handbags & Purses</h1>
            <main>
                <Article
                    tag="Best Seller"
                    image={bag_1}
                    title="bag_1"
                    description="The handy bag"
                    price="€400"/>
                <Article
                    tag="Best Seller"
                    image={bag_2}
                    title="bag_2"
                    description="The stylish bag"
                    price="€250,--"/>
                <Article
                    tag="New collection"
                    image={bag_3}
                    title="bag_3"
                    description="The simple bag"
                    price="€300,--"/>
                <Article
                    tag="New collection"
                    image={bag_4}
                    title="bag_4"
                    description="The trendy bag"
                    price="€150,--"/>
            </main>

            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim excepturi magnam officia perspiciatis quos recusandae reiciendis rem sapiente tenetur.</p>
                </Tile>
                <Tile title="The brand"
                      image={brand}
                />
                <Tile title="our_story"
                      image={our_story}
                />
                <Tile title="our_story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim excepturimagnam officia perspiciatis quos recusandae reiciendis rem sapiente tenetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cumque dolores error eveniet harum iure labore, sequi unde vel?</p>
                </Tile>

            </footer>
        </>
    );
}

export default App;



