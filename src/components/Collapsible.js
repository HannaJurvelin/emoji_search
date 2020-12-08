import React from "react";

// collapsible block component
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
      <div className="collapsible">
        <h2 onClick={(e) => this.togglePanel(e)}>
          {this.props.emoji} {this.props.name}
        </h2>
        {this.state.open ? (
          <div>
            <p>Group: {this.props.group}</p>{" "}
            <p>Subgroup: {this.props.subGroup}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapsible;
