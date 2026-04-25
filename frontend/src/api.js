const BASE_URL = "http://127.0.0.1:5000";

export async function registerUser(data) {
  return fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export async function loginUser(data) {
  return fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export async function getDashboard(token) {
  return fetch(`${BASE_URL}/api/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
}