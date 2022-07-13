import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="145" cy="163" r="113" />
    <rect x="50" y="337" rx="0" ry="0" width="200" height="60" />
    <rect x="50" y="292" rx="0" ry="0" width="200" height="26" />
    <rect x="49" y="428" rx="0" ry="0" width="90" height="26" />
    <rect x="154" y="427" rx="18" ry="18" width="96" height="29" />
  </ContentLoader>
);

export default MyLoader;
