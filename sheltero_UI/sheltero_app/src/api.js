const BASE_URL = "https://shelteroinf.herokuapp.com";

// using axios to interact with API
const axios = require("axios");

export async function postUsersSignup(data) {
  const endpoint = BASE_URL + "/user/signup";
  console.log("post user sign up");
  const response = await fetch(endpoint, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function updateUserState() {
  const url = "https://shelteroinf.herokuapp.com/user";
  try {
    axios
      .get(url, { withCredentials: true, crossdomain: true })
      .then(response => {
        console.log(response.data);
        if (response.data == "no user session") {
          console.log("change isLogIn state to false");
          window.sessionStorage.setItem("loggedIn", false);
        } else {
          console.log("change isLogIn state to true");
          console.log(response.data);
          window.sessionStorage.setItem("loggedIn", true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
}

export async function updateUserProfile(data) {
  const endpoint = BASE_URL + "/user/updateUser";
  console.log("update user profile");
  const response = await fetch(endpoint, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function getUserInfo() {
    console.log("inside getuser info");
    const url = "https://shelteroinf.herokuapp.com/user";
    try {
      axios
        .get(url, { withCredentials: true, crossdomain: true })
        .then(response => {
          console.log(response.data);
          if (response.data == "no user session") {
            console.log("user not logged in!");
            return response.data;
          } else {
            console.log("user is logged in");
            console.log(response.data);
            return response.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

/**
 * Retrieves the list of authors from API
 * @return List of Objects, each containing author data.
 */
/*
export function getJobs() {
    const endpoint = BASE_URL + `/job-search`;
    console.log("getJobs");
    try{
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;
    }

}

*/

/**
 * Retrieves a single job from API using the job ID
 * @param {string} job_id -- uniquely identifies each job
 * @return Single Objects containing author data.
 */
/*
export function  getJob(_id) {
    const endpoint = BASE_URL + `/job-search/${_id}`;

    try{
        return axios.get(endpoint).then(res => res.data);
    } catch (e) {
        return e;

    }
}
*/

export function getJobsByTag(tag) {
  let sanitize_tag = tag
    .replace(" ", "_")
    .replace("/", "")
    .replace(",", "");
  const endpoint = BASE_URL + `/job-search/byTag/${sanitize_tag}`;
  console.log(endpoint);

  try {
    return axios
      .get(endpoint)
      .then(res => res.data)
      .catch(e => {});
  } catch (e) {
    return e;
  }
}

export function getJobsByArea(area) {
  let sanitize_area = area
    .replace(" ", "_")
    .replace("/", "")
    .replace(",", "");
  const endpoint = BASE_URL + `/job-search/byArea/${sanitize_area}`;
  console.log(endpoint);

  try {
    return axios
      .get(endpoint)
      .then(res => res.data)
      .catch(e => {});
  } catch (e) {
    return e;
  }
}

/**
 * Updates the details of an author; changes only the first and last name
 * @param {object} Job {jobID,jobTitle,salary,credit_level,jobDetail,companyID,jobTag,contact,jobArea}
 */
// export function updateJob(job) {
//     const { _id,jobTitle,salary,credit_level,jobTag,contact,jobArea,companyID,jobDetail} = job;
//     const endpoint = BASE_URL + `/job/${_id}`;
//     // check the author id is present
//     if (!_id & jobTitle & jobArea) {
//         alert("must include jobid, title and jobArea");
//         return;
//     }
//     // check that both contain some text
//     if (!companyID || !credit_level) {
//         alert("must include a credit_level or companyID to update");
//         return;
//     }
//
//     console.log({
//         _id,
//         jobTitle,
//         salary,
//         credit_level,
//         jobDetail,
//         companyID,
//         jobTag,
//         contact,
//         jobArea
//     });
//
//
//     console.log("updateJob");
//
//     return axios({
//         url: endpoint,  // send a request to the API
//         method: "POST", // HTTP POST method
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data: JSON.stringify({ // payload -- values to change
//             jobTitle,
//             salary,
//             credit_level,
//             jobDetail,
//             companyID,
//             jobTag,
//             contact,
//             jobArea
//         })
//     })
//
// }
