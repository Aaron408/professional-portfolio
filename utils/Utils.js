// Utility functions for the portfolio application

class Utils {
  // Element toggle function
  static elementToggleFunc(elem) {
    if (elem) {
      elem.classList.toggle("active");
    }
  }

  // Smooth scroll to top
  static scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Debounce function for performance optimization
  static debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }

  // Format date for display
  static formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  }

  // Validate email format
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Sanitize HTML content
  static sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  // Get element by data attribute
  static getElementByData(dataAttribute, value = null, parent = document) {
    if (value) {
      return parent.querySelector(`[${dataAttribute}="${value}"]`);
    }
    return parent.querySelector(`[${dataAttribute}]`);
  }

  // Get all elements by data attribute
  static getElementsByData(dataAttribute, value = null, parent = document) {
    if (value) {
      return parent.querySelectorAll(`[${dataAttribute}="${value}"]`);
    }
    return parent.querySelectorAll(`[${dataAttribute}]`);
  }

  // Create element with attributes and content
  static createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'innerHTML') {
        element.innerHTML = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else {
        element.setAttribute(key, value);
      }
    });
    
    if (content) {
      element.innerHTML = content;
    }
    
    return element;
  }

  // Load image with promise
  static loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  // Local storage helpers
  static storage = {
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
      }
    },

    get(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error('Error reading from localStorage:', e);
        return defaultValue;
      }
    },

    remove(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        console.error('Error removing from localStorage:', e);
        return false;
      }
    },

    clear() {
      try {
        localStorage.clear();
        return true;
      } catch (e) {
        console.error('Error clearing localStorage:', e);
        return false;
      }
    }
  };

  // Event emitter for component communication
  static eventEmitter = {
    events: {},

    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    },

    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach(callback => callback(data));
      }
    },

    off(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      }
    }
  };

  // Animation helpers
  static animate = {
    fadeIn(element, duration = 300) {
      element.style.opacity = '0';
      element.style.display = 'block';
      
      const start = performance.now();
      
      function fade(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
          element.style.opacity = progress;
          requestAnimationFrame(fade);
        } else {
          element.style.opacity = '1';
        }
      }
      
      requestAnimationFrame(fade);
    },

    fadeOut(element, duration = 300) {
      const start = performance.now();
      const initialOpacity = parseFloat(element.style.opacity) || 1;
      
      function fade(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
          element.style.opacity = initialOpacity * (1 - progress);
          requestAnimationFrame(fade);
        } else {
          element.style.opacity = '0';
          element.style.display = 'none';
        }
      }
      
      requestAnimationFrame(fade);
    }
  };
}

export default Utils;
