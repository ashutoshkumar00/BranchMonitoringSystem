import "./featuredInfo.css";

const FeaturedInfo = (props) => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">
          <span className="icon employeeIcon">
            <i class="ri-user-fill"></i>
          </span>
          Employees
        </span>
        <div className="featuredData">
          <span className="dataValue">{props.employees}</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">
          <span className="icon customerIcon">
            <i class="ri-user-fill"></i>
          </span>
          Customers
        </span>
        <div className="featuredData">
          <span className="dataValue">{props.customers}</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">
          <span className="icon salesIcon">
            <i class="ri-line-chart-fill"></i>
          </span>
          Sales
        </span>
        <div className="featuredData">
          <span className="dataValue">{props.sales}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
