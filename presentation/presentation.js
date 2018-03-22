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
  Slide,
  Layout,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem
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
  chromium: require('../assets/chromium.png'),
  chromeStore: require('../assets/chrome_store.png'),
  operaStore: require('../assets/opera_store.png'),
  types: require('../assets/types.png'),
  smallText: require('../assets/small_text.gif')
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
            bgColor="blue"
          >
            <Heading size={1} textColor="white">
              Plan
            </Heading>
            <List textColor="white">
              <ListItem>What we can with Chrome extension?</ListItem>
              <ListItem>Enhance the tooling:</ListItem>
              <List style={{ marginLeft: 100 }}>
                <ListItem><code>create-react-app</code>, but for extensions?</ListItem>
                <ListItem><code>react-chrome-redux</code></ListItem>
                <ListItem>testing with <code>puppeteer</code></ListItem>
              </List>
            </List>
          </Slide>

        <Slide
          bgColor="white"
        >
          <Image width="40%" src={images.chromium.replace("/", "")} />
        </Slide>

        <Slide
          bgColor="white"
        >
          <Link href="https://chrome.google.com/webstore/category/extensions" target="_blank" alt="Chrome Store">
            <Image width="90%" src={images.chromeStore.replace("/", "")} />
          </Link>
        </Slide>

        <Slide
          bgColor="white"
        >
          <Link href="https://addons.opera.com/en/extensions/" target="_blank" alt="Opera Store">
            <Image width="90%" src={images.operaStore.replace("/", "")} />
          </Link>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={`// Basic example of  manifest.json
{
  "name" : "Extension name",
  "version" : "1.1",
  "description" : "Extension description",
  "permissions": [
    "browsingData"
  ],
  "browser_action": {
     "default_icon": "icon.png",
     "default_popup": "popup.html"
  },
  "manifest_version": 2,
  "minimum_chrome_version": 50
}`}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 5] },
            { loc: [5, 8] },
            { loc: [8, 12] },
            { loc: [12, 14]}
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor="green"
        >
          <Heading size={1} textColor="white">
            chrome://extensions
          </Heading>
        </Slide>

        <Slide
          bgColor="white"
        >
          <Link href="https://developer.chrome.com/apps/manifest" target="_blank" alt="About manifest.json">
            <Image width="90%" src={images.types.replace("/", "")} />
          </Link>
        </Slide>

        <Slide
          bgColor="black"
        >
          <Image width="80%" src={images.smallText.replace("/", "")}/>
        </Slide>

        <Slide
          bgColor="green"
          textColor="white"
        >
          <Heading size={1}>🤕</Heading>
          <List>
            <ListItem>Hard to track what ES features are available</ListItem>
            <ListItem>Manual reload on every change</ListItem>
            <ListItem>Hard to set up communication between modules</ListItem>
            <ListItem>Hard to E2E tests</ListItem>
          </List>
        </Slide>

        <Slide bgColor="blue" textColor="white">
          <Heading size={1}>💡 Solutions?</Heading>
        </Slide>

        <Slide
          transition={[]}
          bgColor="blue"
          notes={`
            <ul>
              <li>It's not that easy to achieve</li>
            </ul>
          `}
        >
          <Terminal
            showFirstEntry
            title="1. suevalov@suevalov: ~(zsh)"
            output={[
              <div>create-react-app just-few-dependencies</div>,
              <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>
                yarn build
              </Typist>,
              <div>
                <div> </div>
                <div>Creating an optimized production build...</div>
                <div style={{ color: colors.green }}>
                  Compiled successfully.
                </div>
                <div> </div>
                <div>File sizes after gzip:</div>
                <div>
                  47.09 KB (151 KB) build/static/js/<span
                  style={{ color: colors.green }}
                >
                    main.8b0e51a6.js
                  </span>
                </div>
                <div>
                  289 B build/static/css/<span style={{ color: colors.green }}>
                    main.9a0fe4f1.css
                  </span>
                </div>
              </div>
            ]}
          />
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
