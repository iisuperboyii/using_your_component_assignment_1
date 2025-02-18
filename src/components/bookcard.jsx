const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={name} className="w-full h-64 object-cover hover:opacity-90 transition-opacity duration-200" />
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-900 truncate hover:text-blue-600 transition-colors duration-200">{name}</h2>
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Genre:</span> {genre}
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Author:</span> {author}
        </div>
      </div>
    </div>

  );
};

export default BookCard;