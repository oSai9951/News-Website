import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";

export const NewsDataContext = createContext();

const StarterFile = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [category, setCategory] = useState("general");
  const [error, setError] = useState('');
 
  
  
  const [signUp, setSignUp] = useState(() => JSON.parse(localStorage.getItem('signUp')) || false);
  const [search, setSearch] = useState("");
  const [searchedNews, setSearchedNews] = useState([]);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {
    firstName: "",
    lastName: "",
    gender: "",
    tnc: false,
    password: "",
    email: "",
  });

  const formRef = useRef(null);
  const location = useLocation();

 
  useEffect(() => {
    localStorage.setItem('signUp', JSON.stringify(signUp));
  }, [signUp]);


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const formReference = () => {
    if (!signUp) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  useEffect(() => {
    document.title = `News | ${category}`;
  }, [category]);

 
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setError('');
      

        const pathCategory = location.pathname.replace("/", "") || "general";
        setCategory(pathCategory);

        const api = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=${pathCategory}&lang=en&max=10&apikey=${import.meta.env.VITE_KEY_KEY}`
        );

        if (!api.ok) throw new Error("Failed to fetch data");

        const response = await api.json();
        setFetchedData(response.articles);
      } catch (error) {
        console.error("Error fetching the news:", error.message);
        setError(error.message);
      } 
    };

    fetchAPI();
  }, [location]);

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSignUp(true);
  };

  const resetForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      gender: "",
      tnc: false,
      password: "",
      email: "",
    });
    setSignUp(false);
  };

  const handleSearchInput = useCallback((e) => {
    const input = e.target.value.toLowerCase();
    setSearch(input);

    const filteredNews = fetchedData.filter((news) =>
      news.title.toLowerCase().includes(input)
    );

    setSearchedNews(filteredNews);
  }, [fetchedData]);

  return (
    <>
      <NewsDataContext.Provider
        value={{
          fetchedData,
          setCategory,
          error,
          handleInput,
          handleFormSubmit,
          signUp,
          user,
          formRef,
          formReference,
          handleSearchInput,
          search, 
          searchedNews,
          resetForm
        }}
      >
        <Header />
        <div style={{ minHeight: '100vh' }}>
          <Outlet />
        </div>
        <Footer />
      </NewsDataContext.Provider>
    </>
  );
};

export default StarterFile;
