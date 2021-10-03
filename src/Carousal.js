import { Component } from "react";

class Carousal extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleClick = (index) => {
      this.setState({
          active: index
      })
  }

  render() {
    const { images } = this.props;
    const { active } = this.state;

    return (
      <div className="flex gap-3 w-11/12 content-center justify-center">
        <img src={images[active]} alt="animal" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={() => this.handleClick(index)}
              className={index === active ? "opacity-80 rounded-full" : "rounded-full"}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousal;
