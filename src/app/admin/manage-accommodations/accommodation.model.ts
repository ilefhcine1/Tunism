import { Destination } from '../manage-destinations/destination.model';

export interface Accommodation {
  id: number;
  name: string;
  description: string;
  type: string;
  destination: Destination;
}
