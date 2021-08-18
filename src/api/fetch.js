import axios from "axios";

function getPictures(query, page) {
  return axios({
    method: "GET",
    url: `https://pixabay.com/api/?q=${query}&page=${page}&key=21806148-ef05846c07274d590c18cb52e&image_type=photo&orientation=horizontal&per_page=12`,
  });
}

export default getPictures;
