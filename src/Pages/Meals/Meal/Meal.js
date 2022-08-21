import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Meal(props) {
  const { data } = props;

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
                <Zoom top>
                  <Col>
                    <div className="single-products">
                      <img width="100%" height="300px" src={image.img} alt="" />
                      <div className="product-des">
                        <h3>{image.name}</h3>
                        <p>{image.details.slice(0, 80)}</p>
                        <p className="price">{image.price}</p>
                        <Link to={`/meals/${image._id}`}>
                          <button className="regular-btn">
                            Buy Now <i className="fas fa-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Zoom>
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
