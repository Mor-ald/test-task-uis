import axios from 'axios';

/**
 * Get a meters data from the Meters API
 * @param limit - limit of meters
 * @param offset - offset of meters
 * @returns ```CountersMetersApiData```
 */
export function getMeters(limit: number, offset: number) {
  return axios.get(
    `${import.meta.env.VITE_APP_API_METERS_PATH}?limit=${limit}&offset=${offset}`
  );
}

/**
 * Get a areas data from the Areas API
 * @param idArea - Id of a area
 * @returns ```CountersAreasApiData```
 */
export async function getAreas(idArea: string) {
  return axios.get(
    `${import.meta.env.VITE_APP_API_AREAS_PATH}?id__in=${idArea}`
  );
}

/**
 * Delete meter by Id from the Meters API
 * @param id - Id of a meter
 * @returns ```unknown```
 */
export async function deleteMeter(id: string) {
  return axios.delete(`${import.meta.env.VITE_APP_API_METERS_PATH}:${id}`);
}
