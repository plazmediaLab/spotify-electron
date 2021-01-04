import { useContext } from 'react';
import AppContext from 'reducer/App/AppContext';
import { db } from 'utils/Firebase';

function useAlbumsData() {
  const appContext = useContext(AppContext);
  const { getAlbumsMethod } = appContext;

  const getAlbumsData = async () => {
    db.collection('albums').onSnapshot((querySnapshot) => {
      let queryData = [];
      querySnapshot?.forEach((item) => {
        const queryItem = item?.data();
        queryItem.id = item?.id;
        queryData.push(queryItem);
      });
      getAlbumsMethod(queryData);
    });
  };

  return [getAlbumsData];
}

export default useAlbumsData;
