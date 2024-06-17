import Cart from "./components/Cart";
import Searchbar from "./components/Searchbar";
import ProductsPage from "./pages/productPage";

function App() {
  return (
    <>
      <main dir="rtl" className="flex justify-between m-2">
        <Cart />
        <div className="w-full p-4">
          <Searchbar />
          <ProductsPage />
        </div>
      </main>
    </>
  );
}

export default App;
