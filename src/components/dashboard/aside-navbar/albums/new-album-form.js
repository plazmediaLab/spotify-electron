import FormButton from 'components/resources/form-button';
import FormInputModal from 'components/resources/form-input-modal';
import { useContext, useState } from 'react';
import AppContext from 'reducer/App/AppContext';
import AlbumAvatarUpload from './album-avatar-upload';
import Select from 'react-select';
import customStyles from '../artists/custom-styles-select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errManagerUploadFile } from 'utils/Api';
import createAt from 'helpers/createAt';
import { db, storage } from 'utils/Firebase';
import AuthContext from 'reducer/Auth/AuthContext';
import ResizeCropImage from 'components/resources/resize-crop-image';
import sluglify from 'helpers/sluglify';
import uuidGenerate from 'helpers/uuidGenerate';

export default function NewAlbumForm() {
  const [errorFileSettings, setErrorFileSettings] = useState({});
  const [loading, setLoading] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [selectValue, setSelectValue] = useState(null);

  const appContext = useContext(AppContext);
  const { artists } = appContext;

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

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
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      const fileName = uuidGenerate();
      const slug = sluglify(values.albumName);

      const ref = storage.ref().child(`albums/${fileName}`);
      const albumExist = await db.collection('albums').where('slug', '==', slug).get();

      if (albumExist.empty) {
        ref
          .put(fileUpload)
          .then(() => {
            db.collection('albums')
              .add({
                name: values.albumName,
                artist: values.artist,
                cover: fileName,
                slug: slug,
                createAt: createAt()
              })
              .then(() => {
                toastMessageMethod({
                  type: 'success',
                  message: 'Album creado exitosamente!.'
                });
                resetForm(formik.initialValues);
                setFileUpload(null);
                setCoverUrl(null);
                setSelectValue(null);
              })
              .catch(() => {
                toastMessageMethod({
                  type: 'error',
                  message: 'Error al gusrdar los datos, intentelo más tarde.',
                  closeTime: 4000
                });
              });
          })
          .catch((err) => {
            toastMessageMethod({
              type: 'error',
              message: errManagerUploadFile(err.code)
            });
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        toastMessageMethod({
          type: 'error',
          message: 'El album ya esta agregado.'
        });
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="flex flex-col gap-3">
        <div>
          <AlbumAvatarUpload
            coverUrl={coverUrl}
            setCoverUrl={setCoverUrl}
            // setFileUpload={setFileUpload}
            formikError={formik.errors.avatarCover}
            setErrorFileSettings={setErrorFileSettings}
          />
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
          {coverUrl && <ResizeCropImage imagePath={coverUrl} setFileUpload={setFileUpload} />}
        </div>
        <div>
          <FormInputModal
            disabled={loading}
            autoFocus
            name="albumName"
            placeholder="Nombre del album"
            error={formik.touched.albumName && formik.errors.albumName}
            value={formik.values.albumName}
            onChange={formik.handleChange}
            // errmessage="Test of error message"
          />
          {formik.errors.albumName && (
            <p className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
              {formik.errors.albumName}
            </p>
          )}
        </div>
        <div>
          <Select
            isDisabled={loading}
            value={selectValue}
            styles={customStyles}
            options={artists}
            className={`text-background ${
              formik.errors.artist ? 'ring-red-600 ring-2 rounded' : ''
            }`}
            isLoading={false}
            placeholder="Artistas..."
            name=""
            onChange={(artistSelected) => {
              setSelectValue(artistSelected);
              formik.values.artist = artistSelected.id;
            }}
            getOptionValue={(artist) => artist.id}
            getOptionLabel={(artist) => artist.name}
            noOptionsMessage={() => 'No se encontro resultados'}
          />
          {formik.errors.artist && (
            <p className="trun mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
              {formik.errors.artist}
            </p>
          )}
        </div>
      </section>

      <FormButton loading={loading} disabled={loading}>
        Agregar
      </FormButton>
    </form>
  );
}
