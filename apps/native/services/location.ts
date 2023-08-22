import { SendLocationRequest, SendLocationResponse } from 'models';
import { LocationService } from '.';

export const sendLocation = async ({ id, latitude, longitude }: SendLocationRequest) => {
  return await LocationService.post<SendLocationResponse>(`/${id}`, {
    latitude,
    longitude,
  });
};
