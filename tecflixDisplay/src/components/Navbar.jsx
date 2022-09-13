//Clase que administra la navegacion por el sitio

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { categories } from "../utils/constants";

const Navbar = ({ selectedCategory, setSelectedCategory }) => (

    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#181818', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={45} />
        </Link><SearchBar />
        {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && "red",
                    color: "white",
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "10px" }}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                </span>
            </button>
        ))}
        <span style={{ color: <CodeIcon /> === <CodeIcon /> ? "white" : "red", marginRight: "10px" }}>
            <CodeIcon />
            
        </span>
        <a href="http://localhost:3001">Biblioteca</a>
        <span style={{ color: <CodeIcon /> === <CodeIcon /> ? "white" : "red", marginRight: "10px" }}>
            <CodeIcon />

        </span>
        <a href="http://localhost:3000">Mi Playlist </a>
        
        

  </Stack>
);

export default Navbar;
