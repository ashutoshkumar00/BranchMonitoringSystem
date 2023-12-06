import Chart from "../../components/Chart/Chart"; 
import "./Home.css";
import BasicInfo from "../../components/featured/featuredData";

export default function Home() {
  return (
    <div className="home">
      <BasicInfo />
      <Chart  title="Sales Analytics" dataKey="sales" />
    </div>
  );
}
