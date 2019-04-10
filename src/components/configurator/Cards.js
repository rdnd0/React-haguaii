import React, { Component } from "react";

//Redux magic
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseStage } from "../../redux/stage/actions";
import { chooseShirt, decreaseElements } from "../../redux/shirt/actions";

class Cards extends Component {
  state = {
    elementsSelected: [],
    currentCard: 0
  };
  componentDidMount() {
    const { illustrations } = this.props;
  }

  handleChosen = itemname => {
    const selected = [...this.state.elementsSelected];

    selected.push(itemname);

    let shirtPath, shirtPath2;
    const {
      elements,
      decreaseElements,
      increaseStage,
      chooseShirt
    } = this.props;

    if (elements > 1) {
      decreaseElements();
    } else {
      shirtPath = `${
        process.env.REACT_APP_BASE_URL
      }/images/shirt-${selected.sort().join("")}.png`;
      shirtPath2 = `${
        process.env.REACT_APP_BASE_URL
      }/images/shirt-${selected.sort().join("")}2.png`;
      chooseShirt(shirtPath, shirtPath2);
      increaseStage();
    }
    this.setState({
      elementsSelected: selected
    });
  };

  printCards = () => {
    const { elementsSelected, currentCard } = this.state;
    const { illustrations, elements } = this.props;
    let leftIllustrations = [...illustrations];
    let newIndex = currentCard;
    const removeByAttr = (arr, attr, value) => {
      let i = arr.length;
      while (i--) {
        if (arr[i] && arr[i].hasOwnProperty(attr) && arr[i][attr] === value) {
          arr.splice(i, 1);
        }
      }
      return arr;
    };

    removeByAttr(leftIllustrations, "short_name", elementsSelected[0]);
    elementsSelected.length === 2 &&
      removeByAttr(leftIllustrations, "short_name", elementsSelected[1]);

    const nextCard = direction => {
      direction === "right"
        ? newIndex + 1 < illustrations.length
          ? console.log(
              "clicked right",
              (newIndex += 1),
              illustrations[newIndex]
            )
          : console.log("out of bounds")
        : newIndex - 1 >= 0
        ? console.log("clicked left ", (newIndex -= 1), illustrations[newIndex])
        : console.log("out of bounds");

      this.setState({
        currentCard: newIndex
      });
    };

    return (
      <div className="cards-app">
        <div className="cards-tittle">
          {elementsSelected === 0 ? (
            <h1>Choose an element</h1>
          ) : (
            <h1>{elements} element/s left to go!</h1>
          )}
        </div>
        <div className="cards">
          <div className={`cards-slider active-slide-${currentCard}`}>
            {console.log("currentcard within card:", currentCard)}

            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${currentCard *
                  (100 / leftIllustrations.length)}%)`
              }}
            >
              {leftIllustrations.map((item, index) => {
                return (
                  <div
                    id={`card-${index}`}
                    className="card"
                    key={`${item.short_name}+${index}`}
                    onClick={() => {
                      this.handleChosen(item.short_name);
                    }}
                  >
                    <p>{item.short_name}</p>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/images/${
                        item.short_name
                      }.png`}
                      alt="illustration"
                      className="illustration-img"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="cards-btns">
          <img
            className="goLeft"
            onClick={() => {
              nextCard("left");
            }}
            src="/images/arrow-left.png"
            alt="left-arrow"
          />
          <img
            className="goRight"
            onClick={() => {
              nextCard("right");
            }}
            src="/images/arrow-right.png"
            alt="right-arrow"
          />
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.printCards()}</div>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increaseStage,
      decreaseElements,
      chooseShirt
    },
    dispatch
  );

const mapStateToProps = state => ({
  elements: state.shirt.elements,
  illustrations: state.illustrations.illustrations
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
