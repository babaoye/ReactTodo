import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>January</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>February</td>
                <td>$80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
