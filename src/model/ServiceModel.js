class ServiceModel {
  constructor(name, description, photos = []) {
    this.name = name;
    this.descriotion = description;
    this.photos = photos;
  }
}

export default ServiceModel;