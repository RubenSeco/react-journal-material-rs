import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: "dqmr8bgui",
  api_key: "439169393284247",
  api_secret: "g7akBQ71KYpqnaMPJ4ZjWQYhoeo",
  secure: true
});


describe('Pruebas en fileUpload', () => {

  test('Debe subir el archivo correctamente a cloudinary', async () => {

    const imageUrl = "https://cdn.pixabay.com/photo/2023/07/04/10/30/dragon-fly-8105990_1280.jpg";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    // console.log(url);
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    await cloudinary.api.delete_resources(["journal/" + imageId], { resource_type: "image" });



  });

  test('Debe retornar null', async () => {

    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);

  });

});