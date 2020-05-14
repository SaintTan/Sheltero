import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://mylibraryappst.herokuapp.com";

function getAuthors() {
  const endpoint = BASE_URL + `/author-management`;

  // TODO
  // return fetch call that gets author list
  return fetch(endpoint).then((res) => {
    console.log(res);
    return (res.json());
  })
}

export function getAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;

  // TODO
  // return fetch statement to get an author by the id
  return fetch(endpoint).then(res=>{
    return(res.json);
  })
}

export function addAuthor(author) {
  const {first_name, last_name } = author;
  if (!first_name || !last_name) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/author-management/`;

  // TODO
  // return fetch statement to add an author
  console.log(first_name);
  return fetch(endpoint,{
    method:"POST",
    headers:{
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify({
      author_fn:first_name,
      author_ln:last_name
    })
  }).then(res =>window.location.reload());
}

export function updateAuthor(author) {
  const { _id, first_name, last_name } = author;
  if (!_id) {
    alert("must include an id");
    return;
  }
  if (!first_name || !last_name) {
    alert("must include a first name or last name to update");
    return;
  }

  const endpoint = BASE_URL + `/author-management/${author._id}`;
  console.log(endpoint);

  // return fetch query to update an author
  return fetch(endpoint, {
    method:"POST",
    headers:{
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify({
      author_fn:first_name,
      author_ln:last_name
    })
  }).then(res => window.location.reload());
}

export function deleteAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;

  // return fetch query
}

export function useAuthors() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAuthors().then(authors => {
        setAuthors(authors);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    authors,
    error
  };
}
