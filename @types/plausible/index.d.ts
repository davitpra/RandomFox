
// extiende de Windows x eso 
interface Window {
    // es una funcion 
    plausible: (
        // podemos restringir los eventos a estos 3
        event:"Singup"|"add_fox" | "remove_fox",
        // enviamos el segundo parametro
        options?: Options
        // no retorna nada
        ) => void;
}

//definimos el segundo parametro
type Options = {
    // es callback que es una funcion que no retorna
    callback?: () => void;
    // props es un objeto de dos parametros . 
    props?: Record<string, string | number | undefined>;
  };