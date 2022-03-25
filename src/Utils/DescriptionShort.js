export const descriptionShort = (str) => {
    return str.split(' ').splice(0, 20).join(' ')+"..."
}

export const titleShort = (str) => {
    return str.split(' ').splice(0, 5).join(' ')
}
