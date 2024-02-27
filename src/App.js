import FilterButton from "./components/FilterButton";
import "./App.css";

const dropDownList = [
  {
    name: "Date Of Registration",
    type: "",
  },
  {
    name: "Vendor Score",
    type: "",
  },
  {
    name: "Rating",
    type: "",
  },
  {
    name: "Status",
    type: "",
  },
  {
    name: "Type Of Bussines",
    type: "",
  },

  {
    name: "Location",
    type: "radio",
  },
  {
    name: "Assign To",
    type: "",
  },
];

function App() {
  return (
    <div className="App">
      <FilterButton ButtonName="Filter" dropDownList={dropDownList} />
    </div>
  );
}

export default App;
