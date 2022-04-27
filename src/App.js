import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import Header from './components/Header';
import ProductList from './components/ProductList';
import category from './Data/categoryData';
function App() {
  return (
    <>
      <Header/>
      <div className='container mt-4'>
          <div className='row'>
              <div className='col-3'>
                  <CategoryList data={category}/>
              </div>
              <div className='col-9'>
                  <Banner/>
                  <ProductList/>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
