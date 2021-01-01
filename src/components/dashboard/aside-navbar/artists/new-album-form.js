import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useContext, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumAvatarUpload from './album-avatar-upload';
import Select from 'react-select';
import customStyles from './custom-styles-select';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function NewAlbumForm({ setShow }) {
  const [errorForm] = useState(false);
  const [loading] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);

  const appContext = useContext(AppContext);
  const { artists } = appContext;

  const formik = useFormik({
    initialValues: {
      albumName: '',
      avatarCover: '',
      artist: ''
    },
    validationSchema: Yup.object({
      albumName: Yup.string().required('El campo NOMBRE de album es requerido.'),
      artist: Yup.string().required('El campo ARTISTA es requerido.')
    }),
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="grid grid-cols-auto-1fr gap-3 out">
        <AlbumAvatarUpload
          coverUrl={coverUrl}
          setCoverUrl={setCoverUrl}
          setFileUpload={setFileUpload}
        />
        <FormInputModal
          name="albumName"
          placeholder="Nombre del album"
          error={formik.touched.albumName && formik.errors.albumName}
          value={formik.values.albumName}
          onChange={formik.handleChange}
          // errmessage="Test of error message"
        />
        <Select
          value={formik.values.artists}
          styles={customStyles}
          options={artists}
          className={`text-background ${formik.errors.artist ? 'ring-red-600 ring-2 rounded' : ''}`}
          isLoading={false}
          isDisabled={false}
          placeholder="Artistas..."
          name=""
          onChange={(artistSelected) => (formik.values.artist = artistSelected.id)}
          getOptionValue={(artist) => artist.id}
          getOptionLabel={(artist) => artist.name}
          noOptionsMessage={() => 'No se encontro resultados'}
        />
      </section>
      {formik.errors.albumName && (
        <p className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
          {formik.errors.albumName}
        </p>
      )}
      {formik.errors.artist && (
        <p className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
          {formik.errors.artist}
        </p>
      )}
      <FormButton loading={loading} disabled={loading}>
        Agregar
      </FormButton>
    </form>
  );
}
