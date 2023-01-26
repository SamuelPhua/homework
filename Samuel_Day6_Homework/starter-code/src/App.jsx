import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Gif from "./components/Gif";

function App() {
  const [gifSource, setGifSource] = useState({});
  const [prevGifs, setPrevGifs] = useState([]);

  const key = "SyM3ZfVQZeKX62b6NFUydppO8RBXIu9Q";

  const fetchPost = async () => {
    const controller = new AbortController();
    const gifSource = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    try {
      const res = await fetch(gifSource, { signal: controller.signal });
      const json = await res.json();
      setGifSource({ image_url: json.data.images.downsized_large.url });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleSubmit = async (value) => {
    if (value) {
      const gifSource = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${value}&limit=1`;
      const res = await eftch(gifSource);
      const json = await res.json();
      setGifSource({ image_url: json.data[0].images.downsized_large.url });
    } else {
      fetchPost();
    }
  };

  return (
    <div>
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      {gifSource.image_url ? (
        <Gif gifSource={gifSource} />
      ) : (
        <h2>Pull random gifs from Giphy</h2>
      )}
    </div>
  );
}

export default App;
