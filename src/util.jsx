export function GetImageUrl2(person) {
  return `https://i.imgur.com/` + person.imageId + "s.jpg";
}

export function GetImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
