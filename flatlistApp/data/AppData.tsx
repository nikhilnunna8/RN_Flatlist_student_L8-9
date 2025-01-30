type dataType = {
    id: string;
    title: string;
};
const DATA: dataType[] = [
    {id: '1', title: "First"},
    {id: '2', title: "Second"},
    {id: '3', title: "Third"},
    {id: '4', title: "Fourth"}, //can't have the same id for later
];
// Export more than one item in a file by not using default
export {dataType, DATA};
