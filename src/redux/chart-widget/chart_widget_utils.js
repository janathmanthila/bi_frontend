export const getChartWidget = (id, items) => {
    return  items.find(item => item.id === id);

}

export const deleteChartWidget = (id, items) => {
    return  items.filter(item => item.id !== id);

}

export const updateChartWidget = (id, data, items) => {
    return  items.map(item => item.id === id ?{...data}: item);

}

