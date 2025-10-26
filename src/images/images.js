// Tự động import tất cả file ảnh trong thư mục
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { 
    const fileName = item.replace("./", "");
    images[fileName] = r(item);
  });
  return images;
};

export default importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));
