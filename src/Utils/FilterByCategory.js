export const filterByCategory = (data, category) => {

    let copied = [...data]

     if(category.length !== 0){
        return copied.filter((eachVideo) => category.includes(eachVideo.categoryName))
     }

     return copied

}