import { Link } from "react-router-dom";
import {
    faCartShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@mui/material";

import styled from "styled-components";
import { color } from "@mui/system";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <FontAwesomeIcon
                            style={{ color: "gray", fontSize: 16 }}
                            icon={faMagnifyingGlass}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="/">
                        <Logo>DIAYTI</Logo>
                    </Link>
                </Center>
                <Right>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="/register">
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="login">
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="cart">
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
