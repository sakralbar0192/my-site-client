function App() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello webpack';
  
    return element;
}

document.body.appendChild(App());