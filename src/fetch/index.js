
//Must be changed before prod
let baseApiUri = "https://localhost:7006";

async function login(logininfo) {
  const resp = fetch(`${baseApiUri}/login`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(logininfo),
  })
  .then(async (response) => {
    const data = await response.json();
    return data;
  })
  .catch(err => {
      throw new Error(err.error.message);
  });

  return resp;
}

async function signup(signupinfo) {
  const resp = fetch(`${baseApiUri}/signup`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(signupinfo),
  })
  .then( async (resp) => {
      const data = await resp.json();
      return data;
  })
  .catch(err => {
    throw new Error(err.error.message);
  });

  return resp;
}

export const apiCalls = {
  login,
  signup,
};
