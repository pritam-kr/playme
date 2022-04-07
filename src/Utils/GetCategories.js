export const uniqueCategory = (data, category) => {

  const categoryName = data?.map((eachVideo) => eachVideo[category]);
  // get Unique Category name in array
  return [...new Set(categoryName)];
};
