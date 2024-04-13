import { useState, useEffect } from "react";
import "./style.css";

export default function LoadMoreItems() {
  const [isLoading, setIsLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  const [Count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    const data = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        Count === 0 ? 0 : Count * 20
      }`
    ).then((res) => res.json());

    const prodList = Products;
    const OrgList = [...prodList, ...data.products];
    setProducts(OrgList);
    setIsLoading(false);
  }

  useEffect(() => {
      fetchProducts();
  }, [Count]);
  return (
    <>
      <h1>Project 5 : Load More Items</h1>
      <div class="container">
                
        <div class="product-container">
          {Products.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.thumbnail} alt={item.title} />
              <hr />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="button-container">
        Total Items : {Products.length}
          <button disabled={disableBtn} onClick={() => {Products.length >= 100 && setDisableBtn(true); setCount((prevCount) => prevCount + 1)}
        
        }>
            Load More Items ...
          </button>
          {disableBtn && <>You have reached maxmium limit of 100 </>}
        </div>
      </div>
      {isLoading && <div>Loading data...... Please wait</div>}
    </>
  );
}
