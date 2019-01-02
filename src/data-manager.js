class DataManager {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  add(key, value) {
    const data = this.get(key);
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
  }

  delete(index) {
    // ! to implement
  }
}
const dataManager = new DataManager();

export default dataManager;
