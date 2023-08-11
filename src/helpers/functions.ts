import {SearchBlockStateType, CheckboxesType} from "@/src/redux/searchBlockSlice/searchBlockTypes";
export const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}



export const toggleCheckbox = (state: SearchBlockStateType, id: string, collection: Array<CheckboxesType>) => {
    const checkbox = collection.find(item => item.id === id);
    if (checkbox) {
        checkbox.isChecked = !checkbox.isChecked;
    }
};

export const toggleAllCheckbox = (state: SearchBlockStateType, id: string) => {
    //@ts-ignore
    state[id].isAllChecked = !state[id].isAllChecked;
    // @ts-ignore
    if(!state[id].isAllChecked) {
        // @ts-ignore
        state[id].checkboxArr.map( (item) => {item.isChecked = false})
    }

    // @ts-ignore
    if(state[id].isAllChecked) {
        // @ts-ignore
        state[id].checkboxArr.map( (item) => {item.isChecked = true})
    }
};
