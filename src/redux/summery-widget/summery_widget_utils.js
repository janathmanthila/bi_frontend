export const getSummeryWidget = (id, items) => {
    return  items.find(item => item.id === id);

}

export const deleteSummeryWidget = (id, items) => {
    return  items.filter(item => item.id !== id);

}

export const updateSummeryWidget = (id, data, items) => {
    return  items.map(item => item.id === id ?{...data}: item);

}

