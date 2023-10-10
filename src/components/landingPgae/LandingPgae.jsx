import React, { useEffect, useState } from "react";
import axios from "axios";
import ListView from "./ListView";
import GridView from "./GridView";

const LandingPgae = () => {
  const [listData, setListData] = useState([]);
  const [view, setView] = useState(false);

  const fetchData = async () => {
    try {
      let data = await axios.get("https://fakestoreapi.com/products");
      // console.log(data.data);
      setListData(data.data);
    } catch (error) {
      alert(error);
    }
  };

  //  view controller
  const viewHandle = () => {
    setView(!view);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>List Data</h1>
      </div>
      <div>
        <button onClick={viewHandle}>{view ? "List View" : "Grid view"}</button>
      </div>

      <div>
        {view ? <ListView data={listData} /> : <GridView data={listData} />}
      </div>
    </div>
  );
};

export default LandingPgae;
