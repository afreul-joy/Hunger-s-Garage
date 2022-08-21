import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

export default function Meal(props) {
  const { data } = props;
  console.log(data);
  const [currentItems, setCurrentItems] = useState([]); // show in page
  const [pageCount, setPageCount] = useState(0); //
  const [itemOffset, setItemOffset] = useState(0); //index of the first item of currentPage
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage; //index of the last item of currentPage
    console.log(`Loading data from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset)); // update currentItems
    setPageCount(Math.ceil(data.length / itemsPerPage)); // update the page count
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container">
        <>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {currentItems.map((image) => {
              return (
                <div>
                  <img className="img-fluid" src={image.img} alt="" />
                </div>
              );
            })}
          </Row>
        </>
      </div>

      <div className="pageResponsive">
        <ReactPaginate
          breakLabel="..."
          previousLabel="previous"
          nextLabel="next"
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeLinkClassName={"active"}
          containerClassName={"pagination justify-content-center"}
        />
      </div>
    </>
  );
}
