import SearchIcon from '@heroicons/react/outline/SearchIcon';

function Search() {
  return (
    <label className="relative">
      <SearchIcon className="text-gray-500 left-2 top-2 h-5 w-5 absolute pointer-events-none" />
      <input
        type="text"
        name="search"
        id="search"
        className="bg-white pl-8 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl"
        placeholder="Search Maps"
      />
    </label>
  );
}

export default function Menu() {
  return (
    <div className="grid grid-flow-row auto-rows-max p-2 gap-4 bg-gray-50 rounded-lg shadow-md absolute top-5 left-5">
      <Search />
    </div>
  );
}
