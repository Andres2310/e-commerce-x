function Tags() {
  return (
    <ul className="lista mt-5 flex text-sm font-semibold text-center first-letter:text-gray-100 overflow-x-auto">
      <li className="mr-2">
        <a
          href="#"
          className="inline-block py-2 px-3 rounded-3xl bg-gray-800 text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Todo
        </a>
      </li>
      <li className="mr-2">
        <a
          href="#"
          className="inline-block py-2 px-3 rounded-3xl bg-gray-100 text-slate-900
          hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Sudaderas
        </a>
      </li>
      <li className="mr-2">
        <a
          href="#"
          className="inline-block py-2 px-3 rounded-3xl bg-gray-100 text-slate-900
          hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Pantalones
        </a>
      </li>
      <li className="mr-2">
        <a
          href="#"
          className="inline-block py-2 px-3 rounded-3xl bg-gray-100 text-slate-900
          hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Vermudas
        </a>
      </li>
    </ul>
  );
}

export default Tags;
