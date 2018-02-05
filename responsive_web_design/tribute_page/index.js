var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projectName = "tribute-page";
localStorage.setItem("example_project", "Tribute Page");

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "img-div" },
        React.createElement(
          "h1",
          { id: "title" },
          "Rick"
        ),
        React.createElement("img", { id: "image", src: "https://rawgit.com/bomholtm/fcc/master/_assets/CODEPEN/tribute_page/rick.jpg" }),
        React.createElement(
          "p",
          { id: "img-caption" },
          "Rick"
        )
      );
    }
  }]);

  return Image;
}(React.Component);

var Card = function (_React$Component2) {
  _inherits(Card, _React$Component2);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "tribute-info" },
        React.createElement(
          "div",
          { id: "card" },
          React.createElement(
            "div",
            { id: "card-content" },
            React.createElement(
              "h1",
              null,
              "Trivia"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Rick's appearance is meant to parody ",
                React.createElement(
                  "a",
                  { href: "http://en.wikipedia.org/wiki/Emmett_Brown", target: "_blank", title: "wikipedia:Emmett Brown" },
                  "Doc Brown"
                ),
                " from ",
                React.createElement(
                  "a",
                  { href: "http://en.wikipedia.org/wiki/Back_to_the_Future_(franchise)", target: "_blank", title: "wikipedia:Back to the Future (franchise)" },
                  "Back to the Future"
                ),
                ".",
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    null,
                    "Rick and Morty were originally from ",
                    React.createElement(
                      "a",
                      { href: "http://rickandmorty.wikia.com/wiki/The_Real_Animated_Adventures_of_Doc_and_Mharti", target: "_blank", title: "The Real Animated Adventures of Doc and Mharti" },
                      "The Real Animated Adventures of Doc and Mharti"
                    ),
                    ", ",
                    React.createElement(
                      "a",
                      { href: "http://rickandmorty.wikia.com/wiki/Justin_Roiland", target: "_blank", title: "Justin Roiland" },
                      "Justin Roiland"
                    ),
                    "'s original \"Back to the Future\" parody. Also the names of the characters sound similar to the names \"Doc and Mharti\", the main characters of the trilogy."
                  )
                )
              ),
              React.createElement(
                "li",
                null,
                "His last name, ",
                React.createElement(
                  "a",
                  { href: "http://en.wikipedia.org/wiki/S%C3%A1nchez", target: "_blank", title: "wikipedia:S\xE1nchez" },
                  "Sanchez"
                ),
                " is Hispanic in origin. In the audio commentary for the episode ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Auto_Erotic_Assimilation", target: "_blank", title: "Auto Erotic Assimilation" },
                  "Auto Erotic Assimilation"
                ),
                ", Rick was confirmed to be of Hispanic descent. Exactly where is unknown.",
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    null,
                    "Justin Roiland claims that he considers Rick's cultural background \"irrelevant\"."
                  )
                )
              ),
              React.createElement(
                "li",
                null,
                "According to himself, he has the hardest working liver in the galaxy."
              ),
              React.createElement(
                "li",
                null,
                "Rick (C-137) is one of the only Ricks in existence shown to care about his Morty, as he starts crying when he is shown various memories of Morty, though he outwardly dismisses it as \"being allergic to dipshits\". This is further proven when he was ready to sacrifice himself for his Morty's sake during Season 2 Episode 1 when they were in the Schr\xF6dingers cat field."
              ),
              React.createElement(
                "li",
                null,
                "In ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Auto_Erotic_Assimilation", target: "_blank", title: "Auto Erotic Assimilation" },
                  "Auto Erotic Assimilation"
                ),
                ", Rick is revealed to be an open pansexual."
              ),
              React.createElement(
                "li",
                null,
                "It's possible that Rick had a complicated relationship with his father because he wanted a stand of men who remotely resembled his father to cheer him on while he had sex with Unity. In \"Pocket Mortys\" the scientist known as Rick says how he heard that Rick's mother was never satisfied. It's possible they were not very supportive of Rick and weren't satisfied with his achievements."
              ),
              React.createElement(
                "li",
                null,
                "It is often mentioned that Rick was absent from the family for a long time, and came back later some time before the Pilot.",
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    null,
                    "At the start of ",
                    React.createElement(
                      "a",
                      { href: "http://rickandmorty.wikia.com/wiki/Close_Rick-Counters_of_the_Rick_Kind", target: "_blank", title: "Close Rick-Counters of the Rick Kind" },
                      "Close Rick-Counters of the Rick Kind"
                    ),
                    ", it was revealed that the date that he came back was Martin Luther King Jr's birthday, January 15."
                  ),
                  React.createElement(
                    "li",
                    null,
                    "Interestingly, it has been shown a few times throughout the series that Rick has seen and held Morty as both a baby and a young toddler despite having been away from the family for some time before that and not officially reappearing until almost year before the show started, causing many fans to theorize \"our\" Rick is not originally from \"our\" Morty's dimension or that he had been secretly visiting his grandson."
                  ),
                  React.createElement(
                    "li",
                    null,
                    "It's also possible that he did drop in on the family when Morty was a baby but was never around more than that."
                  )
                )
              ),
              React.createElement(
                "li",
                null,
                "In ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/A_Rickle_in_Time", target: "_blank", title: "A Rickle in Time" },
                  "A Rickle in Time"
                ),
                ", he briefly mentions that if he dies in a cage, he loses a bet. What this bet is wagering or who its with is never stated."
              ),
              React.createElement(
                "li",
                null,
                "A flashback gag in ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Total_Rickall", target: "_blank", title: "Total Rickall" },
                  "Total Rickall"
                ),
                " shows Rick as being interested in getting a special edition Link Between Worlds 3DS XL and asking Nintendo for sponsorship. However, Rick actually owns a black 3DS that he is seen playing in ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Look_Who%27s_Purging_Now", target: "_blank", title: "Look Who's Purging Now" },
                  "Look Who's Purging Now"
                ),
                "."
              ),
              React.createElement(
                "li",
                null,
                "Rick's Global Bank Card number is \"1234 1234 1234 1234\""
              ),
              React.createElement(
                "li",
                null,
                "Rick can write with his right hand, shoot with his right hand, and sometimes holds objects with his right, but seems to favor using his left. He is often seen holding drinks with his left, shooting with his left, and even plays guitar left in a framed photo in Bird Person's house, with the exclusion of \"Big Trouble in little Sanchez\", where he plays guitar right-handed. With this evidence, it seems that Rick may be Ambidextrous."
              ),
              React.createElement(
                "li",
                null,
                "Rick breaks the ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Fourth_Wall_Jokes", target: "_blank", title: "Fourth Wall Jokes" },
                  "fourth-wall"
                ),
                " more than any other character in the series. In fact, he seems to be the only character fully aware of the fact that he's in a TV show."
              ),
              React.createElement(
                "li",
                null,
                "Politically, Rick's views appear to fall into bottom right quadrant of the the ",
                React.createElement(
                  "a",
                  { rel: "nofollow noopener noreferrer", href: "https://www.politicalcompass.org/", target: "_blank", title: "Political Compass" },
                  "Political Compass"
                ),
                " (Anti-authoratarian with right wing economics), as he opposes totalitarism (he hates the government telling him what to do), opposes customs and airport regulations (he tries to smuggle megaseeds with him), hates bureaucracy (he calls bureaucrats \"robots\") and hates standarized education (as he points out in the pilot episode). At the end of ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Look_Who%27s_Purging_Now", target: "_blank", title: "Look Who's Purging Now" },
                  "Look Who's Purging Now"
                ),
                " Rick comments, \"Well a helpful rule might be if you need something, you get it. Pretty simple right?\", when talking to the inhabatits of the purge planet which indicates he may be a anti-authoratarian with a preference for left wing economic policies and a social safety net."
              ),
              React.createElement(
                "li",
                null,
                "In the episode ",
                React.createElement(
                  "a",
                  { href: "http://rickandmorty.wikia.com/wiki/Big_Trouble_In_Little_Sanchez", target: "_blank", title: "Big Trouble In Little Sanchez" },
                  "Big Trouble In Little Sanchez"
                ),
                ", Rick appears as a 14 year old clone of himself with the same hair color as his normal age.This would imply that he has either had light blue hair his entire life or something changed in his biology to cause it."
              ),
              React.createElement(
                "li",
                null,
                "Rick's prisoner ID code while incarcerated is AE-3852-I."
              )
            )
          ),
          React.createElement(
            "div",
            { id: "card-actions" },
            React.createElement(
              "a",
              { id: "tribute-link", href: "http://rickandmorty.wikia.com/wiki/Rickipedia", target: "_blank" },
              "source"
            )
          )
        )
      );
    }
  }]);

  return Card;
}(React.Component);

var Footer = function (_React$Component3) {
  _inherits(Footer, _React$Component3);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "footer",
        null,
        React.createElement(
          "a",
          { href: "https://github.com/bomholtm/fcc", target: "_blank", rel: "noopener noreferrer" },
          React.createElement("i", { className: "fa fa-github-alt fa-lg" }),
          " bomholtm / fcc"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(
  "div",
  { id: "main" },
  React.createElement(Image, null),
  React.createElement(Card, null),
  React.createElement(Footer, null)
), document.getElementById("root"));