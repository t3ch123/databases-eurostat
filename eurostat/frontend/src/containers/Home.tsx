import React from "react";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <div>
      <div className="max-w-2xl  m-auto flex justify-center items-center pt-56">
        <SearchInput />
      </div>
      <footer className="absolute bottom-0">
        This website is student lab work and does not necessarily reflect Jacobs
        University Bremen opinions. Jacobs University Bremen does not endorse
        this site, nor is it checked by Jacobs University Bremen regularly, nor
        is it part of the official Jacobs University Bremen web presence. For
        each external link existing on this website, we initially have checked
        that the target page does not contain contents which is illegal wrt.
        German jurisdiction. However, as we have no influence on such contents,
        this may change without our notice. Therefore we deny any responsibility
        for the websites referenced through our external links from here. No
        information conflicting with GDPR is stored in the server.
      </footer>
    </div>
  );
};

export default Home;
