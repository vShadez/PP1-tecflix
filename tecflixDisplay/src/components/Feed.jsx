//Clase que administra los resultados de videos en pantalla del inicio y categorias

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Navbar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
      <Stack  sx={{ flexDirection: { sx: "column", md: "row" } }}>
          <Box p={2} sx={{ overflowY: "auto", height: "100vh", flex: 2, marginLeft: "60px" }}>
              <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} 
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
