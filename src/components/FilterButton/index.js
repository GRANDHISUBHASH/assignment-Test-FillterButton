import { Component } from "react";
import { IoFilterOutline } from "react-icons/io5";
import "./index.css";

class FilterButton extends Component {
  state = {
    dropDownState: false,
    dropDownSelectdValue: "",
  };

  FilterButtonIsClicked = () => {
    this.setState((prevState) => ({ dropDownState: !prevState.dropDownState }));
  };

  dropDownValueIsChange = (event) => {
    this.setState({ dropDownSelectdValue: event.target.value });
  };

  render() {
    const { ButtonName, dropDownList } = this.props;
    const { dropDownState, dropDownSelectdValue } = this.state;
    return (
      <div className="dopDownCard">
        <button type="button" onClick={this.FilterButtonIsClicked}>
          <IoFilterOutline />
          {ButtonName}
        </button>
        {dropDownState && (
          <div className="FilterCArd">
            <div className="DropDownHeadingPart">
              <p>Refine By</p>
              <p className="p1">Clear</p>
            </div>
            <select
              onChange={this.dropDownValueIsChange}
              value={dropDownSelectdValue}
            >
              {dropDownList.map((eachItem) => (
                <option
                  value={eachItem.name}
                  type={eachItem.type}
                  name={eachItem.name}
                >
                  {eachItem.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }
}
export default FilterButton;
