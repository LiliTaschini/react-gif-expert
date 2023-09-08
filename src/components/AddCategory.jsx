import { useState } from "react";

export const AddCategory = ({ onNewCtaegory }) => {
  const [inputValue, setInputValue] = useState("");


  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };

  const onSubmit = ( event ) => {
    if ( inputValue.trim().length <= 1 ) return;
    event.preventDefault();
    /*setCategories([ ...categories, inputValue ]); */
    onNewCtaegory( inputValue.trim() );
    setInputValue("");
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIFS"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};
