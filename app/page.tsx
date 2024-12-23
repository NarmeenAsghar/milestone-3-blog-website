import Article from "@/components/Article";
import Blogsection from "@/components/Blogsection";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Technews from "@/components/Technews";
import React from "react";

export default function Home() {
  return (
   <section>
    <Hero />
    <Article />
    <Blogsection />
    <Technews />
    <Newsletter />
   </section>
  );
}
