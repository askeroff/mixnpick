class DataManager {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  add(key, value) {
    const data = this.get(key);
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
  }

  update(key, id, value) {
    const data = this.get(key).map(item => {
      if (item.id === id) {
        return value;
      }
      return item;
    });
    localStorage.setItem(key, JSON.stringify(data));
  }

  delete(key, id) {
    const data = this.get(key).filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(data));
  }
}
const dataManager = new DataManager();

export default dataManager;
