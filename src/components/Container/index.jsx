import React from "react";
import "./index.scss";

const Container = props => {
  return (
    <section className="container">
      <div className="content">
        <span className="overline">For who and why</span>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          magnam illo minus!Lorem ipsum dolor sit amet consectetur minus!Lorem ipsum dolor sit amet consectetur. This created is  by
           <a href="">Momed Barry</a>
        </h2> 

        <hr />

        {props.children}
      </div>
    </section>
  );
};
export default Container;
