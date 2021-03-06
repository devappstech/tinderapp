/*
 *
 * DashboardPage actions
 *
 */

import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

export const getRecommendations = () => ({
  type: GET_RECOMMENDATIONS,
});

export const getRecommendationsSuccess = (profiles) => ({
  type: GET_RECOMMENDATIONS_SUCCESS,
  payload: profiles,
});

export const getRecommendationsError = (err) => ({
  type: GET_RECOMMENDATIONS_ERROR,
  payload: err,
});

// export function getRecommendations() {
//   return {
//     type: GET_RECOMMENDATIONS,
//   };
// }

// export function getRecommendationsSuccess(profiles) {
//   return {
//     type: GET_RECOMMENDATIONS_SUCCESS,
//     payload: profiles,
//   };
// }

// export function getRecommendationsError(err) {
//   return {
//     type: GET_RECOMMENDATIONS_ERROR,
//     payload: err,
//   };
// }
