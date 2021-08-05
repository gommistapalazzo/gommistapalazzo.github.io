const DEFAULT_URL = "https://www.ernesto.it/api/v1/medias/get/md-d63b6850-64d7-41ae-9916-86f5bd3093cd"

class ServiceModel {
  constructor(name, description, photoHome = DEFAULT_URL, photos = []) {
    this.name = name;
    this.descriotion = description;
    this.photos = photos;
    this.photoHome = photoHome;
  }
}

export default ServiceModel;