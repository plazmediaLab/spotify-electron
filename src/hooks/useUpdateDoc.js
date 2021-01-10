import { useContext, useState } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import { db } from 'utils/Firebase';

function useUpdateDoc() {
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const updateDocFirebase = async (collection, doc, data) => {
    setLoading(true);
    db.collection(collection)
      .doc(doc)
      .update(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toastMessageMethod({
          type: 'error',
          message: 'Sucedio un error al actualizar el documento, intentelo más tarde.',
          closeTime: 4000
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [updateDocFirebase, loading];
}

export default useUpdateDoc;
