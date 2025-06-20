import iconRemove from '../assets/images/icon-remove.svg'

export default function Filter(
    {filters,
        toggleFilter,
        clearFilters
    }: {
        filters: string[],
        toggleFilter: (filter: string) => void,
        clearFilters: () => void
    }

) {
  return (
    <aside className="bg-white rounded-md p-4 md:px-12 flex justify-between shadow-lg mt-[120px] md:mt-[113px]">
      <ul className="flex gap-2 flex-wrap">
        {filters.map((filter, index) => (
          <li
            key={index}
            className="flex bg-teal-100 h-fit text-teal-550 font-bold  rounded-md overflow-hidden"
          >
            <span className="px-2 py-1"> {filter}</span>
            <button
              onClick={() => toggleFilter(filter)}
              className="bg-teal-600 p-2 flex items-center justify-center cursor-pointer hover:bg-teal-800"
            >
              <img src={iconRemove} alt={`Remove ${filter} from the filters`} />
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => clearFilters()}
        className="text-teal-600 font-semibold hover:underline cursor-pointer"
      >
        Clear
      </button>
    </aside>
  )
}
