import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {

  render() {
    const { todoDoneFilter } = this.props

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" onClick={todoDoneFilter} className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}
