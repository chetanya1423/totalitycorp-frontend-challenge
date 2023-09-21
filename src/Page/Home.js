import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import "../CSS/Home.css";

import { filtersData } from "../data";
import Filter from "../components/Filter"




const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [catagory, setCatagory] = useState(filtersData[0].catagory.toLowerCase());
  const [Filters, setFilters] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fatchApi() {
    try {
      setLoading(true)
      const result = await fetch(API_URL);
      const data = await result.json();
      console.log("Data is here");
      console.log(data);
      setFilters(filtersData)
      setPosts(data);
      setLoading(false)
    }
    catch (err) {
      console.log("Data is not here")
      setPosts([]);
    }
  }
  useEffect(() => {
    fatchApi();
  }, [])

  function catagoryHandler() {
    console.log("This is a catarogry tag" + catagory)
  }




 


  return (
    <div>

      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (
              <div>
                <div className="mx-auto filterbar  ">
                  {

                    Filters.map((filter) => (

                      <button
                        className="mx-[20px] my-auto text-lg px-2 py-1 rounded-md font-medium 
                        text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300"
                        key={filter.id}
                        onClick={() => setCatagory(filter.catagory.toLowerCase())}
                      >{filter.catagory}</button>
                    ))
                  }
                </div>
                <div className="flex flex-col grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

                  {


                    posts.map((post) => (
                      catagory === 'all' ? (
                        <Product key={post.id} post={post}  catagory={catagory}/>
                      ) : (
                        post.category === catagory ? (<Product key={post.id} post={post}  catagory={catagory}/>) : (console.log("Hey"))
                      )
                    ))

                  }
                </div>

              </div>) :
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
      }
    </div>
  );
}
export default Home;