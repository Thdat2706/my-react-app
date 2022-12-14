import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faPinterest,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";
import {
    faEnvelope,
    faLocation,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.div`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Payment = styled.img`
    width: 50%;
`;

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo>DIAYTI</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don’t
                    look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <FontAwesomeIcon icon={faPinterest} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <FontAwesomeIcon icon={faLocation} /> 622 Dixie Path , South
                    Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <FontAwesomeIcon icon={faPhone} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <FontAwesomeIcon icon={faEnvelope} /> contact@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Navbar;
