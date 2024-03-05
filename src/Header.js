


import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "./back.png"

const Header = () => {
    const user = useSelector((state) => state.user);


    const containerStyle = {
        backgroundImage: `url(${require("./back.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        minHeight: "100vh",
        zIndex: -1,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
    };
   

    return (
        <div style={containerStyle}>

            {user && (
                <>
                <div className="buttonsOfHeader">
                    <Button  component={Link} to="/recipes">
                        RECIPES
                    </Button>
                    <Button component={Link} to="/categories">
                        CATEGORY
                    </Button>
                    {/* <Button component={Link} to="/addCategory">
                        ADD CATEGORY
                    </Button> */}
                    <Button component={Link} to="/shoppingList">
                        SHOPPING LIST
                    </Button>
                    {/* <Button component={Link} to="/addProduct">
                        ADD PRODUCT
                    </Button> */}
                   </div>
                </>
            )}
            {!user && (
                <>
                <div className="buttonsOfHeader">
                    <Button component={Link} to="/login">
                        Login
                    </Button>
                    <Button component={Link} to="/sighin">
                        SignIn
                    </Button>
                    </div>
                </>
            )}
        </div>

    );
};

export default Header;


