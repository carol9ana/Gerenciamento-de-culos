export function getLS(key, fallback) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  }
  
  export function setLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }