import React from "react";

function Header(props) {
  return (
    <>
    <div className="row d-inline">
      <ul className="nav nav-pills position-absolute top-0 end-0">
        {
          props.pages.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <a
                  href={"#"}
                  onClick={() => props.setPage(index)}
                  className={"nav-link " + (props.currentPage === index ? "active" : "")}
                >
                  {item.readableName}
                </a>
              </li>
            )
          })
        }
      </ul>
      </div>
    </>
  )
}

export default Header;