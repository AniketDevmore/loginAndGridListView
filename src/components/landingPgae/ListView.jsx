import React, { useEffect, useState } from "react";

const ListView = (props) => {
  const [listPerPage, setListsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterList, setFilterList] = useState(props.data);

  const arrayPaginationNumber = (totalList, listPerPage) => {
    return Array.from(Array(Math.ceil(totalList / listPerPage)).keys());
  };

  const currentList = (filterList, currentPage, listPerPage) => {
    // console.log(filterList, currentPage, listPerPage);
    return filterList.slice(
      currentPage * listPerPage,
      currentPage * listPerPage + listPerPage
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setFilterList(props.data);
  }, [props]);
  return (
    <div>
      <div>
        <ul>
          {currentList(filterList, currentPage, listPerPage).map((ele, i) => (
            <li key={i}>{ele.title}</li>
          ))}
        </ul>
      </div>
      <div className="pageNumber">
        <ul style={{ display: "flex", listStyle: "none" }}>
          {arrayPaginationNumber(props.data.length, listPerPage).map(
            (ele, i) => (
              <li style={{ margin: "10px" }} key={i}>
                <a
                  style={{
                    textDecoration: "none",
                    padding: "3px",
                    border: "1px solid black",
                  }}
                  href="#"
                  onClick={() => paginate(ele)}
                >
                  {ele + 1}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ListView;
