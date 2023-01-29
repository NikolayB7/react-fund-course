import Input from "./UI/input/Input";
import Select from "./UI/select/Select";
const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                placeholder="Search"
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            ></Input>
            <Select
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={'Sorting'}
                options={[
                    { value: 'title', name: 'Sort name' },
                    { value: 'description', name: 'Sort description' }
                ]}
            ></Select>
        </div>
    );
};

export default PostFilter;