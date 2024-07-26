export class Destination {
  id?: number;
  name: string;
  photoUrl?: string; // Change from photoUrl to photo_url

  constructor(name: string, photoUrl?: string) {
    this.name = name;
    this.photoUrl = photoUrl;
  }
}
