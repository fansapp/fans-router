// THIS FILE IS GIVEN AS REFERENCE ONLY

// import startsWith from 'lodash.startswith';
// import Rest from '../../lib/rest';
// import makePayload from '../helpers/makePayload';
// import mapActionData from '../helpers/mapActionData';
// import ACTIONS from '../../shared/constants/actionTypes';
// import mocks from '../api/mocks';
//
//
// const patch = (req, res) => {
//   const token = req.body.token;
//
//   if (process.env.DEBUG && startsWith(token, 'debug-')) {
//     const step = req.body.actionType;
//     if (Object.values(ACTIONS).includes(step)) {
//       res.send({
//         success: true,
//         data: mocks.next(step),
//       });
//       return;
//     }
//
//     res.send({
//       success: true,
//       data: mocks.netbanx_user,
//     });
//     return;
//   }
//
//   const payload = makePayload(req);
//
//   Rest.patch(`${process.env.ONBOARDING_SERVICE_URL}/api/v1/onboardings/${token}`, payload)
//   .then((response) => {
//     if (response.success) {
//       res.send({
//         ...response,
//         data: mapActionData(token, response.data),
//       });
//       return;
//     }
//
//     res.send(response);
//   });
// };
//
// const post = (req, res) => {
//   // Submit data to onboarding service
//   Rest.post(`${process.env.ONBOARDING_SERVICE_URL}/api/v1/onboardings`, {
//     user: {
//       email: req.body.email,
//     },
//     company: {
//       name: req.body.companyName,
//       countryCode: req.body.country.toUpperCase(),
//       language: req.body.language,
//     },
//   })
//   .then((r) => {
//     if (r.success) {
//       res.send({ token: r.data.token });
//       return;
//     }
//     res.send(r);
//   });
// };
//
//
// export default {
//   patch,
//   post,
// };
