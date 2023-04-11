

/* 
1- Responder las siguientes preguntas:
a- ¿Qué es JSX?
    La extensión de archivo .jsx se utiliza en React para indicar que un archivo contiene código JavaScript y JSX (JavaScript XML).
    !JSX es una extensión de sintaxis que permite escribir código HTML y XML dentro de JavaScript de manera fácil y legible. En lugar de definir elementos de la interfaz de usuario en el código JavaScript como cadenas de texto, se pueden escribir elementos HTML y XML como etiquetas dentro del código JavaScript.

    React utiliza JSX para definir la estructura y apariencia de la interfaz de usuario (IU) y renderizar componentes de manera declarativa. La sintaxis de JSX es similar a HTML, pero también permite incluir expresiones JavaScript en el código, lo que facilita el dinamismo y la reutilización de las IUs.
    Para que el código JSX se ejecute correctamente, es necesario que sea compilado a JavaScript válido. La mayoría de los proyectos de React incluyen un preprocesador de JSX que compila el código antes de que se ejecute en el navegador


b- ¿Qué es un estado en React?
    !El estado (state) es un objeto que contiene datos que pueden cambiar a lo largo del ciclo de vida de un componente. Los componentes de React pueden tener estado y, cuando el estado cambia, React actualiza automáticamente la interfaz de usuario para reflejar esos cambios.

    Cada vez que se actualiza el estado de un componente, React se encarga de volver a renderizarlo para reflejar los cambios. Entonces, el estado es una forma de "controlar el flujo de datos" en una aplicación React y de asegurarse de que la interfaz de usuario se actualice correctamente.

    Para definir el estado en un componente, se utiliza la función useState, que es un Hook de React que permite definir una variable de estado y una función para actualizarla. La sintaxis es la siguiente:

        const [state, setState] = useState(initialState);

    state es la variable que contiene el estado actual, y setState es la función que se utiliza para actualizar el estado. initialState es el valor inicial del estado.

    !El estado es una características de las más importantes porque permite que los componentes se actualicen y re-rendericen de manera dinámica y en tiempo real en respuesta a cambios en la aplicación o en la interacción del usuario.
    Resuminedo, el estado en React es una herramienta para "controlar la lógica de una aplicación" y para asegurarse de que la interfaz de usuario se actualice correctamente. Utilizando el Hook useState, se puede definir una variable de estado y una función para actualizarla, y luego utilizarla en el componente para mostrar información dinámica y controlar su comportamiento.


c- ¿Qué es un componente?
    !Un componente es una unidad modular y reutilizable que representa una parte de la interfaz de usuario de una aplicación.
    !Es una pieza modular de código que encapsula una funcionalidad específica y puede ser reutilizada en diferentes partes de una aplicación.
    Un componente puede ser una sección completa de la página, como un encabezado o un pie de página, o una pieza más pequeña, como un botón o un formulario de entrada.

    Cada componente de React puede tener su propio estado interno, propiedades (props) que son pasadas desde el componente padre y métodos para manipular el estado y las propiedades. Los componentes pueden ser divididos en dos tipos: los componentes de clase y los componentes funcionales.

        # Componentes funcionales son funciones simples que reciben propiedades (props) y devuelven elementos React.
        Son definidos mediante una función de JavaScript que recibe las propiedades (props) como argumento y retorna elementos React que representan la UI del componente. Los componentes funcionales  los componentes funcionales pueden tener un estado propio a través del uso de hooks de estado, como useState, y pueden definir métodos a través de otros hooks como useEffect, useMemo y useCallback, entre otros.

        # Los componentes de clase son definidos mediante una clase de JavaScript que extiende la clase React.Component. En la clase se define un método render() que retorna una jerarquía de elementos React que representan la UI del componente. Los componentes de clase pueden tener un estado y métodos que son llamados en respuesta a eventos o cambios en el estado.

    Los componentes permiten a los desarrolladores dividir la interfaz de usuario en piezas más pequeñas y manejables, lo que hace que el código sea más fácil de entender, mantener y reutilizar. Además, al tener componentes modulares y reutilizables, los desarrolladores pueden construir interfaces de usuario más grandes y complejas de manera más eficiente y escalable.


d- ¿Para qué sirve el hook useState?
    El hook useState: es una función que se utiliza en componentes de React para definir un estado local. Este estado puede ser cualquier tipo de dato, desde un número o una cadena de texto hasta un objeto o una matriz.

    !Permite a los componentes funcionales tener un estado interno. Se utiliza para declarar variables de estado en un componente funcional y manejar su actualización. El hook useState devuelve un array que contiene dos elementos: el valor actual del estado y una función que actualiza ese valor.

    La sintaxis básica de useState es la siguiente:
        const [state, setState] = useState(initialState);
        - state es la variable que almacena el valor actual del estado
        - setState es la función que se utiliza para actualizar ese valor
        - initialState es el valor inicial del estado que se proporciona cuando se crea la variable de estado.
    
    Ejemplo: supongamos que tenemos un componente de React que muestra un contador. Podemos utilizar useState para definir un estado count y luego actualizar ese estado cuando el usuario haga clic en un botón. El código se vería así:
        //////////////////////////////////////////////////////////////////////////////
        import React, { useState } from 'react';

        function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            </div>
        );
        }

        export default Counter;
        ///////////////////////////////////////////////////////////////////////////////
        El estado inicial de count es 0, pero se puede inicializar con cualquier valor. La función setCount se utiliza para actualizar el estado de count cada vez que el usuario hace clic en el botón de incrementar.
    
    En Resumen:
        !El uso de useState nos permite crear componentes con estado en React de forma más fácil y sencilla. Además, al utilizar esta función, podemos asegurarnos de que el estado se actualiza de forma inmutable, lo que significa que no modificamos el estado actual sino que creamos un nuevo estado basado en el anterior. Esto es importante para garantizar el rendimiento y la estabilidad de la aplicación.


e- ¿Para qué sirve el hook useEffect?


f- ¿Qué es el contexto en React?




Fuente: [https://chat.openai.com/]



c- Un componente en React es una pieza de código reutilizable que encapsula la lógica y la interfaz de usuario de una sección de la aplicación. Un componente puede tener propiedades (props) y estado (state), y puede ser utilizado dentro de otros componentes o dentro del árbol de componentes de la aplicación.

d- El hook useState es una función que permite a los componentes de React tener estado. Cuando se llama a useState con un valor inicial, devuelve un array con dos elementos: el valor actual del estado y una función para actualizar el estado. Al llamar a esta función, React actualiza automáticamente la interfaz de usuario para reflejar los cambios en el estado.

e- El hook useEffect es una función que permite a los componentes de React realizar operaciones secundarias, como por ejemplo, llamar a una API o actualizar el título de la página, cuando se actualiza el estado o se monta o desmonta el componente. El hook useEffect toma como parámetro una función que se ejecuta después de que el componente se renderiza.

f- El contexto (context) en React es un mecanismo que permite pasar datos de un componente a otro sin tener que pasar explícitamente las props a través de cada nivel del árbol de componentes. El contexto se define en un componente padre y puede ser utilizado por cualquier componente hijo que esté dentro del árbol de componentes de ese padre. El contexto es especialmente útil para datos globales que se utilizan en muchos componentes de la aplicación.




2- Consumir una API (a elección) o utilizando alguna de las siguientes:
 Pokimons: https://pokeapi.co/api/v2/pokemon
 Libros: https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]
 Perros Pug: https://dog.ceo/api/breed/pug/images
 Personajes de Disney: https://api.disneyapi.dev/characters
 Juegos: https://www.freetogame.com/api/games
 Ricky Martin: https://rickandmortyapi.com/api/character
 Yugioh:https://db.ygoprodeck.com/api/v7/cardinfo.php?type=%27Normal%20Mon
ster%27
 MMO games: https://www.mmobomb.com/api1/games
 Star Wars: https://swapi.dev/api/people
 Mas...: https://github.com/public-apis/public-apis
Y crear una aplicación que realice lo siguiente:
 Listar los elementos obtenidos de la API
 Eliminar un elemento de la lista (opcional)

Detalles a tener en cuenta:
 La aplicación debe contar con una sola pagina
 Debe tener un botón que al presionarlo realice la petición y cargue la lista
 El sistema debe contener al menos un componente hijo en la carpeta components
 El sistema debe hacer uso de los hooks de React (el que sea necesario)
 No usar chat GPT para hacer todo...
*/