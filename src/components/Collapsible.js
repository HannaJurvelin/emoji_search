import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div>
        <h2 onClick={(e) => this.togglePanel(e)}>
          {this.props.emoji} {this.props.name}
        </h2>
        {this.state.open ? (
          <p>
            A yellow face with simple, open eyes and a thin, closed smile.
            Conveys a wide range of positive, happy, and friendly sentiments.
            Its tone can also be patronizing, passive-aggressive, or ironic, as
            if saying “This is fine” when it’s really not.
          </p>
        ) : null}
      </div>
    );
  }
}

export default Collapsible;
