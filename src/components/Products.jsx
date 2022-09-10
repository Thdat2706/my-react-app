import styled from "styled-components";
import { Link } from "react-router-dom";

import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Link
                    to="/product"
                    style={{ textDecoration: "none", color: "#000000" }}
                >
                    <Product key={item.id} item={item} />
                </Link>
            ))}
        </Container>
    );
};

export default Products;
