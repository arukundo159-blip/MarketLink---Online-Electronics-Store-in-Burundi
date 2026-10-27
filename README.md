# MarketLink---Online-Electronics-Store-in-Burundi:root {
  --blue: #0759c7;
  --light-blue: #edf5ff;
  --white: #ffffff;
  --dark: #08234d;
  --gray: #68758a;
  --border: #e3eaf3;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--white);
  color: var(--dark);
}

header {
  background: var(--white);
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
}

.logo {
  color: var(--blue);
  font-size: 25px;
  font-weight: bold;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: bold;
}

.primary-btn {
  background: var(--blue);
  color: var(--white);
}

.hero {
  background: var(--light-blue);
  padding: 45px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 36px;
  color: var(--dark);
}

.hero h1 span {
  color: var(--blue);
}

.hero p {
  color: var(--gray);
  line-height: 1.6;
}

.search-box {
  display: block;
  width: 100%;
  padding: 14px;
  margin: 20px 0;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 16px;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.product-card {
  border: 1px solid var(--border);
  border-radius: 15px;
  overflow: hidden;
  background: var(--white);
  padding-bottom: 15px;
}

.product-image {
  background: var(--light-blue);
  min-height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
}

.product-card h3,
.product-card p,
.product-card .price {
  margin: 12px;
}

.product-card p {
  color: var(--gray);
  font-size: 14px;
}

.price {
  color: var(--blue);
  font-weight: bold;
  font-size: 18px;
}

.add-to-cart {
  margin: 0 12px;
  width: calc(100% - 24px);
  background: var(--blue);
  color: var(--white);
}

footer {
  background: var(--dark);
  color: var(--white);
  padding: 30px 20px;
  text-align: center;
}

footer a {
  color: var(--white);
  margin: 8px;
}

@media (max-width: 800px) {
  .products {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero h1 {
    font-size: 29px;
  }
}

@media (max-width: 360px) {
  .products {
    grid-template-columns: 1fr;
  }
}
