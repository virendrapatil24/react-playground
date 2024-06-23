import categories from "./expense-tracker/categories";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
import { IoCalendarClear } from "react-icons/io5";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { set } from "react-hook-form";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ProductList from "./components/ProductList";
import axios, { AxiosError, CanceledError } from "axios";
import UserService, { User } from "./services/user-services";

function App() {
  // const [selctedCategory, setSelectCategory] = useState("");
  // const [expenses, setExpenses] = useState([
  //   {
  //     id: 1,
  //     description: "Rent",
  //     amount: 1099,
  //     category: "Home",
  //   },
  //   {
  //     id: 2,
  //     description: "Coffee",
  //     amount: 20,
  //     category: "Food",
  //   },
  //   {
  //     id: 3,
  //     description: "Burger",
  //     amount: 20,
  //     category: "Food",
  //   },
  //   {
  //     id: 4,
  //     description: "Camera",
  //     amount: 200,
  //     category: "Electronics",
  //   },
  // ]);

  // const visibleExpenses = selctedCategory
  //   ? expenses.filter((expense) => expense.category === selctedCategory)
  //   : expenses;

  // let items = [
  //   "An item",
  //   "A second item",
  //   "A third item",
  //   "A fourth item",
  //   "And a fifth one",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log("You selected: " + item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);

  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const [category, setCategory] = useState("");

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          console.log("Request canceled", error.message);
        } else if (error instanceof Error) {
          setError(error.message);
        } else if (error instanceof AxiosError) {
          setError(error.message);
        }
        setError(error.message);
        setIsLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((error) => {
      setUsers(originalUsers);
      setError(error.message);
    });
  };

  const createUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Virendra" } as User;
    setUsers([newUser, ...users]);

    UserService.create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setUsers(originalUsers);
        setError(error.message);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " Updated" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.update(updatedUser).catch((error) => {
      setUsers(originalUsers);
      setError(error.message);
    });
  };

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="List Group Heading"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>It is an Alert!</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <Like onClick={() => console.log("You clicked the Like button!")} /> */}
      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClearCart={() => setCartItems([])} /> */}
      {/* <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        porro nihil modi odit consequatur tempore ullam repellat! Debitis nulla
        dolor aperiam ea, optio aut impedit at nostrum, error possimus laborum?
        Consequuntur, deleniti a rem doloremque impedit facilis tenetur unde
        aliquam delectus est eligendi ea odit earum adipisci distinctio
        mollitia! Labore enim temporibus beatae pariatur ratione dicta, ipsa,
        quaerat deleniti reiciendis exercitationem iusto delectus quod eius a
        dolores maiores eos deserunt dolore necessitatibus doloremque animi
        ipsam maxime amet. A itaque consectetur mollitia tempore at unde
        exercitationem ipsum pariatur ratione est, necessitatibus inventore
        accusamus facilis, nam velit. Nostrum est provident fuga facilis?
      </ExpandableText> */}
      {/* <Form /> */}
      {/* <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      /> */}
      {/* <div>
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category={category} />
      </div> */}
      <p className="text-danger">{error}</p>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <div>
              <button onClick={() => updateUser(user)}>Update</button>
              <button onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
