function Dashboard() {
    const {task} = props
  return (
    <div className="dashboard">
      <h2>{new Date().toDateString()}</h2>
      <p>{task} Tasks</p>
    </div>
  );
}

export default Dashboard
