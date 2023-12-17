import isEmpty from 'lodash/isEmpty';

export default function useLocalStorage(key) {
  function setItem(itemValue) {
    localStorage.setItem(key, JSON.stringify(itemValue));
  }

  function getItem() {
    return JSON.parse(localStorage.getItem(key));
  }

  function removeItem() {
    localStorage.removeItem(key);
  }

  function clear() {
    localStorage.clear();
  }

  function getInitializedOrExistingData(newData) {
    if (!getItem() || isEmpty(getItem())) {
      return newData;
    }
    return getItem();
  }

  return { setItem, getItem, removeItem, clear, getInitializedOrExistingData };
}
