import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PublisherList from './pages/Publisher/PublisherList';
import PublisherForm from './pages/Publisher/PublisherForm';
import CategoryList from './pages/Category/CategoryList';
import CategoryForm from './pages/Category/CategoryForm';
import BookList from './pages/Book/BookList';
import BookForm from './pages/Book/BookForm';
import AuthorList from './pages/Author/AuthorList';
import AuthorForm from './pages/Author/AuthorForm';
import BorrowingList from './pages/Borrowing/BorrowingList';
import BorrowingForm from './pages/Borrowing/BorrowingForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publishers" element={<PublisherList />} />
          <Route path="/publishers/new" element={<PublisherForm />} />
          <Route path="/publishers/edit/:id" element={<PublisherForm />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/new" element={<CategoryForm />} />
          <Route path="/categories/edit/:id" element={<CategoryForm />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/edit/:id" element={<BookForm />} />
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/authors/new" element={<AuthorForm />} />
          <Route path="/authors/edit/:id" element={<AuthorForm />} />
          <Route path="/borrowings" element={<BorrowingList />} />
          <Route path="/borrowings/new" element={<BorrowingForm />} />
          <Route path="/borrowings/edit/:id" element={<BorrowingForm />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;

