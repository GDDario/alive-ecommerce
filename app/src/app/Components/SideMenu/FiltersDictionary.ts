import RangeFilter from "@/app/Components/SideMenu/Filters/RangeFilter";
import CheckboxFilter from "@/app/Components/SideMenu/Filters/CheckboxFilter";
import TextFilter from "@/app/Components/SideMenu/Filters/TextFilter";

const FiltersDictionary = {
    "text": TextFilter,
    "range": RangeFilter,
    "checkbox": CheckboxFilter,
};

export default FiltersDictionary;