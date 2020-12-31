import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useContext, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumAvatarUpload from './album-avatar-upload';
import Select from 'react-select';
import { red } from 'tailwindcss/colors';

export default function NewAlbumForm({ setShow }) {
  const [errorForm] = useState(false);
  const [loading] = useState(false);
  const [coverUrl, setCoverUrl] = useState(null);

  const appContext = useContext(AppContext);
  const { artists } = appContext;

  const customStyles = {
    singleValue: () => ({
      color: '#F3F3F9',
      paddingLeft: '0.25rem'
    }),
    input: () => ({
      color: '#F3F3F9'
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: '#494A4E'
    }),
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      boxShadow: 'none',
      border: 'none',
      backgroundColor: isFocused ? '#494A4E' : '#16171B',
      borderRadius: '0.25rem'
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isSelected ? '#7000f8' : '',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':hover': {
          backgroundColor: '#dbbffd'
        }
      };
    },
    placeholder: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? '#F3F3F9' : '#494A4E'
    })
  };

  return (
    <form>
      <section className="grid grid-cols-auto-1fr gap-3 out">
        <AlbumAvatarUpload coverUrl={coverUrl} setCoverUrl={setCoverUrl} />
        <FormInputModal
          placeholder="Nombre del album"
          error={errorForm}
          // errmessage="Test of error message"
        />
        <Select
          styles={customStyles}
          // theme={(theme) => ({
          //   ...theme,
          //   borderRadius: '0.25rem',
          //   colors: {
          //     ...theme.colors,
          //     primary25: '#dbbffd',
          //     primary: '#7000f8'
          //   }
          // })}
          options={artists}
          className="text-background"
          isLoading={false}
          isDisabled={false}
          placeholder="Artistas..."
          onChange={(artistSelected) => console.log(artistSelected)}
          // obtener [value] renombrado id del array de opciones
          getOptionValue={(artist) => artist.id}
          // obtener [label] renombrado name del array de opciones
          getOptionLabel={(artist) => artist.name}
          // mensaje al no encontrar elementos buscados
          noOptionsMessage={() => 'No se encontro resultados'}
        />
      </section>
      <FormButton loading={loading} disabled={loading}>
        Agregar
      </FormButton>
    </form>
  );
}
