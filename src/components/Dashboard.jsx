import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <section className="flex items-center">
      <Sidebar />
      <div className=" w-[80vw] flex items-center justify-center">
        <h1 className="text-5xl text-[#11334f] font-semibold">
          Welcome To Uniconfort's Dashboard
        </h1>
      </div>
    </section>
  );
};

export default Dashboard;
