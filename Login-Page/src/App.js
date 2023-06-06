import "./styles.css";
import Login from "./Login";
import {
  Route,
  Routes,
  NavLink,
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "./auth";
import { Register } from "./Register";
export default function App() {
  const auth = useAuth();

  const logOut = () => {
    auth.logout();
  };
  return (
    <>
      <div className="App">
        {auth && auth.user && (
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink onClick={logOut}>Log Out</NavLink>

            {/* <button onClick={logOut}></button> */}
          </nav>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/:id"
          element={
            <ProtectedRoute>
              <BookDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export const Home = () => {
  return "Welcome to Home";
};

export const Books = () => {
  const books = [
    {
      id: 1,
      name: "Book1"
    },
    {
      id: 2,
      name: "Book2"
    },
    {
      id: 3,
      name: "Book3"
    },
    {
      id: 4,
      name: "Book4"
    }
  ];

  return (
    <ul>
      {books.map((book) => (
        <li>
          <Link to={`./${book.id}`} state={{ name: book.name }}>
            {book.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const BookDetails = (props) => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Book with {id} and name {location.state.name}
    </div>
  );
};
