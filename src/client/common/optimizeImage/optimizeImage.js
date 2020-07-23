
var Jimp = require('jimp');
const resizeImage = async (file) => {
    let newImage
    let image64 = await toBase64(file)
    let image = await Jimp.read(image64)
    image = await image.resize(75, 75)
    image = await image.quality(80)
    await image.getBase64(Jimp.AUTO, (err, res) => {
        newImage = res
    });
    console.log(newImage)
    return newImage
}
const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    return reader.result
});





export default resizeImage