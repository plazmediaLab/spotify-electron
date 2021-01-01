import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumAvatarUpload from './album-avatar-upload';
import Select from 'react-select';
import customStyles from './custom-styles-select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errManagerUploadFile } from 'utils/Api';

export default function NewAlbumForm({ setShow }) {
  const [errorFileSettings, setErrorFileSettings] = useState({});
  const [loading] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);

  const appContext = useContext(AppContext);
  const { artists } = appContext;

  const formik = useFormik({
    initialValues: {
      albumName: '',
      artist: '',
      avatarCover: ''
    },
    validationSchema: Yup.object({
      albumName: Yup.string().required('El campo NOMBRE de album es requerido.'),
      artist: Yup.string().required('El campo ARTISTA es requerido.'),
      avatarCover: Yup.string().test(
        'cover-validate',
        'La imagen de portada es requerida.',
        () => fileUpload
      )
    }),
    onSubmit: async (values) => {
      console.log(values);
      console.log(fileUpload);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="grid grid-cols-auto-1fr gap-x-3 gap-y-4 out">
        <AlbumAvatarUpload
          coverUrl={coverUrl}
          setCoverUrl={setCoverUrl}
          setFileUpload={setFileUpload}
          formikError={formik.errors.avatarCover}
          setErrorFileSettings={setErrorFileSettings}
        />
        <FormInputModal
          autoFocus
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
      {formik.errors.avatarCover && (
        <p className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
          {formik.errors.avatarCover}
        </p>
      )}
      {errorFileSettings.length > 0 &&
        errorFileSettings[0].errors.map((err, index) => (
          <p
            key={index}
            className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
            {errManagerUploadFile(err.code)}
          </p>
        ))}
      <FormButton loading={loading} disabled={loading}>
        Agregar
      </FormButton>
    </form>
  );
}
