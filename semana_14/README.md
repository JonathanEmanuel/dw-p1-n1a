
### Para seleccionar elementos del HTML utlizamos
``` js
    const elemento = document.querySelector( <selector>)
```

### Para obtener modificar el texto del elemento 
``` js
    elemento.textContent = "Nuevo texto";
``` 

### Para obtener el texto del elemento 
``` js
    let contenido = elemento.textContent;
``` 

### Para seleccionar varios elementos por el mismo selector
``` js
    let elementos = document.querySelectorAll(<selecto>);
    // Nos retorna un NodeList
``` 