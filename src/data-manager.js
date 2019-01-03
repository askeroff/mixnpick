class DataManager {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  add(key, value) {
    const data = this.get(key);
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
  }

  delete(key, id) {
    const data = this.get(key).filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(data));
  }
}
const dataManager = new DataManager();

export default dataManager;
