// Import React

import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import React from "react";
import {
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Layout,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Cite
} from "spectacle";

import colors from "./theme/colors";
import createTheme from "./theme";
import fonts from "./theme/fonts";
import Suevalov from "./components/Suevalov";

// Require CSS
require("normalize.css");
require("./theme/index.css");

const images = {
  me: require("../assets/me.jpg"),
  harold: require('../assets/harold.png'),
  ironmanThanks: require("../assets/ironman-thanks.gif"),
  mainCover: require("../assets/main-cover.jpg"),
  opera: require("../assets/opera.png"),
};

preloader(images);

const theme = createTheme(
  {
    primary: colors.blue,
    secondary: colors.dark,
    tertiary: colors.lightBlue,
    quartenary: colors.lightGray,
    white: colors.white,
    blue: colors.blue,
    green: colors.green,
    lightGray: colors.lightGray,
    bar: colors.green,
    text: colors.dark,
    dark: colors.dark,
    lightBlue: colors.lightBlue,
    red: colors.red,
    violet: colors.violet,
    yellow: colors.yellow
  },
  {
    primary: fonts.Lato,
    secondary: fonts.Lato,
    tertiary: fonts.Monospace
  }
);

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        theme={theme}
        transitionDuration={300}
        progress="bar"
      >
        <Slide
          transition={["fade"]}
          notes={`
            <ul>
              <li>Introduce yourself</li>
            </ul>
`}
          bgImage={images.mainCover.replace("/", "")}
          bgDarken={0.3}
        >
          <Heading size={1} textSize="2em" textColor="white">
            Building Chrome extensions
          </Heading>
          <Heading size={1} textSize="2em" textColor="white">
            without <span className="easter-egg">pain<img src={images.harold.replace('/', "/")} className="harold" /></span>
          </Heading>
          <div style={{ marginBottom: 20, marginTop: 40 }}>
            <Suevalov photo={images.me.replace("/", "")} />
          </div>
          <Link
            textColor="white"
            href="http://suevalov.com/talks/chrome-extensions"
            target="_blank"
            ref="noopener noreferrer"
          >
            http://suevalov.com/talks/chrome-extensions
          </Link>
        </Slide>

        <Slide
          bgColor="white"
        >
          <Link
            alt="Opera"
            href="http://opera.com/"
            style={{ display: "block" }}
            target="_blank"
          >
            <Image width="70%" src={images.opera.replace("/", "")} />
          </Link>
        </Slide>


        <Slide
          transition={["fade"]}
          bgImage={images.ironmanThanks.replace("/", "")}
          bgDarken={0.55}
        >
          <Heading size={1} textColor="white" style={{ fontSize: "2.5em" }}>
            Thank you!
          </Heading>
          <List
            style={{ listStyle: "none", textAlign: "center" }}
            textColor="white"
          >
            <ListItem>
              <Link
                href="http://suevalov.com"
                target="_blank"
                textColor="white"
              >
                Alex Suevalov
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/Suevalov"
                target="_blank"
                textColor="white"
              >
                @suevalov
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="http://suevalov.com/"
                target="_blank"
                textColor="white"
              >
                suevalov.com
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/suevalov"
                target="_blank"
                textColor="white"
              >
                https://github.com/suevalov
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
