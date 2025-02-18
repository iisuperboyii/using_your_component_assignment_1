import BookCard from './components/bookcard';

function App() {
  const books = [
    {
      id: 1,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
      name: 'The Great Adventure',
      genre: 'Fiction',
      author: 'Jane Doe',
    },
    {
      id: 2,
      image: 'https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf',
      name: 'Mysteries of the Universe',
      genre: 'Science',
      author: 'John Smith',
    },
    {
      id: 3,
      image: 'https://images3.penguinrandomhouse.com/cover/9781933771106',
      name: 'History Revisited',
      genre: 'Non-Fiction',
      author: 'Emily Johnson',
    },
    {
      id: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg',
      name: 'Culinary Delights',
      genre: 'Cooking',
      author: 'Michael Brown',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Book Collection</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  </div>
  );
}

export default App;