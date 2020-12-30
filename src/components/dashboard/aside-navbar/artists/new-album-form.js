import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useContext, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumAvatarUpload from './album-avatar-upload';
import Select from 'react-select';

export default function NewAlbumForm({ setShow }) {
  const [errorForm] = useState(false);
  const [loading] = useState(false);
  const [coverUrl, setCoverUrl] = useState(null);

  const appContext = useContext(AppContext);
  const { artists } = appContext;

  console.log(artists);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <form>
      <section className="grid grid-cols-auto-1fr gap-3">
        <AlbumAvatarUpload coverUrl={coverUrl} setCoverUrl={setCoverUrl} />
        <FormInputModal
          placeholder="Nombre del album"
          error={errorForm}
          // errmessage="Test of error message"
        />
        <Select
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
